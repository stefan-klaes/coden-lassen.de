import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer spezialisierten WordPress-Lösung zur Verarbeitung, Filterung und Zeitrafferpräsentation von Webcambildern von Baustellen. Das System sollte die automatisierte Erfassung von Bildern ermöglichen, diese nach Datum filtern und daraus ansprechende Zeitraffervideos erstellen können.`,

  challenges: [
    "Effiziente Verarbeitung und Speicherung großer Bildmengen",
    "Entwicklung eines robusten Algorithmus für Zeitraffergenerierung",
    "Benutzerfreundliche Filterung nach Zeiträumen",
    "Optimierung der Videoausgabe für verschiedene Endgeräte",
  ],

  outcomes: [
    "Transparente Baudokumentation durch lückenlose Bildaufzeichnung",
    "Beeindruckende Visualisierung des Baufortschritts",
    "Verbessertes Marketing durch nutzbare Zeitraffervideos",
    "Einfache Nachverfolgung der Bauaktivitäten",
  ],

  solution: `Die implementierte WordPress-Lösung synchronisiert Webcam-Snapshots mit automatischer Bildoptimierung und intelligenter Speicherorganisation. Ein Frontend-Interface mit JavaScript-Kalenderfilterfunktion ermöglicht die einfache Auswahl von Zeiträumen. Die Zeitraffer-Generierung erfolgt mit FFMPEG und Bildverarbeitungsbibliotheken bei Bedarf oder vorab geplant. Die Lösung unterstützt progressive Downloads und adaptive Streaming-Qualitäten für mobile Geräte und schnelle Zwischenbilder-Navigation. Für Administratoren steht ein Dashboard mit Speicherstatistiken und Wartungsfunktionen zur Verfügung.`,

  technologies: [
    "PHP",
    "WordPress",
    "JavaScript",
    "FFMPEG",
    "AJAX",
    "MySQL",
    "Responsive Design",
  ],

  client: "Bauunternehmen mit mehreren aktiven Bauprojekten",

  screenshots: [
    {
      src: "/referenzen/wordpress-zeitraffer-video.png",
      url: "Zeitraffer-Interface",
      alt: "Zeitraffer Webcam-Bilder",
      description:
        "Benutzeroberfläche zur Filterung und Wiedergabe der Zeitraffervideos.",
    },
  ],
  code: [
    {
      filename: "timelapse-generator.php",
      language: "php",
      description: "Hauptfunktionalität der Zeitraffergeneration",
      code: `class Webcam_Timelapse_Generator {
    private $upload_dir;
    private $ffmpeg_path;
    private $frames_per_second;
    
    public function __construct() {
        $this->upload_dir = wp_upload_dir()['basedir'] . '/webcam-images/';
        $this->ffmpeg_path = get_option('webcam_ffmpeg_path', '/usr/bin/ffmpeg');
        $this->frames_per_second = get_option('webcam_fps', 30);
        
        // Aktionen und Filter registrieren
        add_action('webcam_daily_image_sync', array($this, 'sync_webcam_images'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
        add_shortcode('webcam_timelapse', array($this, 'render_timelapse_interface'));
    }
    
    public function sync_webcam_images() {
        $webcam_sources = get_option('webcam_sources', array());
        
        foreach ($webcam_sources as $source) {
            $this->fetch_and_store_image($source);
        }
    }
    
    public function generate_timelapse($start_date, $end_date, $project_id) {
        // Prüfen, ob Zeitraffervideo bereits existiert
        $video_path = $this->get_timelapse_path($start_date, $end_date, $project_id);
        if (file_exists($video_path)) {
            return $this->get_timelapse_url($start_date, $end_date, $project_id);
        }
        
        // Bilder für den Zeitraum sammeln
        $images = $this->collect_images($start_date, $end_date, $project_id);
        if (count($images) < 2) {
            return new WP_Error('insufficient_images', 'Nicht genügend Bilder für den Zeitraffer gefunden');
        }
        
        // Bilderliste erstellen
        $image_list = $this->create_image_list($images);
        
        // FFMPEG-Befehl ausführen
        $result = $this->execute_ffmpeg($image_list, $video_path);
        if (is_wp_error($result)) {
            return $result;
        }
        
        return $this->get_timelapse_url($start_date, $end_date, $project_id);
    }
    
    // Weitere Hilfsfunktionen
    // ...
}`,
    },
  ],
};

export default CONFIG;
