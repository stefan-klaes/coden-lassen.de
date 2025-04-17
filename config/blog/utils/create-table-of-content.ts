type TableOfContent = {
  title: string;
  hash: string;
  children?: TableOfContent[];
};

export function createTableOfContent(markdown: string): TableOfContent[] {
  const lines = markdown.split("\n");
  const toc: TableOfContent[] = [];
  const stack: { level: number; item: TableOfContent }[] = [];

  const headingRegex = /^(#{2,6})\s+(.+)$/; // H2-H6

  for (const line of lines) {
    const match = line.match(headingRegex);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      const hash = "#" + sanitizeUrlHash(title);

      const item: TableOfContent = { title, hash };

      while (stack.length && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        toc.push(item);
        stack.push({ level, item });
      } else {
        const parent = stack[stack.length - 1].item;
        if (!parent.children) parent.children = [];
        parent.children.push(item);
        stack.push({ level, item });
      }
    }
  }

  return toc;
}

export function addIdsToMarkdownHeadings(html: string): string {
  // get all h1 - h3 tags and add id to them
  const headingRegex = /<(h[1-3])>(.*?)<\/\1>/g;
  const idMap: Record<string, string> = {};
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(html)) !== null) {
    const headingTag = match[1];
    const headingText = match[2].replace(/<.*?>/g, "").trim(); // remove any HTML tags inside the heading
    const id = sanitizeUrlHash(headingText);
    if (!idMap[id]) {
      idMap[id] = id;
    } else {
      let counter = 1;
      let newId = `${id}-${counter}`;
      while (idMap[newId]) {
        counter++;
        newId = `${id}-${counter}`;
      }
      idMap[id] = newId;
    }
    html = html.replace(
      `<${headingTag}>${headingText}</${headingTag}>`,
      `<${headingTag} id="${idMap[id]}">${headingText}</${headingTag}>`
    );
  }
  return html;
}

function sanitizeUrlHash(hash: string): string {
  // only allow a-z - 0-9
  let newHash = hash.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  // remove multiple -
  newHash = newHash.replace(/-+/g, "-");
  return newHash;
}

function decodeHtmlEntities(str: string) {
  if (typeof window !== "undefined") {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  } else {
    // Node.js fallback for SSR
    return str
      .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  }
}

export function customMarkdownItems(html: string) {
  const codeRegex =
    /<pre><code(?: class="language-([^"]+)")?>([\s\S]*?)<\/code><\/pre>/g;
  let match: RegExpExecArray | null;
  let lastIndex = 0;
  const htmlBlocks: {
    type: "code" | "html";
    content: string;
    lang?: string;
  }[] = [];

  while ((match = codeRegex.exec(html)) !== null) {
    const [fullMatch, lang, codeContent] = match;
    const index = match.index;

    // Push the HTML before the code block
    if (index > lastIndex) {
      htmlBlocks.push({
        type: "html",
        content: html.slice(lastIndex, index),
      });
    }

    // Decode HTML entities in codeContent
    const decodedCode = decodeHtmlEntities(codeContent);

    // Use only the decoded content inside <code>...</code>
    htmlBlocks.push({
      type: "code",
      content: decodedCode,
      lang: lang || "plaintext",
    });

    lastIndex = index + fullMatch.length;
  }

  // Push any remaining HTML after the last code block
  if (lastIndex < html.length) {
    htmlBlocks.push({
      type: "html",
      content: html.slice(lastIndex),
    });
  }

  return htmlBlocks;
}
