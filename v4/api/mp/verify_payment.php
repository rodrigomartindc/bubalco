<?php
declare(strict_types=1);

require_once __DIR__ . '/../_shared.php';

$cfg = load_app_config();

if (empty($cfg['MP_ACCESS_TOKEN'])) {
  send_json(500, ['ok' => false, 'error' => 'Missing MP_ACCESS_TOKEN in config']);
}

$paymentId = isset($_GET['payment_id']) ? trim((string)$_GET['payment_id']) : '';
$collectionId = isset($_GET['collection_id']) ? trim((string)$_GET['collection_id']) : '';

$id = $paymentId !== '' ? $paymentId : $collectionId;
if ($id === '') {
  send_json(400, ['ok' => false, 'error' => 'Missing payment_id (or collection_id)']);
}

$url = 'https://api.mercadopago.com/v1/payments/' . urlencode($id);

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
  log_line($cfg, 'mp_errors.log', "verify_payment curl_error: $err");
  send_json(502, ['ok' => false, 'error' => 'Mercado Pago request failed']);
}

$data = json_decode((string)$resp, true);
if (!is_array($data)) {
  log_line($cfg, 'mp_errors.log', "verify_payment invalid_json status=$status body=" . substr((string)$resp, 0, 500));
  send_json(502, ['ok' => false, 'error' => 'Mercado Pago invalid response']);
}

if ($status < 200 || $status >= 300) {
  send_json(502, ['ok' => false, 'error' => 'Mercado Pago error', 'details' => $data]);
}

send_json(200, [
  'ok' => true,
  'id' => $data['id'] ?? null,
  'status' => $data['status'] ?? null,
  'status_detail' => $data['status_detail'] ?? null,
  'external_reference' => $data['external_reference'] ?? null,
  'payer_email' => $data['payer']['email'] ?? null,
  'transaction_amount' => $data['transaction_amount'] ?? null,
  'currency_id' => $data['currency_id'] ?? null,
]);


