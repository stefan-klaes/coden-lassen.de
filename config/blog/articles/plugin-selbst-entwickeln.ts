export const ARTICLE = `
# WordPress Plugin selbst entwickeln: Schritt für Schritt

Mit eigenen WordPress Plugins kannst du die Funktionalität deiner Website gezielt erweitern. In dieser Anleitung zeige ich dir, wie du ein einfaches Plugin von Grund auf selbst entwickelst.

---

## Schritt 1: Plugin Name wählen

Ein WordPress Plugin besteht mindestens aus einem Ordner und einer Datei. Beide sollten gleich benannt sein (Plugin-Slug, z.B. \`mein-plugin\`). Der Name sollte aussagekräftig, kurz und ohne Sonderzeichen oder Zahlen sein.

**Beispiel:**
- Plugin Name: \`simplest-analytics\`

---

## Schritt 2: Ordner und Dateien anlegen

Lege im Verzeichnis \`wp-content/plugins\` einen neuen Ordner für dein Plugin an:

> simplest-analytics

Erstelle darin zwei Dateien:
- \`simplest-analytics.php\` (Hauptdatei)
- \`index.php\` (Schutz vor direktem Zugriff)

---

## Schritt 3: Inhalt der index.php

Die \`index.php\` schützt dein Plugin vor direkten Aufrufen:

\`\`\`php
<?php // Silence is golden
\`\`\`

---

## Schritt 4: Inhalt der Plugin-Hauptdatei

Die Hauptdatei enthält die Plugin-Metadaten und den eigentlichen Code. So sieht der Kopfbereich aus:

\`\`\`php
<?php
/**
 * Welcome to Simplest Analytics
 *
 * @link              https://www.coden-lassen.de
 * @since             1.0.0
 * @package           Simplest_Analytics
 *
 * @wordpress-plugin
 * Plugin Name:       Simplest Analytics
 * Plugin URI:        https://www.coden-lassen.de
 * Description:       Serverside and cookieless webanalytics.
 * Version:           1.0.0
 * Author:            Stefan Klaes
 * Author URI:        https://www.coden-lassen.de/wordpress-freelancer
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       simplest-anlytics
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( "WPINC" ) ) {
    die;
}

// Ab hier beginnt dein eigentlicher Plugin-Code
\`\`\`

---

## Schritt 5: Plugin aktivieren

Gehe im WordPress Backend zu **Plugins** und aktiviere dein neues Plugin. Es erscheint mit Namen, Beschreibung und Autor.

---

## Fazit

Mit diesen Schritten hast du ein eigenes WordPress Plugin erstellt. Von hier aus kannst du beliebige Funktionen ergänzen und dein Plugin weiterentwickeln!
`;
