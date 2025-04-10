import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer automatisierten Lösung zur regelmäßigen Synchronisation von Job-Daten zwischen WordPress und einem externen API-Dienst. Das System sollte aktuelle Stellenangebote importieren, bestehende aktualisieren und nicht mehr verfügbare Stellenanzeigen automatisch deaktivieren.`,

  challenges: [
    "Zuverlässige Cronjob-Implementation in WordPress",
    "Effiziente Verarbeitung großer Datenmengen",
    "Fehlerbehandlung bei API-Ausfällen",
    "Minimierung der Serverbelastung während der Synchronisation",
  ],

  outcomes: [
    "Vollautomatische Aktualisierung der Job-Daten ohne manuellen Eingriff",
    "Signifikante Zeitersparnis im Content-Management",
    "Höhere Datenaktualität und -genauigkeit",
    "Verbesserte Nutzererfahrung durch stets aktuelle Stelleninformationen",
  ],

  solution: `Die implementierte Lösung verwendet WordPress Cron Jobs für regelmäßige API-Abfragen mit intelligenter Fehlerbehandlung und Logging. Ein spezialisiertes Mapping-System transformiert externe Daten in WordPress-kompatible Strukturen und nutzt Transients für Caching. Die inkrementelle Synchronisation mit Änderungserkennung optimiert die Serverauslastung, während ein umfangreiches Logging- und Benachrichtigungssystem Probleme identifiziert. Das Dashboard-Widget ermöglicht manuelle Synchronisationen und zeigt Statistiken an. Die robuste Architektur ist unabhängig von spezifischen API-Anbietern und unterstützt mehrere Datenquellen.`,

  technologies: [
    "PHP",
    "WordPress",
    "REST API",
    "JavaScript",
    "MySQL",
    "Cron Jobs",
    "JSON",
  ],

  client: "Unternehmen mit externer Jobbörse",

  screenshots: [
    {
      src: "/referenzen/cronjob-wordpress.png",
      url: "WordPress Admin-Bereich",
      alt: "Job Synchronisation Dashboard",
      description:
        "Dashboard mit Synchronisationsstatus und letzten Aktivitäten.",
    },
  ],
  code: [
    {
      filename: "sync-service.php",
      language: "php",
      description: "Code für die Job-Synchronisation",
      code: `class Job_Sync_Service {
    private $api_client;
    private $last_sync;
    
    public function __construct() {
        $this->api_client = new API_Client(get_option('job_sync_api_key'));
        $this->last_sync = get_option('job_sync_last_run', 0);
        
        // Cronjob registrieren
        if (!wp_next_scheduled('job_sync_daily_event')) {
            wp_schedule_event(time(), 'daily', 'job_sync_daily_event');
        }
        
        add_action('job_sync_daily_event', array($this, 'sync_jobs'));
    }
    
    public function sync_jobs() {
        $start_time = microtime(true);
        $log = new Sync_Logger();
        $log->info('Starting job synchronization');
        
        try {
            // Änderungen seit letzter Synchronisation abrufen
            $jobs = $this->api_client->get_jobs_since($this->last_sync);
            
            // Daten verarbeiten
            $stats = $this->process_jobs($jobs);
            
            // Letzte Synchronisierungszeit aktualisieren
            update_option('job_sync_last_run', time());
            $log->info('Sync completed. Added: ' . $stats['added'] . ', Updated: ' . $stats['updated'] . ', Removed: ' . $stats['removed']);
        } catch (Exception $e) {
            $log->error('Sync failed: ' . $e->getMessage());
            $this->send_admin_notification('Job sync failed', $e->getMessage());
        }
        
        $execution_time = microtime(true) - $start_time;
        $log->info('Execution time: ' . round($execution_time, 2) . ' seconds');
    }
    
    private function process_jobs($jobs) {
        // Implementierung der Job-Verarbeitung
        // ...
    }
}`,
    },
  ],
};

export default CONFIG;
