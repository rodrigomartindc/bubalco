<?php
declare(strict_types=1);

require_once __DIR__ . '/../_shared.php';

require_method('POST');

$cfg = load_app_config();
$body = read_json_body();

$donationId = isset($body['donation_id']) ? (string)$body['donation_id'] : '';
$email = isset($body['email']) ? trim((string)$body['email']) : '';

if ($donationId === '') {
  send_json(400, ['ok' => false, 'error' => 'Missing donation_id']);
}

if (empty($cfg['MP_ACCESS_TOKEN'])) {
  send_json(500, ['ok' => false, 'error' => 'Missing MP_ACCESS_TOKEN in config']);
}

if (empty($cfg['DONATION_PRODUCTS']) || !is_array($cfg['DONATION_PRODUCTS'])) {
  send_json(500, ['ok' => false, 'error' => 'Missing DONATION_PRODUCTS in config']);
}

if (empty($cfg['DONATION_PRODUCTS'][$donationId]) || !is_array($cfg['DONATION_PRODUCTS'][$donationId])) {
  send_json(400, ['ok' => false, 'error' => 'Unknown donation_id']);
}

$product = $cfg['DONATION_PRODUCTS'][$donationId];
$title = (string)($product['title'] ?? 'Donación');
$unitPrice = (float)($product['unit_price'] ?? 0);
$currency = (string)($cfg['MP_CURRENCY'] ?? 'ARS');

if ($unitPrice <= 0) {
  send_json(500, ['ok' => false, 'error' => 'Invalid product unit_price']);
}

$origin = (string)($cfg['SITE_URL'] ?? '');
if ($origin === '') $origin = get_origin();
if ($origin === '') {
  send_json(500, ['ok' => false, 'error' => 'Cannot determine SITE_URL; set SITE_URL in config']);
}

$externalRef = 'donation_' . $donationId . '_' . time() . '_' . bin2hex(random_bytes(6));

$notificationUrl = '';
if (!empty($cfg['MP_WEBHOOK_TOKEN']) && is_string($cfg['MP_WEBHOOK_TOKEN'])) {
  $notificationUrl = rtrim($origin, '/') . '/api/mp/webhook.php?token=' . urlencode($cfg['MP_WEBHOOK_TOKEN']);
}

$payload = [
  'items' => [[
    'id' => $donationId,
    'title' => $title,
    'quantity' => 1,
    'unit_price' => $unitPrice,
    'currency_id' => $currency,
  ]],
  'external_reference' => $externalRef,
  'back_urls' => [
    'success' => rtrim($origin, '/') . '/gracias',
    'failure' => rtrim($origin, '/') . '/gracias',
    'pending' => rtrim($origin, '/') . '/gracias',
  ],
  'auto_return' => 'approved',
];

if ($notificationUrl !== '') {
  $payload['notification_url'] = $notificationUrl;
}

if ($email !== '') {
  $payload['payer'] = ['email' => $email];
}

$ch = curl_init('https://api.mercadopago.com/checkout/preferences');
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $cfg['MP_ACCESS_TOKEN'],
    'Content-Type: application/json',
  ],
  CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
  CURLOPT_TIMEOUT => 20,
]);

$resp = curl_exec($ch);
$err = curl_error($ch);
$status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($resp === false) {
  log_line($cfg, 'mp_errors.log', "create_preference curl_error: $err");
  send_json(502, ['ok' => false, 'error' => 'Mercado Pago request failed']);
}

$data = json_decode((string)$resp, true);
if (!is_array($data)) {
  log_line($cfg, 'mp_errors.log', "create_preference invalid_json status=$status body=" . substr((string)$resp, 0, 500));
  send_json(502, ['ok' => false, 'error' => 'Mercado Pago invalid response']);
}

if ($status < 200 || $status >= 300) {
  log_line($cfg, 'mp_errors.log', "create_preference status=$status body=" . json_encode($data));
  send_json(502, ['ok' => false, 'error' => 'Mercado Pago error', 'details' => $data]);
}

$initPoint = (string)($data['init_point'] ?? '');
if ($initPoint === '') {
  log_line($cfg, 'mp_errors.log', "create_preference missing init_point body=" . json_encode($data));
  send_json(502, ['ok' => false, 'error' => 'Missing init_point from Mercado Pago']);
}

send_json(200, [
  'ok' => true,
  'init_point' => $initPoint,
  'external_reference' => $externalRef,
]);


