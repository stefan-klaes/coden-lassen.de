export type ImageCodeEditor = {
  filename: string;
  language: string;
  codeLines: string[];
};

export type ImageBrowserPreview = {
  url: string;
  title: string;
  content: string;
};

export type ImageTerminalProps = {
  commandLines: {
    command: string;
    output?: string;
  }[];
};

export type ImageCodeDiff = {
  oldLines: string[];
  newLines: string[];
};

type Thumbnail =
  | {
      type: "code_editor";
      atts: ImageCodeEditor;
    }
  | {
      type: "browser_preview";
      atts: ImageBrowserPreview;
    }
  | {
      type: "terminal";
      atts: ImageTerminalProps;
    }
  | {
      type: "code_diff";
      atts: ImageCodeDiff;
    };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  thumbnail: {
    config: Thumbnail;
    motiv: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  };
}
