export interface ProjectItem {
  slug: string;
  name: string;
  description: string;
  excerpt: string;
  emoji: string;
  image: string;
  tags: string[];
}

export const PROJECTS = [
  {
    name: "PDF Etiketten",
    slug: "pdf-etiketten",
    image: "/wordpress-entwickler-profile-image.png",
    description: "Etikettenerstellung für Labeldrucker als PDF",
    excerpt:
      "Erstellen Sie professionelle Etiketten als PDF für Labeldrucker. Ideal für Unternehmen, die eine einfache und effiziente Lösung für den Etikettendruck benötigen.",
    emoji: "🖨️",
    tags: ["PDF", "Drucker"],
  },
  {
    name: "Job Synchronisation",
    slug: "job-synchronisation",
    image: "/sync-job-button.webp",
    description: "Synchronisation von Job-Daten mit externem Dienst",
    excerpt:
      "Automatisieren Sie die Synchronisation von Job-Daten mit externen Diensten. Perfekt für Unternehmen, die ihre Daten stets aktuell halten möchten.",
    emoji: "🔁",
    tags: ["API", "Daten"],
  },
  {
    name: "Werkstattauftrag & neue E-Mails",
    slug: "werkstattauftrag",
    image: "/werkstattauftrag-plugin-symbol.webp",
    description: "PDF Generierung für Produktionsaufträge",
    excerpt:
      "Erstellung eines Plugins für eine Manufaktur mit eigener Produktion. Eine Funktion des Plugins war es aus den Inhalten der Bestellungen ein PDF zu erstellen, welches die Manufaktur für die Abarbeitung genutzt hat.",
    emoji: "👨‍🔧",
    tags: ["PDF", "Produktion"],
  },
  {
    name: "Bild Generierung",
    slug: "bild-generierung",
    image: "/wordpress-entwickler-profile-image.png",
    description: "Automatische Bildgenerierung für Stellenbeschreibungen",
    excerpt:
      "Erstellen Sie automatisch Bilder für Stellenbeschreibungen. Diese Funktion spart Zeit und sorgt für ein professionelles Erscheinungsbild.",
    emoji: "🖼️",
    tags: ["Bild", "Automatisierung"],
  },
  {
    name: "Webcambilder als Zeitraffer",
    slug: "bild-generierung",
    image: "/wordpress-entwickler-profile-image.png",
    description: "Video-Generierung aus Webcambildern",
    excerpt:
      "Individuelle WordPress Programmierung, die Webcambilder von Baustellen filterbar nach Datum und Zeitraffer anzeigen.",
    emoji: "🎥",
    tags: ["Video"],
  },
  {
    name: "Weitere Bestell-Mails",
    slug: "bestellemails",
    image: "/wordpress-entwickler-profile-image.png",
    description: "Email-Versand an Lieferanten",
    excerpt:
      "Automatisieren Sie den Versand von Bestell-Mails an Lieferanten. Eine effiziente Lösung für die Kommunikation in der Lieferkette.",
    emoji: "📧",
    tags: ["Email", "Automatisierung"],
  },
  {
    name: "Racechip API Fahrzeugwahl",
    slug: "racechip-api-fahrzeugwahl",
    image: "/wordpress-entwickler-profile-image.png",
    description: "Anzeige von Fahrzeugdaten über die Racechip API",
    excerpt:
      "WordPress Plugin, welches auf die Fahrzeugdaten der Racechip API zugreift und die entsprechenden Leistungen anzeigt.",
    emoji: "🚗",
    tags: ["API", "Formular"],
  },
  {
    name: "Verknüpfung Ticketsystem",
    slug: "ticketsystem",
    image: "/wordpress-entwickler-profile-image.png",
    description: "Formularanfragen an Ticketsystem übermitteln",
    excerpt:
      "Verbinden Sie Ihr Formular mit einem Ticketsystem, um Anfragen effizient zu verwalten. Ideal für Unternehmen mit hohem Supportaufkommen.",
    emoji: "🎫",
    tags: ["API", "Formular"],
  },
] as const;

export type Project = (typeof PROJECTS)[number];

const PROJECT_SLUGS = PROJECTS.map((project) => project.slug);
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];
