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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#143b2b">
  <meta name="description" content="Canada 2027 – Flughafentransfer Montréal">
  <meta name="robots" content="noindex,nofollow">
  <title>Flughafentransfer Montréal · Canada 2027</title>
  <link rel="stylesheet" href="styles.css?v=20261012-2">
</head>
<body class="airport-guide-page">
<header class="topbar">
  <a class="brand" href="index.php"><span class="brand-mark">🍁</span><span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span></a>
  <nav class="desktop-nav"><a href="index.php">Übersicht</a><a href="01-montreal.php">Montréal</a><a class="active" href="01-flughafentransfer.php">Flughafentransfer</a><a href="abstimmungen.php">Abstimmen</a></nav>
  <a class="profile-chip" href="login.php?switch=1&amp;next=<?= rawurlencode($_SERVER['REQUEST_URI'] ?? '/01-flughafentransfer.php') ?>" aria-label="Profil wechseln"><i class="avatar <?= $profile['avatar'] ?>"></i><span><?= $profile['name'] ?></span></a>
</header>

<section class="airport-guide-hero" id="top">
  <div class="airport-guide-hero-inner">
    <a class="back-link" href="01-montreal.php">← Zurück zu Montréal</a>
    <p class="eyebrow">Ankunft · Freitag, 17. September 2027</p>
    <h1>Vom Flugzeug direkt zum richtigen Taxi</h1>
    <p>Eine eindeutige Anleitung für vier Personen mit Gepäck – ohne Suchen, Umsteigen oder Tarifrätsel.</p>
    <div class="destination-hero-chips"><span>YUL · Ankunft 12:00</span><span>Taxi · Tür 23</span><span>Uville Hotel</span><span>UberXL nur Alternative</span></div>
  </div>
</section>

