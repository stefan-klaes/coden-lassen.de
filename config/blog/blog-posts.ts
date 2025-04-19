import { BlogPost } from "./types";

export const BLOG_SLUGS = [
  "wordpress-shortcode-erstellen",
  "wordpress-plugin-selbst-erstellen",
  "wordpress-theme-selbst-erstellen",
  "wordpress-external-api",
  "wordpress-code-sicherheit",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wordpress-shortcode-erstellen",
    title: "WordPress Shortcode erstellen",
    thumbnail: {
      config: {
        type: "code_diff",
        atts: {
          oldLines: ["Ich bin 32 Jahre alt."],
          newLines: ["Ich bin [mein_alter] Jahre alt."],
        },
      },
      motiv: "1",
    },
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
    thumbnail: {
      config: {
        type: "code_editor",
        atts: {
          filename: "dein-plugin.php",
          language: "php",
          codeLines: [
            "<?php",
            "/*",
            " * Plugin Name: Dein Plugin",
            " * Version: 1.0",
            " */",
          ],
        },
      },
      motiv: "2",
    },
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
    thumbnail: {
      config: {
        type: "terminal",
        atts: {
          commandLines: [
            {
              command: "wp theme install mein-theme",
              output: "Installing Mein Theme (1.0)",
            },
          ],
        },
      },
      motiv: "3",
    },
    excerpt:
      "Umfassender Guide zur Entwicklung professioneller WordPress Themes. Erfahre, wie du maßgeschneiderte Designs erstellst, die perfekt auf die Bedürfnisse deiner Kunden abgestimmt sind.",
    date: "2023-08-20",
    tags: ["WordPress", "Themes", "Entwicklung"],
  },
  {
    slug: "wordpress-external-api",
    title: "WordPress mit externen APIs",
    thumbnail: {
      config: {
        type: "browser_preview",
        atts: {
          title: "External API",
          content: `status: 400,\nerror: "Bad Request"`,
          url: "WordPress > Backend",
        },
      },
      motiv: "8",
    },
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
    thumbnail: {
      config: {
        type: "code_diff",
        atts: {
          oldLines: ["$_POST['email'];", "$_POST['option'];"],
          newLines: [
            "sanitize_email( $_POST['email'] )",
            "sanitize_option( $_POST['option'] )",
          ],
        },
      },
      motiv: "7",
    },
    excerpt:
      "Wichtige Sicherheitsrichtlinien und Best Practices für WordPress-Entwickler. Erkenne typische Sicherheitslücken und lerne, wie du deinen Code nach WordPress-Standards absichern kannst.",
    date: "2024-06-08",
    tags: ["WordPress", "Sicherheit", "Best Practices", "Entwicklung"],
  },
];
