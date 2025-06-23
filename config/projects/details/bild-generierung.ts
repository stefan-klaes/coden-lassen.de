import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer automatisierten Bildgenerierungslösung für WordPress, die dynamisch ansprechende Bilder für Stellenbeschreibungen erstellt. Das System sollte für jede neue Stellenanzeige automatisch ein individuelles Bild mit konsistentem Branding und anpassbaren Elementen generieren.`,

  challenges: [
    "Dynamische Bildgenerierung per WordPress Plugin",
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

  technologies: ["PHP", "WordPress", "CSS", "JavaScript"],

  client: "Unternehmen mit hohem Aufkommen von Stellenanzeigen",

  screenshots: [
    {
      src: "/image-job-beispiel.png",
      url: "",
      type: "other",
      alt: "Automatische Bildgenerierung",
      description: "Beispiel für eine automatisch generierte Bild.",
    },
  ],
};

export default CONFIG;
