import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Individuelles WooCommerce-Plugin für die Manufaktur. Ziel war die Entwicklung eines robusten Tools zur Verwaltung und Abwicklung komplexer Produktions- und Versandprozesse, inklusive Spezialdokumenten und individueller Produktlogik. Zu den Umsetzungsschwerpunkten gehörten die Werkstattauftragserstellung direkt im WooCommerce-Backend, Etikettendruck nach Artikelnummer (z. B. für Gürtellängen), Dokumentenmanagement (Lieferschein, Auftragsbestätigung, Etiketten), Produktkonfiguration im Backend mit Feldauswahl und Aufschlagsberechnung sowie ein Tab "Extra PDF" im Produktbearbeitungsbereich.`,

  challenges: [
    "Integration in bestehende WooCommerce-Strukturen",
    "Komplexe PDF-Generierung mit dynamischen Inhalten",
    "Produktspezifische Preislogik und Aufschlagsberechnung",
    "Nahtlose Verbindung von Bestell- und Produktionsprozessen",
  ],

  outcomes: [
    "Optimierter Werkstattprozess mit automatisierter Dokumenterstellung",
    "Reduzierte Fehlerquote durch systemgesteuerte Abläufe",
    "Zeitersparnis bei der Bearbeitung von Spezialbestellungen",
    "Höhere Kundenzufriedenheit durch präzise Fertigungsunterlagen",
  ],

  solution: `Für die Manufaktur wurde ein modulares Plugin mit Versionierung und DOMPDF-Integration entwickelt. Die Lösung ermöglicht PDF-Generierung on-the-fly ohne Dateispeicherung für verschiedene Dokumente, implementiert intelligente Versandlogik mit Trigger-Funktionen und bietet einen spezialisierten Etikettendruck. Durch erweiterte Backend-Funktionalitäten wie individuelle Produkt-Tabs und kundenspezifische Preisberechnungen wird der gesamte Produktionsprozess digital abgebildet. Das stabile und wartbare Plugin wird kontinuierlich weiterentwickelt und optimiert die realen Abläufe in Produktion und Versand.`,

  technologies: [
    "PHP",
    "WordPress",
    "WooCommerce",
    "DOMPDF",
    "JavaScript",
    "CSS",
    "MySQL",
  ],

  client: "Manufaktur für handgefertigte Produkte",

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
