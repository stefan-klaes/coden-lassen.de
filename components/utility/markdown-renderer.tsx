import { cn } from "@/lib/utils";
import { marked } from "marked";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export async function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const html = await marked.parse(content);

  return (
    <div
      className={cn(
        "space-y-2",
        "prose prose-neutral dark:prose-invert max-w-none",
        // Add additional prose customizations here
        "prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
        "prose-p:text-base prose-p:leading-7",
        "prose-li:text-base prose-li:leading-7",
        "prose-code:text-sm prose-code:font-medium",
        "prose-pre:bg-muted prose-pre:text-muted-foreground",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
