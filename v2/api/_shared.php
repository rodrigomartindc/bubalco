<?php
declare(strict_types=1);

function send_json(int $statusCode, array $payload): void {
  http_response_code($statusCode);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store');
  echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  exit;
}

function require_method(string $method): void {
  $req = $_SERVER['REQUEST_METHOD'] ?? 'GET';
  if (strtoupper($req) !== strtoupper($method)) {
    send_json(405, ['ok' => false, 'error' => 'Method not allowed']);
  }
}

function read_json_body(): array {
  $raw = file_get_contents('php://input') ?: '';
  if ($raw === '') return [];
  $data = json_decode($raw, true);
  if (!is_array($data)) {
    send_json(400, ['ok' => false, 'error' => 'Invalid JSON body']);
  }
  return $data;
}

function get_origin(): string {
  $proto = $_SERVER['HTTP_X_FORWARDED_PROTO'] ?? ($_SERVER['HTTPS'] ?? '' ? 'https' : 'http');
  $host = $_SERVER['HTTP_X_FORWARDED_HOST'] ?? ($_SERVER['HTTP_HOST'] ?? '');
  if ($host === '') return '';
  return $proto . '://' . $host;
}

function load_app_config(): array {
  $candidates = [];

  $envPath = getenv('BUBALCO_CONFIG_PATH');
  if ($envPath) $candidates[] = $envPath;

  if (!empty($_SERVER['DOCUMENT_ROOT'])) {
    $candidates[] = rtrim(dirname((string)$_SERVER['DOCUMENT_ROOT']), '/') . '/config.php';
  }

  // Typical Hostinger layout:
  // /home/uXXXX/domains/example.com/public_html/api/...
  // config.php outside public_html:
  // /home/uXXXX/domains/example.com/config.php
  $candidates[] = __DIR__ . '/../../../../config.php';
  $candidates[] = __DIR__ . '/../../../config.php';

  foreach ($candidates as $path) {
    $real = realpath($path);
    if ($real && is_file($real)) {
      /** @noinspection PhpIncludeInspection */
      $cfg = require $real;
      if (!is_array($cfg)) {
        send_json(500, ['ok' => false, 'error' => 'Config file must return an array']);
      }
      return $cfg;
    }
  }

  send_json(500, ['ok' => false, 'error' => 'Config not found. Create config.php outside public_html and/or set BUBALCO_CONFIG_PATH']);
}

function get_data_dir(array $cfg): string {
  if (!empty($cfg['DATA_DIR']) && is_string($cfg['DATA_DIR'])) return rtrim($cfg['DATA_DIR'], '/');
  if (!empty($_SERVER['DOCUMENT_ROOT'])) {
    return rtrim(dirname((string)$_SERVER['DOCUMENT_ROOT']), '/') . '/_bubalco_data';
  }
  return sys_get_temp_dir() . '/_bubalco_data';
}

function log_line(array $cfg, string $filename, string $line): void {
  $dir = get_data_dir($cfg);
  if (!is_dir($dir)) {
    @mkdir($dir, 0755, true);
  }
  $path = $dir . '/' . $filename;
  $ts = date('c');
  @file_put_contents($path, "[$ts] $line\n", FILE_APPEND);
}


