import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer WooCommerce-Erweiterung zur automatisierten Generierung und Versendung von spezialisierten E-Mails an Lieferanten bei Bestelleingang. Das System sollte den manuellen Prozess der Lieferantenbenachrichtigung automatisieren und gleichzeitig hochgradig anpassbare E-Mail-Templates bereitstellen.`,

  challenges: [
    "Integration in den WooCommerce-Bestellprozess",
    "Erstellung dynamischer, produktspezifischer E-Mail-Templates",
    "Zuverlässiges Routing an verschiedene Lieferanten basierend auf Produktkategorien",
    "Fehlerbehandlung und Nachverfolgung des E-Mail-Versands",
  ],

  outcomes: [
    "Signifikante Zeitersparnis durch Automatisierung der Lieferantenkommunikation",
    "Reduzierte Fehlerquote durch standardisierte E-Mail-Templates",
    "Verbesserte Lieferantenbeziehungen durch sofortige Benachrichtigung",
    "Erhöhte Transparenz durch Protokollierung aller gesendeten Nachrichten",
  ],

  solution: `Die implementierte WooCommerce-Erweiterung fügt sich nahtlos in den Bestellworkflow ein und erkennt automatisch lieferantenspezifische Produkte. Mit dynamischen Templating-Funktionen werden personalisierte HTML-E-Mails mit Bestelldetails, Produktspezifikationen und Lieferanweisungen erstellt. Ein intelligentes Routing-System ordnet Produkte dem richtigen Lieferanten zu und optimiert Bestellungen für mehrere Lieferanten. Die umfangreiche Admin-Oberfläche ermöglicht die einfache Konfiguration von Lieferanten, Templates und individuellen Regeln, während ein Protokollierungssystem den Versandstatus überwacht und bei Problemen Benachrichtigungen sendet.`,

  technologies: [
    "PHP",
    "WordPress",
    "WooCommerce",
    "HTML",
    "CSS",
    "JavaScript",
    "SMTP",
  ],

  client: "Händler mit umfangreichem Lieferantennetzwerk",

  screenshots: [
    {
      src: "/referenzen/woocommerce-email-templates.png",
      url: "WooCommerce-Einstellungen",
      alt: "Email Template Konfiguration",
      description: "Konfigurationsseite für Lieferanten-E-Mail-Templates.",
    },
  ],
  code: [
    {
      filename: "supplier-emails.php",
      language: "php",
      description: "E-Mail-Versand an Lieferanten",
      code: `class WC_Supplier_Emails {
    private $suppliers = array();
    private $email_log = array();
    
    public function __construct() {
        // Lieferanten aus Datenbank laden
        $this->suppliers = $this->load_suppliers();
        
        // Hook in den Bestellprozess
        add_action('woocommerce_checkout_order_processed', array($this, 'process_order_for_suppliers'), 10, 3);
        add_action('woocommerce_order_status_changed', array($this, 'handle_order_status_change'), 10, 4);
        
        // Admin-Menü und Einstellungen
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    public function process_order_for_suppliers($order_id, $posted_data, $order) {
        // Bestellpositionen verarbeiten
        $items = $order->get_items();
        $supplier_orders = $this->group_items_by_supplier($items);
        
        // E-Mails für jeden Lieferanten senden
        foreach ($supplier_orders as $supplier_id => $supplier_items) {
            $supplier = $this->get_supplier($supplier_id);
            if (!$supplier) continue;
            
            $email_content = $this->generate_email_content($supplier, $supplier_items, $order);
            $sent = $this->send_supplier_email($supplier, $email_content, $order_id);
            
            // Versand protokollieren
            $this->log_email_send($order_id, $supplier_id, $sent);
        }
    }
    
    public function generate_email_content($supplier, $items, $order) {
        // Dynamisches Template laden
        $template = $this->get_supplier_template($supplier['id']);
        
        // Template-Variablen ersetzen
        $replacements = array(
            '{supplier_name}' => $supplier['name'],
            '{order_number}' => $order->get_order_number(),
            '{order_date}' => $order->get_date_created()->date('Y-m-d H:i:s'),
            '{shipping_address}' => $this->format_shipping_address($order),
            '{items_table}' => $this->generate_items_table($items)
        );
        
        return str_replace(array_keys($replacements), array_values($replacements), $template);
    }
    
    // Weitere Hilfsfunktionen
    // ...
}`,
    },
  ],
};

export default CONFIG;
