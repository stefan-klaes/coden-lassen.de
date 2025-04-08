import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `**Individuelles WooCommerce-Plugin für die Manufaktur**

Ziel war die Entwicklung eines robusten Tools zur Verwaltung und Abwicklung komplexer Produktions- und Versandprozesse, inklusive Spezialdokumenten und individueller Produktlogik.

**Umsetzungsschwerpunkte:**
- Werkstattauftragserstellung direkt im WooCommerce-Backend
- Etikettendruck nach Artikelnummer (z. B. für Gürtellängen)
- Dokumentenmanagement (Lieferschein, Auftragsbestätigung, Etiketten)
- Produktkonfiguration im Backend mit Feldauswahl und Aufschlagsberechnung
- Tab "Extra PDF" im Produktbearbeitungsbereich`,

  solution: `**Modulares Plugin mit Versionierung und DOMPDF-Integration**

Für die Manufaktur entstand ein maßgeschneidertes Plugin mit folgenden Funktionen:

- **PDF-Generierung on-the-fly** (Werkstattauftrag, Lieferschein, Auftragsbestätigung, Etiketten) via DOMPDF – ohne Dateispeicherung
- **Versandlogik & Trigger im WooCommerce Backend**, inkl. Logging in Order Notes
- **Etikettendruck pro Artikelnummer** für produktspezifische Anforderungen
- **Produkt-Tabs im Adminbereich** wie „Konfigurator“ und „Extra PDF“ zur individuellen Steuerung
- **Feldbasierte Preisaufschläge** abhängig von Kundenauswahl (z. B. Bundweite)
- **Rechnungserweiterungen und Split Order Kompatibilität**
- **Versioniertes Plugin mit detailliertem Changelog und Maintenance-Prozess**

Das Plugin ist stabil, wartbar und wird kontinuierlich ausgebaut – mit Fokus auf die realen Abläufe in Produktion und Versand.`,
  screenshots: [
    {
      src: "/woocommerce-custom-order-actions.png",
      url: "Bestellung > Bearbeiten",
      alt: "Werkstattauftrag Screenshot",
      description:
        "Zusätzliche Bestellaktion im WooCommerce-Backend zur manuellen Ausführung des Werkstattauftrags.",
    },
    {
      src: "/woocommerce-neue-email.png",
      url: "Woocmmerce > Einstellungen",
      alt: "Woocommerce Email Screenshot",
      description: "Zusätzliche Woocommerce E-Mail für Werkstattaufträge",
    },
  ],
  code: [
    {
      filename: "code-ausschnitt.php",
      language: "php",
      description: "Minimaler Code-Ausschnitt für Actions und Filter",
      code: `class LmfktCustomProduct
{

    public function __construct() {

        add_filter('wcff_fields_for_product', array($this, 'hide_field_factory_fields_filter'), 10, 5);
        add_filter('woocommerce_product_data_tabs', array($this, 'custom_product_tab'), 10, 1);
        add_action('woocommerce_product_data_panels', array($this, 'custom_product_data'));
        add_action('woocommerce_process_product_meta', array($this, 'product_custom_fields_save'));
        add_action('wp_ajax_lmfkt_load_fieldsfactory_fields', array($this, 'load_fieldsfactory_fields'));
        add_filter('woocommerce_add_cart_item_data', array($this, 'add_custom_meta_to_cart_item'), 10, 2);
        add_action('woocommerce_checkout_create_order_line_item', array($this, 'add_custom_order_item_meta'), 10, 4);
        add_action('woocommerce_before_add_to_cart_button', array($this, 'add_custom_attribute_select_field'));
        add_filter('woocommerce_add_cart_item_data', array($this, 'save_custom_attribute_option_to_cart_item'), 10, 2);
        add_action('woocommerce_add_order_item_meta', array($this, 'save_custom_attribute_option_order_item'), 10, 3);
        add_filter('woocommerce_get_item_data', array($this, 'display_custom_attribute_option_cart'), 10, 2);
        add_action('woocommerce_before_calculate_totals', array($this, 'adjust_cart_item_price_based_on_selection'), 99, 1);

    }

    // ...

}`,
    },
  ],
};

export default CONFIG;
