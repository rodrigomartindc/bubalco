<?php
/**
 * Copy this file to your server as `config.php` OUTSIDE public_html.
 *
 * Typical Hostinger path:
 *   /home/uXXXX/domains/your-domain.com/config.php
 *
 * IMPORTANT: never commit real secrets.
 */

return [
  // Public site origin (used to build back_urls + notification_url)
  // Example: 'https://bubalco.com'
  'SITE_URL' => 'https://example.com',

  // Mercado Pago
  // Get from Mercado Pago panel (Access Token)
  'MP_ACCESS_TOKEN' => 'YOUR_MP_ACCESS_TOKEN',
  'MP_CURRENCY' => 'ARS',

  // Webhook protection (simple shared token). Put a long random string here.
  'MP_WEBHOOK_TOKEN' => 'CHANGE_ME_TO_A_LONG_RANDOM_TOKEN',

  // Donation "products" (server is source of truth for amounts)
  'DONATION_PRODUCTS' => [
    'feed_1' => ['title' => 'Alimento para un rescatado', 'unit_price' => 5000],
    'vet_1' => ['title' => 'Apoyo veterinario', 'unit_price' => 10000],
    'rescue_1' => ['title' => 'Aporte para rescate', 'unit_price' => 20000],
  ],

  // Email (optional): if true, webhook sends thank-you email to payer email
  'SEND_THANKYOU_EMAIL' => false,
  'THANKYOU_SUBJECT' => '¡Gracias por tu donación!',
  'MAIL_FROM' => 'no-reply@example.com',
  'MAIL_FROM_NAME' => 'Bubalco',

  // Where to store logs/idempotency outside public_html (optional)
  // Example: '/home/uXXXX/domains/your-domain.com/_bubalco_data'
  // 'DATA_DIR' => '/absolute/path/outside/public_html/_bubalco_data',
];


