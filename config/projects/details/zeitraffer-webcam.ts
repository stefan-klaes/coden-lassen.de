import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer spezialisierten WordPress Lösung zur Verarbeitung, Filterung und Zeitrafferpräsentation von Webcambildern von Baustellen. Das System sollte die automatisierte Erfassung von Bildern ermöglichen, diese nach Datum filtern und daraus ansprechende Zeitraffervideos erstellen können.`,

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

  solution: `Die implementierte WordPress Lösung synchronisiert Webcam-Snapshots mit automatischer Bildoptimierung und intelligenter Speicherorganisation. Ein Frontend-Interface mit JavaScript-Kalenderfilterfunktion ermöglicht die einfache Auswahl von Zeiträumen. Die Zeitraffer-Generierung erfolgt mit FFMPEG und Bildverarbeitungsbibliotheken bei Bedarf oder vorab geplant. Die Lösung unterstützt progressive Downloads und adaptive Streaming-Qualitäten für mobile Geräte und schnelle Zwischenbilder-Navigation. Für Administratoren steht ein Dashboard mit Speicherstatistiken und Wartungsfunktionen zur Verfügung.`,

  technologies: ["PHP", "WordPress", "JavaScript"],

  client: "Bauunternehmen mit mehreren aktiven Bauprojekten",
};

export default CONFIG;
