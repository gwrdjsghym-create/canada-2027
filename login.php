<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_session();

$config = is_file(__DIR__ . '/site-config.php') ? require __DIR__ . '/site-config.php' : [];
$next = canada_safe_next((string) ($_POST['next'] ?? $_GET['next'] ?? '/index.php'));
$error = '';
$chooseProfile = !empty($_SESSION['canada_pin_verified']);

if (isset($_GET['switch']) && !empty($_SESSION['canada_authenticated'])) $chooseProfile = true;

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    if (!canada_origin_ok()) {
        $error = 'Diese Anfrage konnte nicht bestätigt werden.';
    } elseif (isset($_POST['pin'])) {
        $now = time();
        $attempts = array_values(array_filter((array) ($_SESSION['pin_attempts'] ?? []), fn($time) => is_int($time) && $time > $now - 600));
        if (count($attempts) >= 6) {
            $error = 'Zu viele Versuche. Bitte wartet zehn Minuten.';
        } else {
            $attempts[] = $now;
            $_SESSION['pin_attempts'] = $attempts;
            $pin = preg_replace('/\D/', '', (string) $_POST['pin']);
            $salt = (string) ($config['pinSalt'] ?? '');
            $iterations = (int) ($config['pinIterations'] ?? 210000);
            $expected = (string) ($config['pinHash'] ?? '');
            $actual = $salt === '' ? '' : hash_pbkdf2('sha256', $pin, $salt, $iterations, 64);
            if ($expected !== '' && hash_equals($expected, $actual)) {
                $_SESSION['canada_pin_verified'] = $now + 300;
                $_SESSION['pin_attempts'] = [];
                $chooseProfile = true;
            } else {
                usleep(350000);
                $error = 'Die PIN stimmt nicht.';
            }
        }
    } elseif (isset($_POST['profile'])) {
        $profile = (string) $_POST['profile'];
        $verifiedUntil = (int) ($_SESSION['canada_pin_verified'] ?? 0);
        if ((!empty($_SESSION['canada_authenticated']) || $verifiedUntil >= time()) && isset(CANADA_PROFILES[$profile])) {
            session_regenerate_id(true);
            $_SESSION['canada_authenticated'] = true;
            $_SESSION['canada_profile'] = $profile;
            $_SESSION['canada_csrf'] = bin2hex(random_bytes(24));
            unset($_SESSION['canada_pin_verified']);
            header('Location: ' . $next, true, 303);
            exit;
        }
        $chooseProfile = false;
        $error = 'Bitte gebt die PIN noch einmal ein.';
    }
}

if (!empty($_SESSION['canada_authenticated']) && !$chooseProfile) {
    header('Location: ' . $next, true, 302);
    exit;
}
?>
<!doctype html>
<html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#b3262d"><meta name="robots" content="noindex,nofollow"><title>Anmeldung · Canada 2027</title><link rel="stylesheet" href="styles.css"></head>
<body class="login-page">
  <main class="login-shell">
    <section class="login-card">
      <div class="login-maple" aria-hidden="true">🍁</div>
      <p class="eyebrow">Unsere Reise · Unser Bereich</p>
      <h1>Canada 2027</h1>
      <?php if ($chooseProfile): ?>
        <p class="login-copy">Wer plant gerade mit?</p>
        <div class="profile-grid">
          <?php foreach (CANADA_PROFILES as $id => $profile): ?>
            <form method="post"><input type="hidden" name="next" value="<?= htmlspecialchars($next, ENT_QUOTES) ?>"><input type="hidden" name="profile" value="<?= $id ?>"><button class="profile-choice" type="submit"><i class="avatar <?= $profile['avatar'] ?>"></i><strong><?= $profile['name'] ?></strong><span>Weiter →</span></button></form>
          <?php endforeach; ?>
        </div>
      <?php else: ?>
        <p class="login-copy">Gebt eure gemeinsame PIN ein. Anschließend wählt ihr aus, wer von euch die Seite nutzt.</p>
        <?php if ($error): ?><p class="form-error" role="alert"><?= htmlspecialchars($error, ENT_QUOTES) ?></p><?php endif; ?>
        <form class="pin-form" method="post">
          <input type="hidden" name="next" value="<?= htmlspecialchars($next, ENT_QUOTES) ?>">
          <label for="pin">Gemeinsame PIN</label>
          <input id="pin" name="pin" type="password" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" required autofocus aria-describedby="pin-hint">
          <small id="pin-hint">6 Ziffern</small>
          <button class="primary-button" type="submit">Profile anzeigen</button>
        </form>
      <?php endif; ?>
    </section>
  </main>
</body></html>
