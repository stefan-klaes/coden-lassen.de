import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung eines WordPress-Plugins zur Integration der Racechip API für die Anzeige von Fahrzeugdaten und entsprechenden Leistungsoptimierungen. Das Plugin sollte eine intuitive Fahrzeugauswahlschnittstelle bieten und dynamisch passende Produktempfehlungen basierend auf den ausgewählten Fahrzeugdaten anzeigen.`,

  challenges: [
    "Sichere und effiziente Integration der Racechip API",
    "Entwicklung einer benutzerfreundlichen Fahrzeugauswahlschnittstelle",
    "Dynamische Filterung und Anzeige relevanter Produkte",
    "Leistungsoptimierung für schnelle Reaktionszeiten trotz umfangreicher Datenmengen",
  ],

  outcomes: [
    "Verbesserte Nutzererfahrung durch vereinfachte Produktfindung",
    "Höhere Konversionsrate durch präzise Produktempfehlungen",
    "Reduzierte Supportanfragen dank klarer Fahrzeugkompatibilitätsangaben",
    "Aktuelle und genaue Fahrzeugdaten durch API-Integration",
  ],

  solution: `Die implementierte WordPress-Lösung bietet eine dreistufige Fahrzeugauswahl (Marke, Modell, Motorisierung) mit responsivem Design und AJAX-Technologie. Das Caching-System reduziert API-Aufrufe und verbessert die Ladezeiten, während die Darstellung von Leistungsdaten mit ansprechenden Diagrammen erfolgt. Eine dynamische Shortcode-Implementierung ermöglicht die flexible Einbindung im gesamten Shop, und die intelligente Produktverknüpfung zeigt automatisch kompatible Produkte an. Die Admin-Benutzeroberfläche ermöglicht umfassende Konfigurationen, und regelmäßige API-Synchronisationen halten die Fahrzeugdatenbank aktuell.`,

  technologies: [
    "PHP",
    "WordPress",
    "WooCommerce",
    "JavaScript/jQuery",
    "AJAX",
    "REST API",
    "CSS",
  ],

  client: "Anbieter von Fahrzeug-Tuning-Lösungen",

  screenshots: [
    {
      src: "/referenzen/autoteile-api-woocommerce.png",
      url: "Shop-Frontend",
      alt: "Fahrzeugauswahl Interface",
      description:
        "Benutzeroberfläche zur Auswahl von Fahrzeugmarke, -modell und -motorisierung.",
    },
  ],
  code: [
    {
      filename: "racechip-api-client.php",
      language: "php",
      description: "API-Client für Racechip Fahrzeugdaten",
      code: `class Racechip_API_Client {
    private $api_key;
    private $api_url;
    private $cache_time;
    
    public function __construct() {
        $this->api_key = get_option('racechip_api_key', '');
        $this->api_url = get_option('racechip_api_url', 'https://api.racechip.com/v1/');
        $this->cache_time = get_option('racechip_cache_time', 86400); // 24 Stunden
        
        // Actions für AJAX-Anfragen registrieren
        add_action('wp_ajax_get_vehicle_models', array($this, 'ajax_get_vehicle_models'));
        add_action('wp_ajax_nopriv_get_vehicle_models', array($this, 'ajax_get_vehicle_models'));
        
        add_action('wp_ajax_get_vehicle_engines', array($this, 'ajax_get_vehicle_engines'));
        add_action('wp_ajax_nopriv_get_vehicle_engines', array($this, 'ajax_get_vehicle_engines'));
        
        add_action('wp_ajax_get_vehicle_performance', array($this, 'ajax_get_vehicle_performance'));
        add_action('wp_ajax_nopriv_get_vehicle_performance', array($this, 'ajax_get_vehicle_performance'));
    }
    
    public function get_brands() {
        // Versuche aus Cache zu laden
        $brands = get_transient('racechip_brands');
        if ($brands !== false) {
            return $brands;
        }
        
        // Keine Cache-Daten, API abfragen
        $response = $this->api_request('brands');
        if (is_wp_error($response)) {
            return $response;
        }
        
        // Daten im Cache speichern
        set_transient('racechip_brands', $response, $this->cache_time);
        return $response;
    }
    
    public function get_models($brand_id) {
        $cache_key = 'racechip_models_' . $brand_id;
        $models = get_transient($cache_key);
        
        if ($models === false) {
            $response = $this->api_request('models', array('brand_id' => $brand_id));
            if (is_wp_error($response)) {
                return $response;
            }
            
            set_transient($cache_key, $response, $this->cache_time);
            return $response;
        }
        
        return $models;
    }
    
    private function api_request($endpoint, $params = array()) {
        $url = $this->api_url . $endpoint;
        $params['api_key'] = $this->api_key;
        
        $response = wp_remote_get(add_query_arg($params, $url), array(
            'timeout' => 15,
            'headers' => array(
                'Accept' => 'application/json'
            )
        ));
        
        if (is_wp_error($response)) {
            return $response;
        }
        
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            return new WP_Error('json_error', 'Ungültige API-Antwort');
        }
        
        if (isset($data['error'])) {
            return new WP_Error('api_error', $data['error']);
        }
        
        return $data;
    }
    
    // AJAX-Handler
    public function ajax_get_vehicle_models() {
        if (!isset($_GET['brand_id'])) {
            wp_send_json_error('Brand ID fehlt');
        }
        
        $brand_id = intval($_GET['brand_id']);
        $models = $this->get_models($brand_id);
        
        if (is_wp_error($models)) {
            wp_send_json_error($models->get_error_message());
        }
        
        wp_send_json_success($models);
    }
    
    // Weitere AJAX-Handler und Helper-Funktionen
    // ...
}`,
    },
  ],
};

export default CONFIG;
