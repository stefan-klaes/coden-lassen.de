import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer WooCommerce-Erweiterung zur automatisierten Generierung und Versendung von spezialisierten E-Mails an Lieferanten bei Bestelleingang. Das System sollte den manuellen Prozess der Lieferantenbenachrichtigung automatisieren und gleichzeitig hochgradig anpassbare E-Mail-Templates bereitstellen.`,

  challenges: [
    "Integration in den WooCommerce-Bestellprozess",
    "Erstellung dynamischer, produktspezifischer E-Mail-Templates",
    "Zuverlässiges Routing an verschiedene Lieferanten basierend auf Produktkategorien",
    "Fehlerbehandlung und Nachverfolgung des E-Mail-Versands",
  ],

  outcomes: [
    "Signifikante Zeitersparnis durch Automatisierung der Lieferantenkommunikation",
    "Reduzierte Fehlerquote durch standardisierte E-Mail-Templates",
    "Verbesserte Lieferantenbeziehungen durch sofortige Benachrichtigung",
    "Erhöhte Transparenz durch Protokollierung aller gesendeten Nachrichten",
  ],

  solution: `Die implementierte WooCommerce-Erweiterung fügt sich nahtlos in den Bestellworkflow ein und erkennt automatisch lieferantenspezifische Produkte. Mit dynamischen Templating-Funktionen werden personalisierte HTML-E-Mails mit Bestelldetails, Produktspezifikationen und Lieferanweisungen erstellt. Ein intelligentes Routing-System ordnet Produkte dem richtigen Lieferanten zu und optimiert Bestellungen für mehrere Lieferanten. Die umfangreiche Admin-Oberfläche ermöglicht die einfache Konfiguration von Lieferanten, Templates und individuellen Regeln, während ein Protokollierungssystem den Versandstatus überwacht und bei Problemen Benachrichtigungen sendet.`,

  technologies: [
    "PHP",
    "WordPress",
    "WooCommerce",
    "HTML",
    "CSS",
    "JavaScript",
    "SMTP",
  ],

  client: "Händler mit umfangreichem Lieferantennetzwerk",
};

export default CONFIG;
