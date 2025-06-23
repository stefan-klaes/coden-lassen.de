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

  code: [
    {
      filename: "sync-service.php",
      language: "php",
      description: "Code für die Job-Synchronisation",
      code: `/**
  * Register api endpoint to sync jobs
  */
public function register_endpoints()
{
  register_rest_route('xml-job-importer', '/sync-jobs', array(
    'methods' => 'GET',
    'callback' => array($this, 'endpoint_sync_jobs'),
  ));
  register_rest_route('xml-job-importer', '/schedule-sync-jobs', array(
    'methods' => 'GET',
    'callback' => array($this, 'trigger_sync_async'),
  ));
}`,
    },
  ],
};

export default CONFIG;
