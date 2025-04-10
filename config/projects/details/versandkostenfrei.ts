import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer benutzerfreundlichen WooCommerce-Erweiterung zur Anzeige des Fortschritts zum Erreichen eines versandkostenfreien Warenkorbs. Die Lösung sollte Kunden motivieren, mehr Produkte hinzuzufügen, um die Grenze für kostenlosen Versand zu erreichen.`,

  challenges: [
    "Nahtlose Integration in verschiedene Shop-Designs",
    "Echtzeit-Aktualisierung bei Änderungen am Warenkorb",
    "Berücksichtigung verschiedener Währungen und Versandregeln",
    "Optimierung für mobile Endgeräte",
  ],

  outcomes: [
    "Erhöhter durchschnittlicher Bestellwert durch gezielte Upselling-Anreize",
    "Verbesserte Kundeninteraktion und Kauferlebnis",
    "Reduzierung der Warenkorbabbrüche",
    "Transparenz bei Versandkosten als Faktor der Kundenzufriedenheit",
  ],

  solution: `Die implementierte WooCommerce-Lösung zeigt einen visuell ansprechenden Fortschrittsbalken an prominenten Stellen wie Warenkorb, Produktseiten und Header. Mit AJAX-getriebener Echtzeit-Aktualisierung ohne Seitenneuladen reagiert das System sofort auf Warenkorbänderungen. Ein intelligenter Algorithmus berücksichtigt komplexe Versandregeln und bietet personalisierte Produktempfehlungen, um die Versandkostenfreiheit zu erreichen. Das responsive Design passt sich allen Bildschirmgrößen an, während umfangreiche Konfigurationsmöglichkeiten die Anpassung von Design, Position und Messaging ermöglichen. Analytics-Funktionen bieten Einblick in das Kundenverhalten in Bezug auf die Versandkostenschwelle.`,

  technologies: [
    "PHP",
    "WordPress",
    "WooCommerce",
    "JavaScript",
    "AJAX",
    "CSS",
    "Responsive Design",
  ],

  client: "Online-Händler mit WooCommerce-Shop",

  screenshots: [
    {
      src: "/referenzen/woocommer-warenkorb-versandkostenfrei.png",
      url: "Shop-Frontend",
      alt: "Versandkostenfrei Fortschritt",
      description: "Anzeige des Fortschrittsbalkens zur Versandkostenfreiheit im Warenkorb.",
    }
  ],
  code: [
    {
      filename: "free-shipping-progress.php",
      language: "php",
      description: "Hauptklasse für die Versandkostenfrei-Fortschrittsanzeige",
      code: `class WC_Free_Shipping_Progress {
    private $free_shipping_min_amount;
    private $display_locations;
    private $progress_bar_color;
    
    public function __construct() {
        // Einstellungen laden
        $this->free_shipping_min_amount = $this->get_free_shipping_minimum();
        $this->display_locations = get_option('fsp_display_locations', array('cart', 'checkout', 'header'));
        $this->progress_bar_color = get_option('fsp_progress_bar_color', '#4CAF50');
        
        // Hooks für verschiedene Anzeigeorte
        if (in_array('cart', $this->display_locations)) {
            add_action('woocommerce_before_cart', array($this, 'display_progress_bar'));
        }
        
        if (in_array('checkout', $this->display_locations)) {
            add_action('woocommerce_checkout_before_order_review', array($this, 'display_progress_bar'));
        }
        
        if (in_array('header', $this->display_locations)) {
            add_action('wp_footer', array($this, 'add_header_progress_bar'));
        }
        
        if (in_array('product', $this->display_locations)) {
            add_action('woocommerce_after_add_to_cart_form', array($this, 'display_progress_bar'));
        }
        
        // AJAX-Handler für Warenkorb-Updates
        add_action('wp_ajax_update_shipping_progress', array($this, 'ajax_update_progress'));
        add_action('wp_ajax_nopriv_update_shipping_progress', array($this, 'ajax_update_progress'));
        
        // Assets registrieren
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        
        // Admin-Bereich
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    public function display_progress_bar() {
        // Aktuellen Warenkorbbetrag ermitteln
        $cart_total = WC()->cart->get_displayed_subtotal();
        
        // Wenn keine Versandkostenminimum gefunden oder Warenkorb leer
        if (!$this->free_shipping_min_amount || $cart_total <= 0) {
            return;
        }
        
        // Fortschritt berechnen
        $progress = min(100, ($cart_total / $this->free_shipping_min_amount) * 100);
        $remaining = max(0, $this->free_shipping_min_amount - $cart_total);
        
        // HTML-Ausgabe
        ?>
        <div class="free-shipping-progress-container">
            <?php if ($progress < 100) : ?>
                <p><?php printf(__('Fügen Sie Produkte im Wert von %s hinzu, um von kostenlosem Versand zu profitieren!', 'free-shipping-progress'), wc_price($remaining)); ?></p>
            <?php else : ?>
                <p><?php _e('Sie erhalten kostenlosen Versand!', 'free-shipping-progress'); ?></p>
            <?php endif; ?>
            
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: <?php echo esc_attr($progress); ?>%; background-color: <?php echo esc_attr($this->progress_bar_color); ?>"></div>
            </div>
            
            <?php if ($progress < 100) : ?>
                <div class="recommended-products">
                    <?php $this->display_product_recommendations($remaining); ?>
                </div>
            <?php endif; ?>
        </div>
        <?php
    }
    
    private function get_free_shipping_minimum() {
        $free_shipping_methods = array();
        
        // WooCommerce Versandklassen durchsuchen
        $shipping_methods = WC()->shipping()->get_shipping_methods();
        
        if (isset($shipping_methods['free_shipping'])) {
            $free_shipping = $shipping_methods['free_shipping'];
            
            if ($free_shipping->is_enabled() && $free_shipping->min_amount > 0) {
                return $free_shipping->min_amount;
            }
        }
        
        // Versandzonen durchsuchen (für erweiterte Konfigurationen)
        $zones = WC_Shipping_Zones::get_zones();
        foreach ($zones as $zone) {
            foreach ($zone['shipping_methods'] as $method) {
                if ($method->id === 'free_shipping' && $method->is_enabled()) {
                    if (isset($method->min_amount) && $method->min_amount > 0) {
                        $free_shipping_methods[] = $method->min_amount;
                    }
                }
            }
        }
        
        // Kleinsten Betrag zurückgeben, falls mehrere existieren
        return !empty($free_shipping_methods) ? min($free_shipping_methods) : false;
    }
    
    // Weitere Methoden...
}`,
    },
  ],
};

export default CONFIG;
