<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$profileId = canada_profile();
$profile = CANADA_PROFILES[$profileId];
$csrf = canada_csrf();
?>
<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#143b2b">
<meta name="description" content="Canada 2027 – Transferentscheidung Nature Nature nach Sainte-Rose-du-Nord">
<meta name="robots" content="noindex,nofollow">
<meta name="csrf-token" content="<?= htmlspecialchars($csrf, ENT_QUOTES) ?>">
<title>Transfer 23.09.2027 · Canada 2027</title>
<link rel="stylesheet" href="styles.css?v=20260905-7">
<style>
.transfer-main { width:min(1180px,calc(100% - 32px)); margin:24px auto 100px; }
.transfer-hero { position:relative; overflow:hidden; padding:clamp(28px,5vw,56px); color:#fff; background:linear-gradient(138deg,#082f2b 0%,#0d5b4d 58%,#287b69 100%); border-radius:32px; box-shadow:var(--shadow); }
.transfer-hero::after { content:"23.09."; position:absolute; right:-8px; bottom:-35px; color:rgba(255,255,255,.05); font:800 clamp(5rem,13vw,10rem)/1 Georgia,serif; }
.transfer-hero > * { position:relative; z-index:1; }
.transfer-hero .back-link { color:rgba(255,255,255,.78); }
.transfer-hero h1 { max-width:880px; margin-top:8px; font-size:clamp(2.35rem,5vw,4.6rem); }
.transfer-hero p:last-child { max-width:820px; color:rgba(255,255,255,.8); }
.transfer-chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:20px; }
.transfer-chip { padding:7px 11px; border:1px solid rgba(255,255,255,.18); border-radius:99px; background:rgba(255,255,255,.10); font-size:.8rem; font-weight:800; }
.transfer-note { margin:18px 0; padding:14px 16px; border:1px solid #ead8a9; border-radius:16px; background:#fff7df; color:#5e4a19; }
.transfer-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; margin-top:18px; }
.transfer-card { overflow:hidden; border:1px solid var(--line); border-radius:28px; background:var(--paper); box-shadow:0 12px 42px rgba(15,42,31,.06); }
.transfer-card-head { padding:24px 24px 18px; border-bottom:1px solid var(--line); background:linear-gradient(145deg,#edf5ef,#fff); }
.transfer-card.valjalbert .transfer-card-head { background:linear-gradient(145deg,#fff4e6,#fff); }
.transfer-card h2 { font-size:clamp(2rem,3.4vw,2.8rem); }
.transfer-card-head p { margin:7px 0 0; color:var(--muted); }
.transfer-card-body { padding:22px 24px 26px; }
.route-button { display:flex; align-items:center; justify-content:center; gap:9px; width:100%; padding:14px 16px; border-radius:14px; color:#fff; background:var(--forest); font-weight:900; box-shadow:0 8px 22px rgba(12,74,64,.16); }
.route-button:hover { background:var(--pine); }
.metric-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:8px; margin:16px 0 20px; }
.metric { padding:11px; border:1px solid var(--line); border-radius:14px; background:#f8faf7; }
.metric small { display:block; color:var(--muted); font-size:.65rem; font-weight:850; letter-spacing:.06em; text-transform:uppercase; }
.metric strong { display:block; margin-top:3px; font-size:.95rem; }
.transfer-card h3 { margin:22px 0 9px; font-size:1.16rem; }
.transfer-card p { color:#40534f; }
.timeline { margin-left:8px; padding-left:18px; border-left:3px solid #c8d7cf; }
.timeline-stop { position:relative; padding:0 0 16px; }
.timeline-stop::before { content:""; position:absolute; left:-25px; top:5px; width:11px; height:11px; border:2px solid #fff; border-radius:50%; background:var(--pine); box-shadow:0 0 0 1px #a9bbb0; }
.timeline-time { color:var(--maple); font-size:.72rem; font-weight:900; }
.timeline-stop b { display:block; margin-top:2px; }
.timeline-stop p { margin:3px 0 7px; font-size:.88rem; color:var(--muted); }
.inline-links { display:flex; flex-wrap:wrap; gap:7px; }
.mini-link { display:inline-flex; align-items:center; padding:7px 9px; border:1px solid #bfcac4; border-radius:10px; background:#fff; font-size:.76rem; font-weight:800; }
.procon { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:14px; }
.procon > div { padding:13px 14px; border-radius:14px; }
.pro { background:#edf5ef; }
.con { background:#fff0eb; }
.procon strong { display:block; margin-bottom:5px; }
.procon ul { margin:0; padding-left:18px; font-size:.86rem; color:#40534f; }
.decision-section { margin-top:18px; padding:clamp(22px,4vw,38px); border:1px solid rgba(12,74,64,.09); border-radius:30px; background:rgba(255,253,248,.97); box-shadow:0 12px 42px rgba(15,42,31,.05); }
.decision-section h2 { margin-bottom:8px; }
.decision-leader { display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin:16px 0 20px; }
.score-pill { padding:9px 12px; border:1px solid var(--line); border-radius:99px; background:#f7faf7; font-size:.84rem; font-weight:850; }
.vote-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
.vote-card { padding:18px; border:1px solid var(--line); border-radius:20px; background:#fff; }
.vote-card h3 { font-size:1.25rem; }
.group-ratings { display:grid; gap:7px; margin:12px 0; }
.person-rating { display:grid; grid-template-columns:92px 1fr; gap:8px; align-items:center; font-size:.82rem; }
.person-rating b { color:var(--forest); }
.stars { display:flex; gap:2px; }
.star-button { padding:0; border:0; color:#c7cec9; background:transparent; cursor:pointer; font-size:1.55rem; line-height:1; }
.star-button.active { color:var(--gold); }
.rating-help { margin:5px 0 14px; color:var(--muted); font-size:.75rem; }
.comments-title { margin-top:18px!important; }
.comment-list { display:grid; gap:9px; margin-top:10px; }
.comment { padding:11px 12px; border:1px solid #e3e8e4; border-radius:13px; background:#fafcf9; }
.comment.reply { margin-left:24px; background:#fff; }
.comment-head { display:flex; justify-content:space-between; gap:10px; color:var(--muted); font-size:.72rem; }
.comment-head strong { color:var(--forest); }
.comment p { margin:5px 0; color:#314641; font-size:.86rem; white-space:pre-wrap; }
.comment-actions { display:flex; gap:10px; }
.comment-actions button { padding:0; border:0; background:transparent; color:var(--pine); cursor:pointer; font-size:.72rem; font-weight:800; }
.comment-form { display:grid; grid-template-columns:1fr auto; gap:7px; margin-top:10px; }
.comment-form input { min-width:0; padding:10px 11px; border:1px solid var(--line); border-radius:11px; font:inherit; }
.comment-form button { padding:10px 13px; border:0; border-radius:11px; color:#fff; background:var(--pine); font-weight:850; cursor:pointer; }
.reply-form { display:none; grid-template-columns:1fr auto; gap:6px; margin-top:8px; }
.reply-form.open { display:grid; }
.reply-form input { min-width:0; padding:8px 9px; border:1px solid var(--line); border-radius:9px; font:inherit; font-size:.82rem; }
.reply-form button { border:0; border-radius:9px; color:#fff; background:var(--forest); font-weight:800; }
.compare-table { width:100%; border-collapse:collapse; margin-top:12px; }
.compare-table th,.compare-table td { padding:11px 9px; border-bottom:1px solid #e4e9e5; text-align:left; vertical-align:top; }
.compare-table th { color:var(--muted); font-size:.75rem; }
.sources-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; margin-top:14px; }
.source-link { padding:12px 13px; border:1px solid var(--line); border-radius:13px; background:#fff; font-size:.82rem; font-weight:800; }
.status { min-height:20px; margin-top:8px; color:var(--muted); font-size:.78rem; }
@media (max-width:860px) { .transfer-grid,.vote-grid,.sources-grid { grid-template-columns:1fr; } .metric-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:560px) { .transfer-main { width:min(100% - 20px,1180px); } .transfer-card-body,.transfer-card-head { padding-left:16px; padding-right:16px; } .procon { grid-template-columns:1fr; } .person-rating { grid-template-columns:78px 1fr; } }
</style>
</head>
<body>
<header class="topbar">
  <a class="brand" href="index.php"><span class="brand-mark">🍁</span><span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span></a>
  <nav class="desktop-nav"><a href="index.php">Übersicht</a><a class="active" href="03-sainte-rose-du-nord.php">Sainte-Rose</a></nav>
  <a class="profile-chip" href="login.php?switch=1&amp;next=<?= rawurlencode($_SERVER['REQUEST_URI'] ?? '/03-transfer-23-09.php') ?>" aria-label="Profil wechseln"><i class="avatar <?= htmlspecialchars($profile['avatar'], ENT_QUOTES) ?>"></i><span><?= htmlspecialchars($profile['name']) ?></span></a>
</header>

<main class="transfer-main">
<section class="transfer-hero">
  <a class="back-link" href="03-sainte-rose-du-nord.php">← Zurück zu Sainte-Rose-du-Nord</a>
  <p class="eyebrow">Transfer · Donnerstag, 23. September 2027</p>
  <h1>Nature Nature → Exode en Nature</h1>
  <p>Der längste Transfer der Reise soll kein verlorener Fahrtag werden. Zur Entscheidung stehen ein flexibler Roadtrip mit mehreren kurzen Stopps und ein konzentrierter Besuch von Val-Jalbert.</p>
  <div class="transfer-chips"><span class="transfer-chip">4 Erwachsene</span><span class="transfer-chip">Ford Expedition</span><span class="transfer-chip">Versorgung unterwegs</span><span class="transfer-chip">Ziel: möglichst bis ca. 18 Uhr</span></div>
</section>

<div class="transfer-note"><strong>Planungsstand September 2026:</strong> Fahrzeiten, Öffnungszeiten, Preise und Check-in werden 2027 erneut geprüft. Die Google-Routen sind bewusst direkt nutzbar und enthalten die vorgesehenen Zwischenstopps.</div>

<section class="transfer-grid">
<article class="transfer-card">
  <div class="transfer-card-head"><p class="eyebrow">Variante B2 · entspannt / ausgewogen</p><h2>Der Roadtrip</h2><p>Bostonnais → Lac Saint-Jean → Blaubeer-Stopp → Einkauf → Exode</p></div>
  <div class="transfer-card-body">
    <a class="route-button" href="https://www.google.com/maps/dir/?api=1&amp;origin=46.725610%2C-72.770737&amp;destination=1516+Route+de+Tadoussac%2C+Sainte-Rose-du-Nord%2C+QC+G0V+1T0%2C+Canada&amp;travelmode=driving&amp;waypoints=Parc+des+Chutes-de-la-Petite-Rivi%C3%A8re-Bostonnais%2C+La+Tuque%2C+QC%7CBelv%C3%A9d%C3%A8re+du+Lac%2C+Chambord%2C+QC%7CLa+Maison+du+Bleuet%2C+3026+Route+169%2C+Chambord%2C+QC%7CMaxi%2C+2120+Rue+Roussel%2C+Saguenay%2C+QC" target="_blank" rel="noopener">🗺️ Google-Route B2 öffnen ↗</a>
    <div class="metric-grid">
      <div class="metric"><small>Abfahrt</small><strong>ca. 09:00</strong></div>
      <div class="metric"><small>reine Fahrt</small><strong>ca. 5½ Std.</strong></div>
      <div class="metric"><small>Ankunft</small><strong>ca. 16:45–17:15</strong></div>
      <div class="metric"><small>Flexibilität</small><strong>sehr hoch</strong></div>
    </div>
    <h3>Warum diese Variante?</h3>
    <p>Mehrere kurze, unterschiedliche Eindrücke werten die lange Route auf, ohne den Tag an eine einzige Attraktion zu binden. Bei Müdigkeit oder schlechtem Wetter kann jeder Stopp gekürzt oder ausgelassen werden.</p>
    <h3>Vorgesehener Ablauf</h3>
    <div class="timeline">
      <div class="timeline-stop"><span class="timeline-time">09:00</span><b>Nature Nature verlassen</b><p>Entspannte Abfahrt mit ausreichend Reserve.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 10:35–11:10</span><b>Parc des Chutes-de-la-Petite-Rivière-Bostonnais</b><p>Wasserfall, Beine vertreten, Toilette. Der Park ist aktuell kostenlos und bis Ende Oktober saisonal betreut.</p><div class="inline-links"><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Parc+des+Chutes-de-la-Petite-Rivi%C3%A8re-Bostonnais%2C+3703+boulevard+Ducharme%2C+La+Tuque%2C+QC" target="_blank">Google Maps ↗</a><a class="mini-link" href="https://www.ville.latuque.qc.ca/fr/loisirs-et-culture/parc-des-chutes-de-la-petite-riviere-bostonnais" target="_blank">Offizielle Seite ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 12:50–13:10</span><b>Belvédère du Lac · Chambord</b><p>Kurzer Blick über den Lac Saint-Jean; bewusst kein großer See-Umweg.</p><div class="inline-links"><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Belv%C3%A9d%C3%A8re+du+Lac%2C+Chambord%2C+QC" target="_blank">Google Maps ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 13:25–13:55</span><b>La Maison du Bleuet · Chambord</b><p>Regionale Spezialität: wilde Blaubeeren, Schokolade und die typische Tarte aux bleuets.</p><div class="inline-links"><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Maison+du+Bleuet%2C+3026+Route+169%2C+Chambord%2C+QC" target="_blank">Google Maps ↗</a><a class="mini-link" href="https://veloroutedesbleuets.com/fiches/la-maison-du-bleuet/" target="_blank">Info &amp; Produkte ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 15:15–16:00</span><b>Großeinkauf · Chicoutimi</b><p>Frühstück, Wanderproviant, Getränke und einfache Abendessen für die nächsten Tage komplett besorgen.</p><div class="inline-links"><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Maxi%2C+2120+Rue+Roussel%2C+Saguenay%2C+QC" target="_blank">Google Maps ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 16:45–17:15</span><b>Exode en Nature</b><p>Große Zeitreserve vor dem angenommenen 18-Uhr-Ziel.</p></div>
    </div>
    <div class="procon">
      <div class="pro"><strong>Dafür</strong><ul><li>sehr flexibel</li><li>geringe Zusatzkosten</li><li>Lac Saint-Jean bewusst dabei</li><li>Einkauf sicher erledigt</li></ul></div>
      <div class="con"><strong>Dagegen</strong><ul><li>kein einzelnes großes Highlight</li><li>mehrere kurze Stopps</li><li>Val-Jalbert fällt voraussichtlich aus der Reise</li></ul></div>
    </div>
  </div>
</article>

<article class="transfer-card valjalbert">
  <div class="transfer-card-head"><p class="eyebrow">Variante C · erlebnisreich</p><h2>Val-Jalbert</h2><p>Historisches Company Town + Chute Ouiatchouan → Einkauf → Exode</p></div>
  <div class="transfer-card-body">
    <a class="route-button" href="https://www.google.com/maps/dir/?api=1&amp;origin=46.725610%2C-72.770737&amp;destination=1516+Route+de+Tadoussac%2C+Sainte-Rose-du-Nord%2C+QC+G0V+1T0%2C+Canada&amp;travelmode=driving&amp;waypoints=Village+historique+de+Val-Jalbert%2C+95+Rue+Saint-Georges%2C+Chambord%2C+QC%7CMaxi%2C+2120+Rue+Roussel%2C+Saguenay%2C+QC" target="_blank" rel="noopener">🗺️ Google-Route Val-Jalbert öffnen ↗</a>
    <div class="metric-grid">
      <div class="metric"><small>Abfahrt</small><strong>ca. 08:00</strong></div>
      <div class="metric"><small>reine Fahrt</small><strong>ca. 5½ Std.</strong></div>
      <div class="metric"><small>Ankunft</small><strong>ca. 17:30–18:00</strong></div>
      <div class="metric"><small>Kosten 2026</small><strong>45,23 CAD p.P. + Steuer</strong></div>
    </div>
    <h3>Warum diese Variante?</h3>
    <p>Val-Jalbert liegt auf dieser Reise nur jetzt sinnvoll im Korridor. Das ehemalige Firmendorf wurde 1901 für die Zellstoffindustrie gegründet und 1927 verlassen; heute sind mehr als 40 historische Gebäude erhalten. Der Besuch verbindet Geschichte mit der Chute Ouiatchouan und Herbstlandschaft.</p>
    <h3>Vorgesehener Ablauf</h3>
    <div class="timeline">
      <div class="timeline-stop"><span class="timeline-time">08:00</span><b>Nature Nature verlassen</b><p>Eine Stunde früher als B2, dafür ein echtes Hauptziel.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 11:30–14:45</span><b>Village historique de Val-Jalbert</b><p>Dorf → Mühle → Wasserfall → Aussichtspunkte; Seilbahn nur sofern 2027 in Betrieb. Nicht jedes Gebäude ausreizen, sondern die Highlights priorisieren.</p><div class="inline-links"><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Village+historique+de+Val-Jalbert%2C+95+Rue+Saint-Georges%2C+Chambord%2C+QC" target="_blank">Google Maps ↗</a><a class="mini-link" href="https://valjalbert.com/" target="_blank">Offizielle Website ↗</a><a class="mini-link" href="https://valjalbert.com/horaire-et-tarifs/" target="_blank">Öffnung &amp; Preise ↗</a><a class="mini-link" href="https://www.youtube.com/watch?v=0lSqcuN1CsI" target="_blank">Video ansehen ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 16:05–16:50</span><b>Großeinkauf · Chicoutimi</b><p>Danach bleibt nur noch die letzte Etappe zur Unterkunft.</p><div class="inline-links"><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Maxi%2C+2120+Rue+Roussel%2C+Saguenay%2C+QC" target="_blank">Google Maps ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 17:30–18:00</span><b>Exode en Nature</b><p>Nach aktuellem Plan machbar; Check-in-Regel 2027 erneut bestätigen.</p></div>
    </div>
    <div class="procon">
      <div class="pro"><strong>Dafür</strong><ul><li>höchster Erlebniswert</li><li>einzige logische Gelegenheit der Reise</li><li>Geschichte + Wasserfall + Aussicht</li><li>starke Herbstkulisse</li></ul></div>
      <div class="con"><strong>Dagegen</strong><ul><li>frühere Abfahrt</li><li>deutlich höhere Kosten</li><li>weniger Zeitreserve</li><li>Besuch sollte zeitlich diszipliniert bleiben</li></ul></div>
    </div>
  </div>
</article>
</section>

<section class="decision-section">
  <p class="eyebrow">Gemeinsam entscheiden</p>
  <h2>LB · AB · MS · CS stimmen ab</h2>
  <p>Die Bewertungen und Kommentare werden wie bei den Ideen zentral auf der Website gespeichert. Jeder bewertet mit 1–5 Sternen; Antworten und das Löschen eigener Kommentare sind möglich.</p>
  <div class="decision-leader">
    <span class="score-pill">B2: <b id="avg-b2">–</b></span>
    <span class="score-pill">Val-Jalbert: <b id="avg-c">–</b></span>
    <span class="score-pill">Zwischenstand: <b id="leader">noch offen</b></span>
  </div>
  <div class="vote-grid">
    <article class="vote-card" data-variant="b2"><h3>B2 · Roadtrip</h3><div class="group-ratings" id="ratings-b2"></div><div class="rating-help">Tippe auf 1–5 Sterne, um deine Bewertung zu speichern.</div><h3 class="comments-title">Kommentare</h3><div class="comment-list" id="comments-b2"></div><form class="comment-form" data-variant="b2"><input maxlength="1000" placeholder="Kommentar schreiben …" required><button>Posten</button></form><div class="status" id="status-b2"></div></article>
    <article class="vote-card" data-variant="c"><h3>C · Val-Jalbert</h3><div class="group-ratings" id="ratings-c"></div><div class="rating-help">Tippe auf 1–5 Sterne, um deine Bewertung zu speichern.</div><h3 class="comments-title">Kommentare</h3><div class="comment-list" id="comments-c"></div><form class="comment-form" data-variant="c"><input maxlength="1000" placeholder="Kommentar schreiben …" required><button>Posten</button></form><div class="status" id="status-c"></div></article>
  </div>
</section>

<section class="decision-section">
  <p class="eyebrow">Direkter Vergleich</p>
  <h2>Was entscheidet ihr eigentlich?</h2>
  <table class="compare-table">
    <thead><tr><th>Kriterium</th><th>B2 · Roadtrip</th><th>C · Val-Jalbert</th></tr></thead>
    <tbody>
      <tr><td>Charakter</td><td>mehrere kleine, flexible Stopps</td><td>ein konzentriertes Hauptziel</td></tr>
      <tr><td>Zeitdruck</td><td>niedrig</td><td>mittel</td></tr>
      <tr><td>Kosten</td><td>hauptsächlich Verpflegung</td><td>2026: 45,23 CAD p.P. + Steuer</td></tr>
      <tr><td>Lac Saint-Jean</td><td>bewusster kurzer See-Stopp</td><td>Region wird über Val-Jalbert mitgenommen</td></tr>
      <tr><td>Bei Müdigkeit</td><td>Stopps einfach streichen</td><td>Eintritt lohnt nur bei richtigem Besuch</td></tr>
      <tr><td>Erinnerungswert</td><td>★★★★☆</td><td>★★★★★</td></tr>
    </tbody>
  </table>
</section>

<section class="decision-section">
  <p class="eyebrow">Quellen &amp; Entscheidungshilfen</p>
  <h2>Direkt weiterprüfen</h2>
  <div class="sources-grid">
    <a class="source-link" href="https://www.ville.latuque.qc.ca/fr/loisirs-et-culture/parc-des-chutes-de-la-petite-riviere-bostonnais" target="_blank">Bostonnais · offizielle Seite ↗</a>
    <a class="source-link" href="https://veloroutedesbleuets.com/fiches/la-maison-du-bleuet/" target="_blank">Maison du Bleuet · regionale Info ↗</a>
    <a class="source-link" href="https://valjalbert.com/horaire-et-tarifs/" target="_blank">Val-Jalbert · Öffnungszeiten &amp; Preise ↗</a>
    <a class="source-link" href="https://valjalbert.com/notre-histoire/" target="_blank">Val-Jalbert · Geschichte ↗</a>
    <a class="source-link" href="https://www.youtube.com/watch?v=0lSqcuN1CsI" target="_blank">Val-Jalbert · Video von Tourisme Saguenay-Lac-Saint-Jean ↗</a>
  </div>
  <div class="transfer-note" style="margin-bottom:0"><strong>2027 neu prüfen:</strong> Check-out Nature Nature, Check-in Exode, Google-Fahrzeiten, Val-Jalbert-Saison/Preis/Seilbahn, Öffnungszeiten Maison du Bleuet und Einkauf.</div>
</section>
</main>

<nav class="mobile-nav"><a href="index.php"><span>⌁</span>Reise</a><a class="active" href="03-sainte-rose-du-nord.php"><span>★</span>Sainte-Rose</a><a href="#top"><span>↑</span>Oben</a></nav>

<script>
const csrf = document.querySelector('meta[name="csrf-token"]').content;
const variants = ['b2','c'];
let state = null;

async function api(method='GET', body=null) {
  const options = { method, headers: { 'Accept':'application/json' } };
  if (body) {
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-CSRF-Token'] = csrf;
    options.body = JSON.stringify(body);
  }
  const response = await fetch('transfer-vote.php', options);
  const data = await response.json().catch(()=>({error:'Ungültige Serverantwort'}));
  if (!response.ok) throw new Error(data.error || 'Speichern fehlgeschlagen');
  return data;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

function stars(rating, ownVariant) {
  let html = '<div class="stars">';
  for (let i=1;i<=5;i++) html += `<button type="button" class="star-button ${i <= (rating||0) ? 'active' : ''}" data-rate="${i}" data-variant="${ownVariant}" aria-label="${i} Sterne">★</button>`;
  return html + '</div>';
}

function renderRatings(variant, view) {
  const host = document.getElementById('ratings-'+variant);
  host.innerHTML = Object.entries(view.profiles).map(([id,p]) => `
    <div class="person-rating"><b>${esc(p.name)}</b>${id === view.currentProfile ? stars(view.ratings[id] || 0, variant) : `<span>${'★'.repeat(view.ratings[id]||0)}${'☆'.repeat(5-(view.ratings[id]||0))}</span>`}</div>
  `).join('');
}

function dateText(iso) {
  try { return new Intl.DateTimeFormat('de-DE', {dateStyle:'short', timeStyle:'short'}).format(new Date(iso)); } catch { return ''; }
}

function renderComments(variant, view) {
  const host = document.getElementById('comments-'+variant);
  const roots = view.comments.filter(c => !c.parentId);
  if (!roots.length) { host.innerHTML = '<div class="rating-help">Noch keine Kommentare.</div>'; return; }
  host.innerHTML = roots.map(root => {
    const replies = view.comments.filter(c => c.parentId === root.id);
    return commentHtml(root, view, false) + replies.map(r => commentHtml(r, view, true)).join('');
  }).join('');
}

function commentHtml(c, view, reply) {
  const deleted = !!c.deleted;
  const name = deleted ? 'Gelöschter Kommentar' : (view.profiles[c.profile]?.name || 'Unbekannt');
  const canDelete = !deleted && c.profile === view.currentProfile;
  const replyAction = !reply && !deleted ? `<button type="button" data-reply="${esc(c.id)}">Antworten</button>` : '';
  const deleteAction = canDelete ? `<button type="button" data-delete="${esc(c.id)}">Löschen</button>` : '';
  const replyForm = !reply && !deleted ? `<form class="reply-form" data-parent="${esc(c.id)}" data-variant="${esc(view.variant)}"><input maxlength="1000" placeholder="Antwort schreiben …" required><button>Antworten</button></form>` : '';
  return `<div class="comment ${reply ? 'reply' : ''}">
    <div class="comment-head"><strong>${esc(name)}</strong><span>${esc(dateText(c.createdAt))}</span></div>
    <p>${deleted ? 'Kommentar wurde gelöscht.' : esc(c.text)}</p>
    <div class="comment-actions">${replyAction}${deleteAction}</div>${replyForm}
  </div>`;
}

function render() {
  variants.forEach(v => {
    const view = state.variants[v];
    view.variant = v;
    renderRatings(v, view);
    renderComments(v, view);
    document.getElementById('avg-'+v).textContent = view.average === null ? '–' : `${view.average.toFixed(1)} / 5 (${view.ratingCount})`;
  });
  const a = state.variants.b2.average, c = state.variants.c.average;
  document.getElementById('leader').textContent = a === null || c === null ? 'noch offen' : a > c ? 'B2 · Roadtrip' : c > a ? 'C · Val-Jalbert' : 'Gleichstand';
}

async function refresh() {
  state = await api();
  render();
}

document.addEventListener('click', async e => {
  const rate = e.target.closest('[data-rate]');
  if (rate) {
    const v = rate.dataset.variant;
    const status = document.getElementById('status-'+v);
    try { status.textContent='Speichere …'; state = await api('POST', {action:'rating',variant:v,rating:Number(rate.dataset.rate)}); render(); status.textContent='Bewertung gespeichert.'; }
    catch(err) { status.textContent=err.message; }
    return;
  }
  const reply = e.target.closest('[data-reply]');
  if (reply) {
    const form = document.querySelector(`.reply-form[data-parent="${CSS.escape(reply.dataset.reply)}"]`);
    if (form) { form.classList.toggle('open'); if (form.classList.contains('open')) form.querySelector('input').focus(); }
    return;
  }
  const del = e.target.closest('[data-delete]');
  if (del) {
    if (!confirm('Eigenen Kommentar wirklich löschen?')) return;
    const v = del.closest('.vote-card').dataset.variant;
    const status = document.getElementById('status-'+v);
    try { state = await api('POST', {action:'delete-comment',variant:v,commentId:del.dataset.delete}); render(); status.textContent='Kommentar gelöscht.'; }
    catch(err) { status.textContent=err.message; }
  }
});

document.addEventListener('submit', async e => {
  if (e.target.matches('.comment-form')) {
    e.preventDefault();
    const v=e.target.dataset.variant, input=e.target.querySelector('input'), status=document.getElementById('status-'+v);
    try { status.textContent='Speichere …'; state=await api('POST',{action:'comment',variant:v,text:input.value}); input.value=''; render(); status.textContent='Kommentar gespeichert.'; }
    catch(err) { status.textContent=err.message; }
  }
  if (e.target.matches('.reply-form')) {
    e.preventDefault();
    const v=e.target.dataset.variant, input=e.target.querySelector('input'), status=document.getElementById('status-'+v);
    try { state=await api('POST',{action:'comment',variant:v,text:input.value,parentId:e.target.dataset.parent}); render(); status.textContent='Antwort gespeichert.'; }
    catch(err) { status.textContent=err.message; }
  }
});

refresh().catch(err => {
  variants.forEach(v => document.getElementById('status-'+v).textContent = 'Abstimmung konnte nicht geladen werden: '+err.message);
});
</script>
</body></html>
