<?php
declare(strict_types=1);
$destination = 'orford';
ob_start();
require __DIR__ . '/destination-template.php';
$html = (string) ob_get_clean();

$transferSection = <<<'HTML'
<section class="section" aria-labelledby="orford-transfer-title">
  <div class="section-head">
    <div><p class="eyebrow">Transfer · Mittwoch, 29. September</p><h2 id="orford-transfer-title">Direkt, Genussstopp oder Garten?</h2></div>
    <span class="local-note">Gemeinsame Entscheidung</span>
  </div>
  <p style="max-width:800px;color:var(--muted);margin:-8px 0 20px">Der Wechsel von Québec City nach Orford bekommt drei realistische Varianten: A als entspannte Fahrt mit Poutine-Pause, B mit der Fromagerie du Presbytère als unsere Empfehlung und C mit dem Parc Marie-Victorin als bewusst erlebnisreiche Option. Alle drei enthalten Route, Zeiten, Aufwand, Quellen sowie gemeinsame Sterne- und Kommentar-Abstimmung.</p>
  <a class="new-idea-button" href="05-transfer-29-09.php" style="display:inline-flex"><span>↗</span> Transfervarianten vergleichen &amp; abstimmen</a>
</section>
HTML;

$orientationSection = <<<'HTML'
<section class="section orford-orientation" aria-labelledby="orford-orientation-title">
  <div class="section-head">
    <div><p class="eyebrow">Orford kurz erklärt</p><h2 id="orford-orientation-title">Berg, See und kleine Orte liegen nah beieinander</h2></div>
    <span class="local-note">Basis: Espace 4 Saisons</span>
  </div>
  <p class="orford-lead">Orford ist unser ruhiger Abschluss nach der Rundreise. Direkt am Hotel beginnen Berg- und Parkerlebnisse; Magog mit Seeufer und Marais liegt südlich, die Abbaye Saint-Benoît-du-Lac westlich am Lac Memphrémagog. So können wir einen ganzen Wandertag mit einem leichteren Natur-, Kultur- oder Wellnesstag verbinden.</p>
  <div class="orford-orientation-grid">
    <article><span>⛰️</span><h3>Mont-Orford</h3><p>Drei passende Wanderstufen: leicht, mittel und anspruchsvoll. Die Gondel bleibt eine Zusatzchance, weil der Fahrplan 2027 noch offen ist.</p></article>
    <article><span>🌾</span><h3>Magog &amp; Marais</h3><p>Stege, Beobachtungsturm, Seeufer und Cafés ergeben einen flexiblen halben oder ganzen Tag ohne große Höhenmeter.</p></article>
    <article><span>⛪</span><h3>Westufer</h3><p>Die Abtei verbindet Architektur, stille Wege und Klosterprodukte. Ende September planen wir den eigenständigen Besuch, nicht fest mit Führung.</p></article>
    <article><span>♨️</span><h3>Wetterreserve</h3><p>Das Spa ist ein vollwertiger Erholungstag. Schiff und Gondel nehmen wir nur dazu, wenn der 2027-Fahrplan zu unseren beiden Wochentagen passt.</p></article>
  </div>
  <div class="orford-video-grid" aria-label="Videoeindrücke">
    <a href="https://www.youtube.com/watch?v=WY5HKZ1riLI" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/WY5HKZ1riLI/hqdefault.jpg" alt="Vorschaubild: Herbst am Mont-Orford" loading="lazy"><span class="play-mark">▶</span><strong>Herbstfarben am Mont-Orford</strong><small>Regionseindruck · YouTube ↗</small></a>
    <a href="https://www.youtube.com/watch?v=1AT_aBIHizk" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/1AT_aBIHizk/hqdefault.jpg" alt="Vorschaubild: Mont-Orford und Umgebung" loading="lazy"><span class="play-mark">▶</span><strong>Mont-Orford von oben</strong><small>Gondel nur nach 2027-Check · YouTube ↗</small></a>
  </div>
</section>
HTML;

