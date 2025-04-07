interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wordpress-entwickler",
    title: "WordPress Entwickler",
    excerpt:
      "Ich bin ein leidenschaftlicher WordPress Entwickler mit über 10 Jahren Erfahrung in der Entwicklung von Websites und Webanwendungen.",
    date: "2023-10-01",
    image: "/wordpress-entwickler-profile-image.png",
    tags: ["WordPress", "Entwicklung", "Webentwicklung"],
  },
  {
    slug: "wordpress-plugins",
    title: "WordPress Plugins",
    excerpt:
      "Ich habe eine Vielzahl von WordPress Plugins entwickelt, die die Funktionalität und Benutzerfreundlichkeit von Websites verbessern.",
    date: "2023-09-15",
    image: "/wordpress-plugin-development.png",
    tags: ["WordPress", "Plugins", "Entwicklung"],
  },
  {
    slug: "wordpress-themes",
    title: "WordPress Themes",
    excerpt:
      "Ich habe zahlreiche benutzerdefinierte WordPress Themes entwickelt, die auf die spezifischen Anforderungen meiner Kunden zugeschnitten sind.",
    date: "2023-08-20",
    image: "/wordpress-theme-development.png",
    tags: ["WordPress", "Themes", "Entwicklung"],
  },
];
