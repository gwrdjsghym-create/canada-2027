<?php
declare(strict_types=1);

const CANADA_PROFILES = [
    'andrea' => ['name' => 'Andrea', 'avatar' => 'avatar-andrea'],
    'lars' => ['name' => 'Lars', 'avatar' => 'avatar-lars'],
    'christina' => ['name' => 'Christina', 'avatar' => 'avatar-christina'],
    'manfred' => ['name' => 'Manfred', 'avatar' => 'avatar-manfred'],
];

function canada_session(): void {
    if (session_status() === PHP_SESSION_ACTIVE) return;
    session_name('canada2027');
    session_set_cookie_params([
        'lifetime' => 60 * 60 * 24 * 30,
        'path' => '/',
        'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function canada_profile(): ?string {
    canada_session();
    $profile = $_SESSION['canada_profile'] ?? null;
    return is_string($profile) && isset(CANADA_PROFILES[$profile]) ? $profile : null;
}

function canada_csrf(): string {
    canada_session();
    if (empty($_SESSION['canada_csrf'])) $_SESSION['canada_csrf'] = bin2hex(random_bytes(24));
    return (string) $_SESSION['canada_csrf'];
}

function canada_safe_next(string $value): string {
    if ($value === '' || $value[0] !== '/' || substr($value, 0, 2) === '//') return '/index.php';
    return preg_match('#^/[a-zA-Z0-9._/?=&%-]*$#', $value) ? $value : '/index.php';
}

function canada_require_login(): void {
    canada_session();
    if (!empty($_SESSION['canada_authenticated']) && canada_profile() !== null) return;
    $path = $_SERVER['REQUEST_URI'] ?? '/index.php';
    header('Location: login.php?next=' . rawurlencode(canada_safe_next($path)), true, 302);
    exit;
}

function canada_require_api(): string {
    canada_session();
    $profile = canada_profile();
    if (empty($_SESSION['canada_authenticated']) || $profile === null) {
        http_response_code(401);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['error' => 'Anmeldung erforderlich'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    return $profile;
}

function canada_require_csrf(): void {
    $provided = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (!is_string($provided) || !hash_equals(canada_csrf(), $provided)) {
        http_response_code(403);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['error' => 'Sitzung abgelaufen'], JSON_UNESCAPED_UNICODE);
        exit;
    }
}

function canada_origin_ok(): bool {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $host = $_SERVER['HTTP_HOST'] ?? '';
    return $origin === '' || parse_url($origin, PHP_URL_HOST) === preg_replace('/:\\d+$/', '', $host);
}