$dayPlansSection = <<<'HTML'
<section class="section" aria-labelledby="orford-dayplans-title">
  <div class="section-head">
    <div><p class="eyebrow">Noch keine Festlegung</p><h2 id="orford-dayplans-title">Drei Beispiele für unsere zwei vollen Tage</h2></div>
    <span class="local-note">Vorschläge zur Orientierung</span>
  </div>
  <p class="orford-lead">Diese Varianten sind bewusst <strong>keine Entscheidung</strong>. Sie zeigen nur, wie sich die Bausteine am 30. September und 1. Oktober sinnvoll kombinieren lassen. Welche Aktivitäten tatsächlich gewinnen, entscheidet eure Abstimmung.</p>
  <div class="orford-dayplans">
    <article><p class="eyebrow">Beispiel 1 · entspannt</p><h3>Natur, See und Erholung</h3><ol><li><b>Donnerstag:</b> Marais, Magog und Seeufer; optional Schiff, falls 2027 angeboten.</li><li><b>Freitag:</b> Abbaye Saint-Benoît-du-Lac und anschließend Spa.</li></ol></article>
    <article class="recommended"><span class="plan-badge">Guter Mittelweg</span><p class="eyebrow">Beispiel 2 · ausgewogen</p><h3>Eine Wanderung, ein Regionaltag</h3><ol><li><b>Donnerstag:</b> Mont-Chauve als mittlere Rundtour, danach ruhiger Abend.</li><li><b>Freitag:</b> Marais und Magog; je nach Lust Abtei oder Spa.</li></ol></article>
    <article><p class="eyebrow">Beispiel 3 · erlebnisreich</p><h3>Großer Bergtag, leichter Abschluss</h3><ol><li><b>Donnerstag:</b> Escalier-du-Nord / Pic de l’Ours als voller Wandertag.</li><li><b>Freitag:</b> Trois-Étangs plus Magog oder Abtei.</li></ol></article>
  </div>
</section>
HTML;

$diningSection = <<<'HTML'
<section class="section orford-dining" aria-labelledby="orford-dining-title">
  <div class="section-head"><div><p class="eyebrow">Abende ohne Fahrstress</p><h2 id="orford-dining-title">Drei passende Dinner-Momente</h2></div><span class="local-note">Stand September 2026</span></div>
  <div class="orford-dining-grid">
    <article><b>29. September · Ankunft</b><h3>Burger Pub im Hotel</h3><p>Unkompliziert nach dem Transfer, aktuell täglich geöffnet.</p><a href="https://burger-pub.com/en/" target="_blank" rel="noopener">Restaurant ansehen ↗</a></article>
    <article><b>Ein besonderer Abend</b><h3>Bistro 4 Saisons</h3><p>Das ruhigere Hotelrestaurant für einen bewusst schönen Abschlussabend.</p><a href="https://bistro4saisons.com/en/" target="_blank" rel="noopener">Restaurant ansehen ↗</a></article>
    <article><b>Ein Abend in Magog</b><h3>Seeufer oder Dinner Cruise</h3><p>Nur wenn es zum gewählten Tagesplan und zum Fahrplan 2027 passt.</p><a href="https://escapadesmemphremagog.com/en/cruises/" target="_blank" rel="noopener">Schiffsangebote ansehen ↗</a></article>
  </div>
  <p class="orford-fineprint">Öffnungstage und Reservierungen prüfen wir kurz vor der Buchung erneut. Das Bistro ist nach heutigem Stand dienstags bis samstags abends geöffnet; der Burger Pub täglich.</p>
</section>
HTML;

$activitiesSection = <<<'HTML'
<section class="section" aria-labelledby="orford-activities-title">
  <div class="section-head">
    <div><p class="eyebrow">30. September &amp; 1. Oktober</p><h2 id="orford-activities-title">Zwei Tage – zuerst die Bausteine wählen</h2></div>
    <span class="local-note">Gemeinsame Auswahl</span>
  </div>
  <p style="max-width:820px;color:var(--muted);margin:-8px 0 20px">Vergleicht sieben Ideen: drei Wanderstufen, Magog &amp; Marais, Saint-Benoît-du-Lac, Lac-Kreuzfahrt und Spa. Jede Person kann jeden Baustein mit Sternen bewerten und kommentieren; vorhandene Stimmen bleiben erhalten.</p>
  <a class="new-idea-button" href="05-aktivitaeten.php" style="display:inline-flex"><span>↗</span> Sieben Aktivitäten vergleichen &amp; abstimmen</a>
</section>
HTML;

$needle = '<section class="section ideas" id="ideas">';
if (str_contains($html, $needle)) {
    $html = str_replace($needle, $transferSection . "\n" . $orientationSection . "\n" . $dayPlansSection . "\n" . $diningSection . "\n" . $activitiesSection . "\n" . $needle, $html);
}
echo $html;
