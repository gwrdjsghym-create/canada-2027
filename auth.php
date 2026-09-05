<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$profile = canada_require_api();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$info = CANADA_PROFILES[$profile];
echo json_encode(['profile' => $profile, 'name' => $info['name'], 'avatar' => $info['avatar'], 'csrf' => canada_csrf()], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
