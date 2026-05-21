<?php
declare(strict_types=1);

require_once __DIR__ . '/../_shared.php';

$cfg = load_app_config();

// Simple shared-secret token (recommended for shared hosting when signature verification is unclear).
// Configure MP_WEBHOOK_TOKEN in config and set Mercado Pago notification_url accordingly.
if (!empty($cfg['MP_WEBHOOK_TOKEN']) && is_string($cfg['MP_WEBHOOK_TOKEN'])) {
  $token = isset($_GET['token']) ? (string)$_GET['token'] : '';
  if (!hash_equals($cfg['MP_WEBHOOK_TOKEN'], $token)) {
    send_json(401, ['ok' => false, 'error' => 'Unauthorized']);
  }
}

if (empty($cfg['MP_ACCESS_TOKEN'])) {
  send_json(500, ['ok' => false, 'error' => 'Missing MP_ACCESS_TOKEN in config']);
}

// Mercado Pago may send JSON body (webhook) or form-urlencoded (notifications).
$payloadRaw = file_get_contents('php://input') ?: '';
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

$payload = [];
if (stripos($contentType, 'application/json') !== false && $payloadRaw !== '') {
  $decoded = json_decode($payloadRaw, true);
  if (is_array($decoded)) $payload = $decoded;
} else {
  // Fallback to query/form params
  $payload = array_merge($_GET, $_POST);
}

// Extract payment ID across common shapes:
// - { "type": "payment", "data": { "id": "123" } }
// - { "data_id": "123", "type": "payment" }
// - query: ?id=123&topic=payment
$paymentId = '';
if (!empty($payload['data']['id'])) $paymentId = (string)$payload['data']['id'];
if ($paymentId === '' && !empty($payload['data_id'])) $paymentId = (string)$payload['data_id'];
if ($paymentId === '' && !empty($payload['id'])) $paymentId = (string)$payload['id'];

if ($paymentId === '') {
  log_line($cfg, 'mp_webhook.log', 'Webhook received without payment id: ' . substr($payloadRaw, 0, 500));
  send_json(200, ['ok' => true]); // Ack to avoid retries storm
}

// Idempotency: store processed payment IDs outside public_html if possible.
$dataDir = get_data_dir($cfg);
if (!is_dir($dataDir)) @mkdir($dataDir, 0755, true);
$processedFile = rtrim($dataDir, '/') . '/mp_processed.json';
$processed = [];
if (is_file($processedFile)) {
  $existing = json_decode((string)file_get_contents($processedFile), true);
  if (is_array($existing)) $processed = $existing;
}
if (!empty($processed[$paymentId])) {
  send_json(200, ['ok' => true, 'deduped' => true]);
}

// Fetch payment details server-to-server (source of truth)
$url = 'https://api.mercadopago.com/v1/payments/' . urlencode($paymentId);
$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $cfg['MP_ACCESS_TOKEN'],
    'Content-Type: application/json',
  ],
  CURLOPT_TIMEOUT => 20,
]);
$resp = curl_exec($ch);
$err = curl_error($ch);
$status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($resp === false) {
  log_line($cfg, 'mp_errors.log', "webhook verify curl_error: $err payment_id=$paymentId");
  send_json(200, ['ok' => true]); // ack to let MP retry later
}

$data = json_decode((string)$resp, true);
if (!is_array($data) || $status < 200 || $status >= 300) {
  log_line($cfg, 'mp_errors.log', "webhook verify bad_response status=$status payment_id=$paymentId body=" . substr((string)$resp, 0, 500));
  send_json(200, ['ok' => true]);
}

$payStatus = (string)($data['status'] ?? '');
if ($payStatus !== 'approved') {
  // Not approved yet; acknowledge and allow later webhook events.
  log_line($cfg, 'mp_webhook.log', "payment_id=$paymentId status=$payStatus");
  send_json(200, ['ok' => true, 'status' => $payStatus]);
}

// Mark processed before sending emails (avoid duplicate thanks on retries)
$processed[$paymentId] = [
  'ts' => time(),
  'external_reference' => $data['external_reference'] ?? null,
  'transaction_amount' => $data['transaction_amount'] ?? null,
  'payer_email' => $data['payer']['email'] ?? null,
];
@file_put_contents($processedFile, json_encode($processed, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

// Send thank-you email (optional)
$to = (string)($data['payer']['email'] ?? '');
$from = (string)($cfg['MAIL_FROM'] ?? '');
$fromName = (string)($cfg['MAIL_FROM_NAME'] ?? 'Bubalco');

if ($to !== '' && !empty($cfg['SEND_THANKYOU_EMAIL'])) {
  $subject = (string)($cfg['THANKYOU_SUBJECT'] ?? '¡Gracias por tu donación!');
  $amount = $data['transaction_amount'] ?? '';
  $currency = $data['currency_id'] ?? '';
  $ref = $data['external_reference'] ?? '';

  $message = "¡Gracias por tu donación!\n\n";
  $message .= "Monto: $amount $currency\n";
  $message .= "Referencia: $ref\n\n";
  $message .= "Tu aporte ayuda a seguir cuidando y rescatando animales.\n";

  $headers = [];
  if ($from !== '') {
    $headers[] = 'From: ' . ($fromName !== '' ? $fromName . ' <' . $from . '>' : $from);
    $headers[] = 'Reply-To: ' . $from;
  }
  $headers[] = 'Content-Type: text/plain; charset=UTF-8';

  $params = '';
  if ($from !== '') $params = '-f' . $from;

  $ok = @mail($to, $subject, $message, implode("\r\n", $headers), $params);
  log_line($cfg, 'mp_mail.log', "payment_id=$paymentId mail_to=$to ok=" . ($ok ? '1' : '0'));
}

send_json(200, ['ok' => true, 'processed' => true]);


