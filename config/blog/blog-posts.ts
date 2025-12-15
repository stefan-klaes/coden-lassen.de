import { BlogPost } from "./types";

export const BLOG_SLUGS = [
  "wordpress-shortcode-erstellen",
  "wordpress-plugin-selbst-erstellen",
  "wordpress-theme-selbst-erstellen",
  "wordpress-external-api",
  "wordpress-code-sicherheit",
  "individuellen-code-wordpress",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wordpress-shortcode-erstellen",
    title: "WordPress Shortcode erstellen",
    excerpt:
      "Schritt für Schritt Anleitung zum Erstellen von benutzerdefinierten WordPress Shortcodes. Erfahre, wie du dynamische Inhalte einfach in deine Beiträge und Seiten einfügen kannst.",
    date: "2023-10-01",
    tags: ["WordPress", "Entwicklung", "Webentwicklung"],
    cta: {
      title: "Individuelle WordPress Programmierung benötigt?",
      description:
        "Egal, ob shortcodes oder andere Anpassungen, ich helfe dir gerne.",
    },
  },
  {
    slug: "wordpress-plugin-selbst-erstellen",
    title: "WordPress Plugins selbst erstellen",
    excerpt:
      "Komplette Anleitung zum Erstellen eigener WordPress Plugins von Grund auf. Lerne, wie du deine Website mit maßgeschneiderten Funktionen erweitern kannst.",
    date: "2023-09-15",
    tags: ["WordPress", "Plugins", "Entwicklung"],
    cta: {
      title: "WordPress Plugin erstellen lassen?",
      description: "Ich entwickel individuelle Plugins für meine Kunden.",
    },
  },
  {
    slug: "wordpress-theme-selbst-erstellen",
    title: "WordPress Theme selbst erstellen",
    excerpt:
      "Umfassender Guide zur Entwicklung professioneller WordPress Themes. Erfahre, wie du maßgeschneiderte Designs erstellst, die perfekt auf die Bedürfnisse deiner Kunden abgestimmt sind.",
    date: "2023-08-20",
    tags: ["WordPress", "Themes", "Entwicklung"],
  },
  {
    slug: "wordpress-external-api",
    title: "WordPress mit externen APIs",
    excerpt:
      "Praxisnahe Anleitung zur Integration externer APIs in WordPress. Lerne, wie du Daten dynamisch abrufen, verarbeiten und nutzerfreundlich auf deiner Website anzeigen kannst.",
    date: "2023-07-10",
    tags: ["WordPress", "API", "Integration"],
    cta: {
      title: "API doch lieber integrieren lassen?",
      description: "Melde dich mit deinen Anforderungen und ich helfe dir.",
    },
  },
  {
    slug: "wordpress-code-sicherheit",
    title:
      "WordPress Code Sicherheit: Best Practices für sichere Plugins & Themes",
    excerpt:
      "Wichtige Sicherheitsrichtlinien und Best Practices für WordPress-Entwickler. Erkenne typische Sicherheitslücken und lerne, wie du deinen Code nach WordPress-Standards absichern kannst.",
    date: "2024-06-08",
    tags: ["WordPress", "Sicherheit", "Best Practices", "Entwicklung"],
  },
  {
    slug: "individuellen-code-wordpress",
    title: "Individuellen Code in WordPress einbauen",
    excerpt:
      "Lerne, wie du individuellen Code sicher und effektiv in deine WordPress-Website integrierst – von einfachen Snippets bis zu komplexen Anpassungen.",
    date: "2025-04-26",
    tags: ["WordPress", "Code", "Entwicklung", "Anpassung"],
    cta: {
      title: "Individuelle Anpassung gewünscht?",
      description:
        "Melde dich für professionelle Unterstützung bei der Integration von individuellem Code.",
    },
  },
];
