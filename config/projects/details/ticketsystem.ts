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

  technologies: ["PHP", "WordPress", "REST API", "JavaScript"],

  client: "Dienstleistungsunternehmen mit hohem Support-Aufkommen",
};

export default CONFIG;
