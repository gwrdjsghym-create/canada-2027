<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$profileId = canada_profile();
$profile = CANADA_PROFILES[$profileId];
?>
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#b3262d" />
    <meta name="description" content="Gemeinsame Reiseplanung für Canada 2027" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Canada 2027</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="index.php" aria-label="Canada 2027 – Startseite">
        <span class="brand-mark">🍁</span>
        <span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span>
      </a>
      <nav class="desktop-nav" aria-label="Hauptnavigation">
        <a class="active" href="#top">Start</a>
        <a href="#checklists">Checklisten</a>
        <a href="#route">Destinationen</a>
        <a href="#travellers">Reisende</a>
      </nav>
      <a class="profile-chip" href="login.php?switch=1&amp;next=%2Findex.php" aria-label="Profil wechseln"><i class="avatar <?= $profile['avatar'] ?>"></i><span><?= $profile['name'] ?></span></a>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-content">
          <div class="hero-badges"><span class="flag-badge">🇨🇦 Canada</span><span class="province-badge">⚜ Québec</span></div>
          <p class="eyebrow">Unsere Rundreise · Indian Summer 2027</p>
          <h1 id="hero-title">Vier Menschen.<br /><em>Ein kanadischer Herbst.</em></h1>
          <p class="hero-copy">Von Montréal über den Saguenay bis nach Orford – Wälder in Ahornrot, klare Seen und gemeinsam ausgesuchte Abenteuer.</p>
          <a class="hero-cta" href="#route">Die Route entdecken <span>↓</span></a>
        </div>
        <div class="hero-side">
          <div class="canada-landscape" aria-hidden="true"><span class="sun"></span><span class="mountain mountain-one"></span><span class="mountain mountain-two"></span><span class="forest-line">▲ ▲ ▲ ▲ ▲</span><span class="maple-leaf">🍁</span></div>
          <div class="countdown-card" aria-label="Countdown bis zum Reisestart">
            <span class="countdown-kicker">Noch bis zum Abflug</span>
            <div class="countdown" id="countdown"><span><strong id="countdown-days">–</strong><small>Tage</small></span><span><strong id="countdown-hours">–</strong><small>Std.</small></span><span><strong id="countdown-minutes">–</strong><small>Min.</small></span></div>
            <p>Freitag, 17. September 2027</p>
          </div>
        </div>
      </section>

      <section class="section" id="route">
        <div class="section-head">
          <div><p class="eyebrow">Reiseverlauf</p><h2>Etappe für Etappe</h2></div>
          <div class="legend"><span><i class="dot stay"></i> Aufenthalt</span><span><i class="dot move"></i> Fahrtag</span><span><i class="dot booked"></i> Gebucht</span></div>
        </div>
        <div class="destination-tabs" id="destination-tabs" role="tablist" aria-label="Destination auswählen"></div>
        <div class="route-list" id="route-list"></div>
      </section>

      <section class="section checklist-section" id="checklists">
        <div class="section-head checklist-head">
          <div><p class="eyebrow">Gut vorbereitet</p><h2>Unsere Checklisten</h2><p>Wählt zuerst euer Reisepaar. Die eigentlichen Listen öffnen sich erst nach dem Antippen.</p></div>
          <span class="local-note" id="sync-status">Gemeinsam synchronisiert</span>
        </div>
        <div class="checklist-groups" id="checklist-root"></div>
      </section>

      <section class="section travellers" id="travellers">
        <div><p class="eyebrow">Reisegruppe</p><h2>Wir vier</h2><p>Ideen bewerten und gemeinsam besprechen: Jede Stimme und jeder Kommentar wird dem ausgewählten Profil zugeordnet.</p></div>
        <div class="people" aria-label="Reisende">
          <span><i class="avatar avatar-lars" role="img" aria-label="Memoji von Lars"></i>Lars</span>
          <span><i class="avatar avatar-andrea" role="img" aria-label="Memoji von Andrea"></i>Andrea</span>
          <span><i class="avatar avatar-manfred" role="img" aria-label="Memoji von Manfred"></i>Manfred</span>
          <span><i class="avatar avatar-christina" role="img" aria-label="Memoji von Christina"></i>Christina</span>
        </div>
      </section>
    </main>

    <nav class="mobile-nav" aria-label="Mobile Navigation">
      <a href="#top"><span>🍁</span>Start</a><a href="#checklists"><span>✓</span>Listen</a><a href="#route"><span>⌘</span>Ziele</a><a href="#travellers"><span>♙</span>Wir vier</a>
    </nav>

    <dialog id="details-dialog"><button class="close-dialog" aria-label="Detailansicht schließen">×</button><div id="dialog-content"></div></dialog>
    <dialog id="checklist-dialog">
      <button class="close-checklist-dialog" aria-label="Fenster schließen">×</button>
      <form id="new-list-form"><p class="eyebrow">Neue Themenliste</p><h2>Was möchtet ihr vorbereiten?</h2><label for="new-list-title">Name der Liste</label><input id="new-list-title" name="title" required maxlength="60" placeholder="z. B. Wanderausrüstung" /><input id="new-list-couple" name="couple" type="hidden" /><button class="primary-button" type="submit">Liste hinzufügen</button></form>
    </dialog>
    <script src="app.js?v=20260905-5"></script>
  </body>
</html>
