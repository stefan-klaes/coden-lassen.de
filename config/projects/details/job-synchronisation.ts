import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `- Auslesen einer XML Datei eines externen Systems für Stellenanzeigen
  - Synchronisation der Stellenanzeigen in WordPress Custom Post Types
  - Alert System bei Unvollständigen Stellenanzeigen
  - Updaten von Bildern und Taxonomien
  - Einrichten eines Cronjobs für die Synchronisation`,

  solution: `Erstellung eines **Individuellen WordPress Plugins** mit den gebrieften Anforderungen:
  - XML Parser für die externe API
  - Einrichtung des Cronjobs beim Webhoster
  - Validierung der Stellenanzeigen
  - Effiziente Synchronisation durch Prüfung welche Felder sich geändert haben`,
  screenshots: [
    {
      src: "/xml-job-importer-screenshot.png",
      url: "Werkzeug > XML Job Importer",
      alt: "XML Job Importer",
      description:
        "Plugin Tab im WordPress Backend mit den Einstellungen für den Job Importer.",
    },
  ],
  code: [
    {
      filename: "code-ausschnitt.php",
      language: "php",
      description: "Minimaler Code-Ausschnitt des Plugins",
      code: `/**
 * Register api endpoint to sync jobs
 */
public function register_endpoints()
{
  register_rest_route('xml-job-importer', '/sync-jobs', array(
    'methods' => 'GET',
    'callback' => array($this, 'endpoint_sync_jobs'),
  ));
}

public function endpoint_sync_jobs($data)
{
  $job_syncer = new Xml_Job_Importer_Job_Syncer();
  // ...
}`,
    },
  ],
};

export default CONFIG;
