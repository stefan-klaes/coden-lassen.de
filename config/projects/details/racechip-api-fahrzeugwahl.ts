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
};

export default CONFIG;
