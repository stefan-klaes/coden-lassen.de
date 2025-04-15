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
