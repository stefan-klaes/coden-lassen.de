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
    image: string;
    type?: "code_editor" | "image";
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
      image: "/thumbnails/thumbnail-1.png",
    },
    excerpt:
      "Ich habe einen benutzerdefinierten WordPress Shortcode erstellt, der es ermöglicht, Inhalte dynamisch in Beiträgen und Seiten einzufügen.",
    date: "2023-10-01",
    tags: ["WordPress", "Entwicklung", "Webentwicklung"],
  },
  {
    slug: "wordpress-plugin-selbst-erstellen",
    title: "WordPress Plugins selbst erstellen",
    thumbnail: {
      text: `<?php
[empty]
/**
 * Plugin Name:    Dein Plugin
 * Version:              1.0.0
 */`,
      bg: "green",
      color: "white",
      image: "/thumbnails/thumbnail-2.png",
      type: "code_editor",
    },
    excerpt:
      "So erstellst du ein benutzerdefiniertes WordPress Plugin, das deine Website-Funktionalität erweitert.",
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
      image: "/thumbnails/thumbnail-3.png",
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
      image: "/thumbnails/thumbnail-4.png",
    },
    excerpt:
      "Ich habe WordPress mit externen APIs integriert, um Daten dynamisch abzurufen und anzuzeigen.",
    date: "2023-07-10",
    tags: ["WordPress", "API", "Integration"],
  },
];
