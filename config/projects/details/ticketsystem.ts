import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer nahtlosen Integration zwischen WordPress-Formularen und einem externen Ticketsystem. Ziel war es, Kundenanfragen aus verschiedenen WordPress-Formularen automatisch in ein professionelles Ticketsystem zu übertragen, um eine effiziente Kundenbetreuung zu ermöglichen.`,

  challenges: [
    "Sichere API-Integration mit externem Ticketsystem",
    "Mapping verschiedener Formularfelder auf Ticketattribute",
    "Behandlung von Anhängen und Multimedia-Inhalten",
    "Implementierung von Fehlerbehandlung und Ausfallsicherheit",
  ],

  outcomes: [
    "Erheblich verbesserte Reaktionszeiten auf Kundenanfragen",
    "Zentralisierte Verwaltung aller Support-Anfragen",
    "Lückenlose Dokumentation der Kundenkommunikation",
    "Optimierte interne Workflows durch präzises Routing an Fachabteilungen",
  ],

  solution: `Die implementierte Lösung bietet eine nahtlose Verbindung zwischen WordPress und dem Ticketsystem über eine robuste API-Integration. Mit intelligenter Formularerkennung und flexiblem Feldmapping werden Kundenanfragen automatisch in korrekt kategorisierte Tickets umgewandelt. Das System unterstützt Dateianhänge und behandelt Medieninhalte, während eine Zwei-Wege-Synchronisation Statusupdates auf beiden Plattformen ermöglicht. Eine durchdachte Fehlerbehandlung mit Retry-Mechanismen und Benachrichtigungen sorgt für Zuverlässigkeit, während ein Admin-Dashboard Einblick in die Systemaktivität und Konfigurationsmöglichkeiten bietet.`,

  technologies: [
    "PHP",
    "WordPress",
    "REST API",
    "JavaScript",
    "AJAX",
    "OAuth2",
    "Contact Form 7/Gravity Forms",
  ],

  client: "Dienstleistungsunternehmen mit hohem Support-Aufkommen",

  screenshots: [
    {
      src: "/referenzen/post-its.png",
      url: "WordPress Admin-Bereich",
      alt: "Ticketsystem Integration",
      description: "Konfigurationsoberfläche für die Ticketsystem-Integration.",
    },
  ],
  code: [
    {
      filename: "ticket-integration.php",
      language: "php",
      description: "Hauptklasse für Ticketsystem-Integration",
      code: `class Ticket_System_Integration {
    private $api_client;
    private $form_mappings;
    
    public function __construct() {
        $this->api_client = new Ticket_API_Client();
        $this->form_mappings = get_option('ticket_form_mappings', array());
        
        // Contact Form 7 Integration
        add_action('wpcf7_before_send_mail', array($this, 'handle_cf7_submission'), 10, 3);
        
        // Gravity Forms Integration
        add_action('gform_after_submission', array($this, 'handle_gravity_form_submission'), 10, 2);
        
        // Ninja Forms Integration
        add_action('ninja_forms_after_submission', array($this, 'handle_ninja_form_submission'));
        
        // WPForms Integration
        add_action('wpforms_process_complete', array($this, 'handle_wpforms_submission'), 10, 4);
        
        // Admin-Oberfläche
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    public function handle_cf7_submission($contact_form, &$abort, $submission) {
        $form_id = $contact_form->id();
        
        // Prüfen, ob dieses Formular mit dem Ticketsystem verknüpft ist
        if (!$this->is_form_mapped($form_id, 'cf7')) {
            return;
        }
        
        // Formulardaten abrufen
        $form_data = array();
        $posted_data = $submission->get_posted_data();
        
        foreach ($posted_data as $key => $value) {
            if (is_array($value)) {
                $value = implode(', ', $value);
            }
            $form_data[$key] = $value;
        }
        
        // Anhänge verarbeiten
        $attachments = array();
        $upload_files = $submission->uploaded_files();
        
        foreach ($upload_files as $field_name => $files) {
            foreach ($files as $file) {
                if (file_exists($file)) {
                    $attachments[] = array(
                        'path' => $file,
                        'name' => basename($file),
                        'type' => mime_content_type($file)
                    );
                }
            }
        }
        
        // Ticket erstellen
        $ticket_data = $this->map_form_data_to_ticket($form_id, 'cf7', $form_data);
        $result = $this->create_ticket($ticket_data, $attachments);
        
        // Fehlerbehandlung
        if (is_wp_error($result)) {
            $this->log_error($result, $form_id, $form_data);
            
            // Optional: Formular abbrechen oder Benutzer informieren
            // $abort = true;
            // Besser: Im Backend protokollieren und per Cron erneut versuchen
        }
    }
    
    private function create_ticket($ticket_data, $attachments = array()) {
        try {
            // Basis-Ticket erstellen
            $ticket_response = $this->api_client->create_ticket($ticket_data);
            
            if (is_wp_error($ticket_response)) {
                return $ticket_response;
            }
            
            $ticket_id = $ticket_response['id'];
            
            // Anhänge hinzufügen, falls vorhanden
            if (!empty($attachments) && $ticket_id) {
                foreach ($attachments as $attachment) {
                    $this->api_client->add_attachment($ticket_id, $attachment);
                }
            }
            
            return $ticket_response;
            
        } catch (Exception $e) {
            return new WP_Error('ticket_creation_failed', $e->getMessage());
        }
    }
    
    // Weitere Methodenimplementierungen
    // ...
}`,
    },
  ],
};

export default CONFIG;
