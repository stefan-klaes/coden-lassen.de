import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/config/blog/blog-posts";
import { ARTICLE_DETAILS, BlogArticle } from "@/config/blog/blog-details";
import { marked } from "marked";
import {
  addIdsToMarkdownHeadings,
  createTableOfContent,
} from "@/config/blog/utils/create-table-of-content";
import Link from "@/components/ui/custom-link";

export async function generateStaticParams() {
  return BLOG_POSTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Find the project data
  const article = BLOG_POSTS.find((p) => p.slug === slug);

  // If project doesn't exist, return basic metadata
  if (!article) {
    return {
      title: "Projekt nicht gefunden",
      description: "Die angeforderte Referenz existiert nicht.",
    };
  }

  return {
    title: `Referenz | ${article.title}`,
    description: article.excerpt,
  };
}

export default async function BlopgArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = BLOG_POSTS.find((project) => project.slug === slug);
  const articleContent = article
    ? ARTICLE_DETAILS[slug as keyof typeof ARTICLE_DETAILS]
    : null;

  if (!article || !articleContent) {
    notFound();
  }

  return (
    <div className="space-y-24 p-4">
      <div className="grid gap-8">
        <div className="flex flex-col text-center justify-center space-y-4 w-full max-w-screen-md mx-auto">
          <Typography variant="h1">{article.title}</Typography>
          <Typography variant="lead">{article.excerpt}</Typography>
          <div className="flex justify-center flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-full max-w-screen-md mx-auto">
          <Image
            src={`/api/image/${article.slug}/thumbnail.png`}
            alt={article.title}
            width={1600}
            height={900}
            className="w-full h-auto mx-auto rounded-lg"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="grid gap-8 w-full max-w-screen-md mx-auto">
        <TableOfContent markdown={articleContent} />
        <RenderArticleContent content={articleContent} />
      </div>
    </div>
  );
}

function TableOfContent({ markdown }: { markdown: BlogArticle }) {
  if (typeof markdown !== "string") return null;
  const config = createTableOfContent(markdown);
  return (
    <div className="flex flex-col gap-4 bg-accent p-4 rounded border">
      <Typography variant="h3">Inhaltsverzeichnis</Typography>
      <ul className="list-disc pl-6 space-y-2">
        {config.map((item) => (
          <li key={item.hash}>
            <Link href={item.hash} replace={true} className="hover:underline">
              {item.title}
            </Link>
            {item.children && item.children.length > 0 && (
              <ul className="list-disc pl-6 space-y-2">
                {item.children.map((child) => (
                  <li key={child.hash}>
                    <a
                      href={child.hash}
                      className="text-blue-600 hover:underline"
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

async function RenderArticleContent({ content }: { content: BlogArticle }) {
  if (typeof content === "string") {
    const html = addIdsToMarkdownHeadings(await marked.parse(content));
    // for all h2
    return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <>{content}</>;
}
