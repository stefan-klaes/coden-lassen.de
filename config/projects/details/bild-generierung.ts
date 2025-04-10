import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer automatisierten Bildgenerierungslösung für WordPress, die dynamisch ansprechende Bilder für Stellenbeschreibungen erstellt. Das System sollte für jede neue Stellenanzeige automatisch ein individuelles Bild mit konsistentem Branding und anpassbaren Elementen generieren.`,

  challenges: [
    "Dynamische Bildgenerierung mit PHP/GD oder Imagick",
    "Performance-Optimierung für schnelle Bilderstellung",
    "Integration anpassbarer Templates und Markenelemente",
    "Automatisierung ohne manuellen Eingriff",
  ],

  outcomes: [
    "Konsistentes visuelles Erscheinungsbild aller Stellenanzeigen",
    "Erhebliche Zeitersparnis gegenüber manueller Bilderstellung",
    "Verbesserte visuelle Anziehungskraft der Stellenanzeigen",
    "Bessere soziale Medien-Präsentation durch optimierte Open Graph-Bilder",
  ],

  solution: `Die implementierte Lösung nutzt PHP-GD zur automatischen Generierung ansprechender Bilder basierend auf Stellentiteln und Kategorien. Mit einem Template-System, das verschiedene Hintergrundbilder, Farbschemata und Schriften unterstützt, werden individuelle Bilder mit konsistentem Branding erzeugt. Ein intelligenter Caching-Mechanismus verhindert unnötige Neuberechnungen, während die admin-seitige Konfiguration individuelle Anpassungen ermöglicht. Bilderstellung erfolgt während des Veröffentlichungsprozesses oder bei Aktualisierungen und ist nahtlos in den WordPress-Workflow integriert.`,

  technologies: [
    "PHP",
    "WordPress",
    "GD Library/ImageMagick",
    "CSS",
    "JavaScript",
    "AJAX",
  ],

  client: "Unternehmen mit hohem Aufkommen von Stellenanzeigen",

  screenshots: [
    {
      src: "/referenzen/wordpress-zeitraffer.png",
      url: "WordPress Admin-Bereich",
      alt: "Automatische Bildgenerierung",
      description:
        "Konfigurationsoberfläche für die automatische Bildgenerierung.",
    },
  ],
  code: [
    {
      filename: "image-generator.php",
      language: "php",
      description: "Funktionen zur automatischen Bildgenerierung",
      code: `class Job_Image_Generator {
    private $width = 1200;
    private $height = 630;
    private $templates = array();
    private $fonts = array();
    
    public function __construct() {
        // Templates und Schriftarten laden
        $this->templates = $this->load_templates();
        $this->fonts = $this->load_fonts();
        
        // Action Hooks registrieren
        add_action('publish_job_listing', array($this, 'generate_job_image'), 10, 2);
        add_action('job_manager_save_job_listing', array($this, 'generate_job_image'), 10, 2);
    }
    
    public function generate_job_image($post_id, $post) {
        // Nur für Job Listings ausführen
        if ($post->post_type !== 'job_listing') {
            return;
        }
        
        // Job-Daten abrufen
        $job_title = get_the_title($post_id);
        $job_category = $this->get_primary_job_category($post_id);
        
        // Prüfen, ob ein Bild generiert werden muss
        if ($this->should_generate_image($post_id)) {
            $image = $this->create_image($job_title, $job_category);
            $this->save_and_attach_image($image, $post_id);
        }
    }
    
    private function create_image($title, $category) {
        // Vorlage basierend auf Kategorie auswählen
        $template = $this->select_template($category);
        
        // Bild erstellen
        $image = imagecreatetruecolor($this->width, $this->height);
        
        // Hintergrundbild laden
        $background = imagecreatefromjpeg($template['background']);
        imagecopy($image, $background, 0, 0, 0, 0, $this->width, $this->height);
        
        // Text hinzufügen
        $this->add_text_to_image($image, $title, $template);
        
        // Logo hinzufügen
        $this->add_logo_to_image($image);
        
        return $image;
    }
    
    // Weitere Hilfsfunktionen
    // ...
}`,
    },
  ],
};

export default CONFIG;
