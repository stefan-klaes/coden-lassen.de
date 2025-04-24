import HeadStarter from "@/components/blocks/head-starter";
import Link from "@/components/ui/custom-link";
import { Typography } from "@/components/ui/typography";
import { TOOLS } from "@/config/tools/tools";
import Image from "next/image";
import TokenBalance from "./components/token-balance";

export default function ToolsPage() {
  return (
    <section className="p-4 space-y-12">
      <HeadStarter
        title="Nützliche WordPress Mini-Tools"
        description={
          <span>
            Hier findest du eine Sammlung von nützlichen WordPress Mini-Tools,
            die ich entwickelt habe. Diese Tools sind kostenlos und helfen dir,
            deine WordPress-Projekte effizienter zu gestalten.
          </span>
        }
      />
      <TokenBalance />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool, i) => (
          <Link key={i} href={`/tools/${tool.slug}`} className="block">
            <div className="border hover:bg-accent transition duration-100 space-y-4 p-4 w-full h-full overflow-hidden rounded-lg">
              {/* Papier-Zettel mit Tape-Effekt */}
              <Image
                src={tool.image}
                alt={tool.name}
                width={500}
                height={500}
                className="size-24 rounded"
              />
              <div className="flex-1 space-y-4">
                <div>
                  <Typography
                    variant="h2"
                    className="text-2xl lg:text-2xl line-clamp-1"
                  >
                    {tool.name}
                  </Typography>
                  <p className="mt-2 text-muted-foreground line-clamp-4">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
