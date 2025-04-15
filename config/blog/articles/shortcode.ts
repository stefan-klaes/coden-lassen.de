export const ARTICLE = `
# WordPress Shortcodes: Dynamische Inhalte einfach einbinden

WordPress Shortcodes bieten eine einfache Möglichkeit, dynamische Inhalte in deine Website einzubauen. Mit wenigen Zeilen Code kannst du eigene Shortcodes erstellen und so beispielsweise das aktuelle Alter anzeigen lassen – und das ganz ohne manuelle Anpassungen.

## Was ist ein WordPress Shortcode?

Ein Shortcode ist ein Platzhalter, den du direkt im WordPress Editor verwenden kannst, zum Beispiel so: \`[mein_shortcode]\`. WordPress ersetzt diesen Platzhalter beim Anzeigen der Seite durch den von dir definierten Inhalt oder Funktion.

## Beispiel 1: Einfaches Alter anzeigen

Du möchtest dein aktuelles Alter auf deiner Website anzeigen? Mit einem eigenen Shortcode ist das ganz einfach und bleibt immer aktuell.

**Code für die \`functions.php\` deines Child Themes:**

\`\`\`php
/*
 * Shortcode, der das Alter anzeigt
 * Nutze den Shortcode wie folgt: [mein_alter]
 */
add_shortcode('mein_alter', 'mein_alter_function');
function mein_alter_function(){
    $birthDate = "13/01/1993";
    $birthDate = explode("/", $birthDate);
    $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[1], $birthDate[0], $birthDate[2]))) > date("md")
        ? ((date("Y") - $birthDate[2]) - 1)
        : (date("Y") - $birthDate[2]));
    return esc_html($age);
}
\`\`\`

**Verwendung im Editor:**
\`\`\`
[mein_alter]
\`\`\`

Die Funktion \`esc_html()\` sorgt dafür, dass die Ausgabe sicher ist.

---

## Beispiel 2: Alter mit variablem Geburtsdatum

Wenn du das Alter für verschiedene Personen anzeigen möchtest, kannst du das Geburtsdatum als Attribut übergeben:

**Code für die \`functions.php\`:**

\`\`\`php
/*
 * Shortcode, der das Alter anhand eines Geburtsdatums anzeigt
 * Nutze den Shortcode wie folgt: [mein_alter bday="13/01/1993"]
 */
add_shortcode('mein_alter', 'mein_alter_function');
function mein_alter_function($atts){
    $attribute = shortcode_atts( array(
        'bday' => '',
    ), $atts );

    $age = "";
    $bday = isset($attribute["bday"]) ? sanitize_text_field($attribute["bday"]) : "";
    if ( $bday !== "" ) {
        $birthDate = explode("/", $bday);
        $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[1], $birthDate[0], $birthDate[2]))) > date("md")
            ? ((date("Y") - $birthDate[2]) - 1)
            : (date("Y") - $birthDate[2]));
    }
    return esc_html($age);
}
\`\`\`

**Verwendung:**
\`\`\`
[mein_alter bday="13/01/1993"]
\`\`\`

Die Funktion \`sanitize_text_field()\` stellt sicher, dass Benutzereingaben sicher verarbeitet werden.

---

## Beispiel 3: Alter in einem Text verwenden

Du möchtest das Alter in einem Satz anzeigen? Erstelle einen umschließenden Shortcode mit Platzhalter:

**Code für die \`functions.php\`:**

\`\`\`php
/*
 * Shortcode, der das Alter in einem Text anzeigt
 * Nutze den Shortcode wie folgt: [mein_alter bday="13/01/1993"]Ich bin {alter} Jahre alt.[/mein_alter]
 */
add_shortcode('mein_alter', 'mein_alter_function');
function mein_alter_function($atts, $content = null){
    $attribute = shortcode_atts( array(
        'bday' => '',
    ), $atts );

    $age = "";
    $bday = isset($attribute["bday"]) ? sanitize_text_field($attribute["bday"]) : "";
    $content = isset($content) ? sanitize_text_field($content) : "";
    if ( $bday !== "" && $content !== "" ) {
        $birthDate = explode("/", $bday);
        $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[1], $birthDate[0], $birthDate[2]))) > date("md")
            ? ((date("Y") - $birthDate[2]) - 1)
            : (date("Y") - $birthDate[2]));
        // Ersetze {alter} durch das berechnete Alter
        $content = str_replace("{alter}", $age, $content);
        return esc_html($content);
    } else {
        return "";
    }
}
\`\`\`

**Verwendung:**
\`\`\`
[mein_alter bday="13/01/1993"]Ich bin {alter} Jahre alt.[/mein_alter]
\`\`\`

---

## Fazit

Mit eigenen WordPress Shortcodes kannst du dynamische Inhalte flexibel und sicher einbinden. Das gezeigte Beispiel mit dem Alter ist nur eine von vielen Möglichkeiten – deiner Kreativität sind keine Grenzen gesetzt!
`;
