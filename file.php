<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$allowed = ['00_Vergleich_Aktivitaeten_Mauricie.pdf','01_Lac-Solitaire.pdf','02_Ruisseau-Bouchard.pdf','03_Cascades-und-Falaises.pdf','04_Kanu-Einfuehrung.pdf','05_Chutes-Waber.pdf','06_Shawinigan-und-Cite-de-lEnergie.pdf'];
$name = basename((string) ($_GET['name'] ?? ''));
if (!in_array($name, $allowed, true)) { http_response_code(404); exit('Datei nicht gefunden'); }
$file = __DIR__ . '/pdfs/' . $name;
if (!is_file($file)) { http_response_code(404); exit('Datei nicht gefunden'); }
header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="' . $name . '"');
header('Content-Length: ' . filesize($file));
header('Cache-Control: private, max-age=3600');
readfile($file);
