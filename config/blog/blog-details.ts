import * as articles from "./articles";

export type BlogArticle = string | React.ReactNode;

export const ARTICLE_DETAILS: Partial<Record<string, BlogArticle>> = {
  "wordpress-shortcode-erstellen": articles.shortcode,
  "wordpress-plugin-selbst-erstellen": articles.plugin,
};
