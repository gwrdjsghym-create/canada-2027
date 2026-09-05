<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$file = (string) ($_GET['file'] ?? '');
if ($file !== 'app.js') { http_response_code(404); exit; }
header('Content-Type: application/javascript; charset=utf-8');
header('Cache-Control: private, max-age=300');
readfile(__DIR__ . '/app.js');
