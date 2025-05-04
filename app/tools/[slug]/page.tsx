export const runtime = "edge";

import { Typography } from "@/components/ui/typography";
import { ToolSlug } from "@/config/tools/types";
import { notFound } from "next/navigation";
import KiAltTextGenerator from "../components/alt-text-generator/alt-text-generator";
import { TOOLS } from "@/config/tools/tools";

const COMPONENTS: Record<ToolSlug, React.ReactNode> = {
  "ki-alt-text-generator": <KiAltTextGenerator />,
};

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = TOOLS.find((tool) => tool.slug === slug);
  const component = COMPONENTS[slug as ToolSlug];

  if (!tool || !component) {
    notFound();
  }

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <Typography variant="h1" className="text-xl text-center">
          {tool.name}
        </Typography>
        <p className="text-center">{tool.description}</p>
      </div>
      {component}
    </div>
  );
}
