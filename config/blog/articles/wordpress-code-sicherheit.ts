export const ARTICLE = `
## WordPress Code Sicherheit: Best Practices für sichere Plugins & Themes

Sicherer Code ist ein zentraler Bestandteil jeder Website, insbesondere von WordPress-Websites. Der WordPress Code Standard legt den Rahmen für die Implementierung von sicherem Code fest und schützt Websites vor potenziellen Sicherheitslücken und Datenverlust. Dazu gehören Best Practices für das Einbinden von externen Bibliotheken und Plugins, das Überprüfen von Datenbankabfragen, das Sanieren von HTML-Tags und viele weitere Maßnahmen. Entwickler sollten die WordPress-Richtlinien einhalten, um ihre Websites sicher und schützenswert zu machen.

Man sollte nicht unterschätzen, wie schnell man selbst eine Sicherheitslücke erschaffen kann. Im Folgenden zeige ich typische Beispiele für Sicherheitslücken und wie man sie nach WordPress-Standard verhindert. Wer wie ich schon einmal ein Plugin für das offizielle WordPress-Verzeichnis programmiert hat, weiß, wie hoch die Anforderungen sind.

---

### Beispiel 1/5: Eingaben prüfen & PHP-Fehler vermeiden

**Gefahr:**
- Fehler im Frontend
- Nicht-Erreichbarkeit der Seite

**Nicht empfohlener Code:**
\`\`\`php
add_action( 'wp_loaded', 'negativbeispiel_gutschein_aus_url' );
function negativbeispiel_gutschein_aus_url() {
    $gutschein = $_GET["gutschein"];
    WC()->cart->apply_coupon( $gutschein );
}
\`\`\`

**Empfohlener Code nach WordPress-Standard:**
\`\`\`php
add_action( 'wp_loaded', 'codenlassen_gutschein_aus_url' );
function codenlassen_gutschein_aus_url() {
    $gutschein = isset( $_GET["gutschein"] ) ? sanitize_text_field( $_GET["gutschein"] ) : "";
    if ( $gutschein !== "" ) {
        if( wc_get_coupon_id_by_code( $gutschein ) ) {
            if ( !WC()->cart->has_discount( $gutschein ) ) {
                WC()->cart->apply_coupon( $gutschein );
            }
        }
    }
}
\`\`\`

**Fazit:**  
Code sollte nur ausgeführt werden, wenn alle Bedingungen erfüllt sind. Gehe immer davon aus, dass falsche Eingaben vorkommen können.

---

### Beispiel 2/5: Eingaben vor Schadcode sichern

**Gefahr:**
- Website kann gehackt werden
- Fehler im Frontend

**Nicht empfohlener Code:**
\`\`\`php
$feedback = $_POST['feedback'];
$email = $_POST['email'];
$option = $_POST['option'];
update_option( 'meine_option', $option );
\`\`\`

**Empfohlener Code:**
\`\`\`php
$feedback = isset( $_POST['feedback'] ) ? sanitize_text_field( $_POST['feedback'] ) : "";
$email = isset( $_POST['email'] ) ? sanitize_email( $_POST['email'] ) : "";
$option = isset( $_POST['option'] ) ? sanitize_option( $_POST['option'] ) : "";
if ( $option !== "" ) {
    update_option( 'meine_option', $option );
}
\`\`\`

**Fazit:**  
WordPress bietet viele Funktionen zum Absichern von Eingaben. Nutze immer passende Sanitize-Funktionen.

---

### Beispiel 3/5: Codeausgabe absichern

**Gefahr:**
- Website kann gehackt werden
- Fehler im Frontend

**Nicht empfohlener Code:**
\`\`\`php
add_action( 'woocommerce_before_cart_table', 'negativbeispiel_rabatt_einblenden' );
function negativbeispiel_rabatt_einblenden() {
    $free_shipping_ab = 50;
    $gutschein_code = "versand-for-free";
    $cart_total = WC()->cart->total;
    $fehlt_bis_versandkostenfrei = $free_shipping_ab - $cart_total;
    if ( $cart_total < $free_shipping_ab ) {
        echo '<p>Nur noch ' . $fehlt_bis_versandkostenfrei . ' Euro bis zum kostenfreien Versand</p>';
        echo '<p>Nutze den Gutschein Code: ' . $gutschein_code . '</p>';
        echo '<a href="/shop">zum Shop</a>';
    }
}
\`\`\`

**Empfohlener Code:**
\`\`\`php
add_action( 'woocommerce_before_cart_table', 'codenlassen_rabatt_einblenden' );
function codenlassen_rabatt_einblenden() {
    $free_shipping_ab = 50;
    $cart_total = WC()->cart->total;
    if ( isset( $cart_total ) && $cart_total < $free_shipping_ab ) {
        $gutschein_code = "versand-for-free";
        $fehlt_bis_versandkostenfrei = $free_shipping_ab - $cart_total;
        $shop_page_url = wc_get_page_permalink( 'shop' );
        ?>
        <p>Nur noch <?php echo wc_price($fehlt_bis_versandkostenfrei) ?> Euro bis zum kostenfreien Versand</p>
        <p>Nutze den Gutschein Code: <?php echo esc_html( $gutschein_code ) ?></p>
        <?php
        if ( isset( $shop_page_url ) ) {
            ?><a href="<?php echo esc_url( $shop_page_url ) ?>">zum Shop</a><?php
        }
    }
}
\`\`\`

**Fazit:**  
Escape-Funktionen erhöhen die Sicherheit der Ausgabe und sollten immer genutzt werden.

---

### Beispiel 4/5: JavaScript sicher einbinden

**Gefahr:**  
Unsicheres Einbinden von JavaScript ist meist wenig riskant, aber du profitierst nicht vom Schutz der WordPress-Funktionen.

**Nicht empfohlener Code:**
\`\`\`php
add_action( 'admin_menu', 'negativbeispiel_add_admin_menu' );
function negativbeispiel_add_admin_menu() {
    add_menu_page(
        'Mein Plugin',
        'Mein Plugin',
        'manage_options',
        'mein-plugin',
        'meinplugin_admin_start_page',
        'dashicons-chart-bar' );
    function meinplugin_admin_start_page(){
        echo '<h2>Mein Plugin</h2>';
        echo '<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>';                
    }
}
\`\`\`

**Empfohlener Code:**
\`\`\`php
add_action( 'admin_menu', 'codenlassen_add_admin_menu' );
function codenlassen_add_admin_menu() {
    add_menu_page(
        'Mein Plugin',
        'Mein Plugin',
        'manage_options',
        'mein-plugin',
        'meinplugin_admin_start_page',
        'dashicons-chart-bar' );
    function meinplugin_admin_start_page(){
        ?><h2>Mein Plugin</h2><?php
    }
}
add_action( 'admin_enqueue_scripts', 'codenlassen_google_charts_enqueue_scripts' );
function codenlassen_google_charts_enqueue_scripts() {
    wp_enqueue_script( 'google-charts', 'https://www.gstatic.com/charts/loader.js' );        
}
\`\`\`

**Fazit:**  
Nutze immer die WordPress-Funktionen zum Einbinden von Skripten.

---

### Beispiel 5/5: Sichere Datenbankabfragen

**Gefahr:**  
Nicht validierte Datenbankabfragen können zu Datenverlust oder Datenklau führen.

**Nicht empfohlener Code:**
\`\`\`php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$table_name = 'deine_tabelle';
$sql = "SELECT * FROM $table_name";
$rows = $conn->query($sql);
if ($rows->num_rows > 0) {
    // code mit den daten
}
\`\`\`

**Empfohlener Code:**
\`\`\`php
global $wpdb;
$table_name = $wpdb->prefix . 'deine_tabelle';
$sql = $wpdb->prepare("SELECT * FROM $table_name");
$rows = $wpdb->get_results( $sql );
if ( sizeof($rows) > 0 ) {
    // code mit den daten
}
\`\`\`

**Fazit:**  
Nutze immer \`$wpdb\` und die \`prepare\`-Funktion für sichere Datenbankabfragen.

---

## Zusammenfassung

WordPress bietet viele Funktionen, die die Sicherheit erhöhen. Prüfe alle Daten, halte dich an den WordPress Code Standard und nutze die bereitgestellten Funktionen. Nicht jede Abweichung führt sofort zu einer Sicherheitslücke, aber wer es kann, sollte den Standard einhalten und so die Sicherheit erhöhen.
`;