<main class="airport-guide-main">
  <section class="section airport-quick-card">
    <div>
      <p class="eyebrow">Das müsst ihr euch merken</p>
      <h2>Ankunftsebene · Tür 23 · offizieller Taxi-Dispatcher</h2>
      <p>Keine Vorbestellung nötig. Beim Dispatcher ausdrücklich einen Minivan für vier Erwachsene und vier große Koffer verlangen.</p>
    </div>
    <div class="airport-address">
      <small>Zieladresse zum Vorzeigen</small>
      <strong>Uville Hotel</strong>
      <span>204 Place d’Youville<br>Montréal, QC H2Y 2B4</span>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><div><p class="eyebrow">Schritt für Schritt</p><h2>So findet ihr den Taxistand</h2></div><span class="local-note">Stand · Oktober 2026</span></div>
    <ol class="airport-steps">
      <li><span>1</span><div><h3>Nach der Landung der Beschilderung „Arrivals / Arrivées“ folgen</h3><p>Durch die Passkontrolle gehen und anschließend die aufgegebenen Koffer am Gepäckband abholen.</p></div></li>
      <li><span>2</span><div><h3>Zollbereich vollständig verlassen</h3><p>Nach der letzten Zollkontrolle durch den Ausgang in die öffentlich zugängliche Ankunftshalle gehen. Auf der Ankunftsebene bleiben.</p></div></li>
      <li><span>3</span><div><h3>Den Schildern „Taxi“ bis Tür 23 folgen</h3><p>Nicht zu Tür 28 gehen – dort liegen Uber-Abholung und der Shuttle zum Mietwagenzentrum. Für das Taxi ist ausschließlich Tür 23 der einfache Zielpunkt.</p></div></li>
      <li><span>4</span><div><h3>Am Dispatcher einen Minivan verlangen</h3><p>Der Mitarbeiter vor Ort teilt das passende Fahrzeug zu. Ein Minivan kann laut Flughafen fünf bis sechs Personen und bis zu fünf mittelgroße Koffer aufnehmen.</p><div class="say-card"><small>Einfach sagen</small><strong>“A minivan, please. Four adults and four large suitcases.”</strong></div></div></li>
      <li><span>5</span><div><h3>Hoteladresse zeigen und einsteigen</h3><p>Die Fahrt geht ohne Umstieg direkt zum Uville Hotel. Der aktuelle offizielle Tagestarif zwischen YUL und der Innenstadt beträgt 49,45 CAD; den Tarif für 2027 prüfen wir vor der Reise erneut.</p></div></li>
    </ol>
  </section>

  <section class="section airport-choice">
    <div class="section-head"><div><p class="eyebrow">Unsere Entscheidung</p><h2>Taxi als Standard, UberXL als Reserve</h2></div></div>
    <div class="airport-choice-grid">
      <article class="recommended"><span>Empfohlen</span><h3>🚕 Offizielles Großraumtaxi</h3><ul><li>Tür 23 auf der Ankunftsebene</li><li>Dispatcher hilft bei der Fahrzeugwahl</li><li>Keine Vorbestellung erforderlich</li><li>Fester Innenstadt-Tarif statt dynamischem Preis</li></ul></article>
      <article><span>Nur Alternative</span><h3>UberXL</h3><ul><li>Abholung über Tür 28</li><li>App-Anweisungen zum Leigh-Capreol-Bereich folgen</li><li>Nur wählen, wenn Preis und Wartezeit sinnvoll sind</li><li>UberX ist für vier Personen plus große Koffer zu knapp</li></ul></article>
    </div>
  </section>

  <section class="section rental-transfer">
    <div class="section-head"><div><p class="eyebrow">Montag · 20. September 2027</p><h2>Vom Hotel zum Ford Expedition</h2></div></div>
    <div class="rental-route">
      <div><b>1</b><span><strong>Uville Hotel</strong><small>Großraumtaxi für alle vier samt Gepäck bestellen lassen</small></span></div>
      <i>→</i>
      <div><b>2</b><span><strong>YUL · Tür 28</strong><small>Leigh-Capreol auf der Ankunftsebene</small></span></div>
      <i>→</i>
      <div><b>3</b><span><strong>Kostenloser Shuttle</strong><small>Direkt zum Mietwagenzentrum im Parkhaus P4</small></span></div>
      <i>→</i>
      <div><b>4</b><span><strong>Ford Expedition</strong><small>Übernahme, Gepäck einladen und Richtung Mauricie starten</small></span></div>
    </div>
    <p class="airport-update-note"><strong>Vor der Reise erneut prüfen:</strong> Türnummern, Taxitarif, Mietwagenanbieter und Abholzeit können sich bis September 2027 ändern.</p>
  </section>

  <section class="section airport-sources">
    <div class="section-head"><div><p class="eyebrow">Offizielle Informationen</p><h2>Im Zweifel direkt nachsehen</h2></div></div>
    <div>
      <a href="https://yulsatisfaction.admtl.com/hc/en-ca/articles/360000862097-Where-can-I-find-a-taxi-or-an-accessible-taxi-at-the-airport" target="_blank" rel="noopener">Taxi am YUL · Tür 23 ↗</a>
      <a href="https://yulsatisfaction.admtl.com/hc/en-ca/articles/29089615800733-Can-a-taxi-accommodate-a-group-with-multiple-pieces-of-luggage" target="_blank" rel="noopener">Minivan und Gepäck ↗</a>
      <a href="https://yulsatisfaction.admtl.com/hc/en-ca/articles/360000846597-How-do-I-book-a-ride-with-Uber-from-YUL" target="_blank" rel="noopener">Uber-Abholung · Tür 28 ↗</a>
      <a href="https://yulsatisfaction.admtl.com/hc/en-ca/articles/360000839397-Where-are-the-vehicle-rental-service-counters" target="_blank" rel="noopener">Mietwagenzentrum P4 ↗</a>
    </div>
  </section>
</main>

<nav class="mobile-nav"><a href="index.php"><span>⌁</span>Reise</a><a href="01-montreal.php"><span>⌂</span>Montréal</a><a class="active" href="01-flughafentransfer.php"><span>🚕</span>Transfer</a></nav>
</body>
</html>
