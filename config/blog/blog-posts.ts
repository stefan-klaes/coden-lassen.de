interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  thumbnail: {
    text: string;
    bg: string;
    color: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wordpress-shortcode-erstellen",
    title: "WordPress Shortcode erstellen",
    thumbnail: {
      text: "[shortcode]",
      bg: "blue",
      color: "white",
    },
    excerpt:
      "Ich habe einen benutzerdefinierten WordPress Shortcode erstellt, der es ermöglicht, Inhalte dynamisch in Beiträgen und Seiten einzufügen.",
    date: "2023-10-01",
    tags: ["WordPress", "Entwicklung", "Webentwicklung"],
  },
  {
    slug: "wordpress-plugins",
    title: "WordPress Plugins",
    thumbnail: {
      text: "plugin.zip",
      bg: "green",
      color: "white",
    },
    excerpt:
      "Ich habe eine Vielzahl von WordPress Plugins entwickelt, die die Funktionalität und Benutzerfreundlichkeit von Websites verbessern.",
    date: "2023-09-15",
    tags: ["WordPress", "Plugins", "Entwicklung"],
  },
  {
    slug: "wordpress-themes",
    title: "WordPress Themes",
    thumbnail: {
      text: "theme.php",
      bg: "purple",
      color: "white",
    },
    excerpt:
      "Ich habe zahlreiche benutzerdefinierte WordPress Themes entwickelt, die auf die spezifischen Anforderungen meiner Kunden zugeschnitten sind.",
    date: "2023-08-20",
    tags: ["WordPress", "Themes", "Entwicklung"],
  },
  {
    slug: "wordpress-external-api",
    title: "WordPress mit externen APIs",
    thumbnail: {
      text: "status: 200",
      bg: "orange",
      color: "white",
    },
    excerpt:
      "Ich habe WordPress mit externen APIs integriert, um Daten dynamisch abzurufen und anzuzeigen.",
    date: "2023-07-10",
    tags: ["WordPress", "API", "Integration"],
  },
];
