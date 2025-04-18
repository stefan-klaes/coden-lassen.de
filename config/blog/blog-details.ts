import * as articles from "./articles";

export type BlogArticle = string | React.ReactNode;

export const ARTICLE_DETAILS: Record<string, BlogArticle> = {
  "wordpress-shortcode-erstellen": articles.shortcode,
  "wordpress-plugin-selbst-erstellen": articles.plugin,
  "wordpress-code-sicherheit": articles.codeSafety,
  "wordpress-theme-selbst-erstellen": articles.themes,
  "wordpress-external-api": articles.externalApi,
};
