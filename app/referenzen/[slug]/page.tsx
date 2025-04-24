import { Badge } from "@/components/ui/badge";
import { Screenshot } from "@/components/ui/screenshot";
import { Typography } from "@/components/ui/typography";
import { PROJECT_DETAILS } from "@/config/projects/project-details";
import { PROJECTS } from "@/config/projects/projects";
import { Code, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Metadata } from "next";
import Link from "@/components/ui/custom-link";
import { Button } from "@/components/ui/button";
import PaperImage from "@/components/blocks/paper-image";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Find the project data
  const project = PROJECTS.find((p) => p.slug === slug);

  // If project doesn't exist, return basic metadata
  if (!project) {
    return {
      title: "Projekt nicht gefunden",
      description: "Die angeforderte Referenz existiert nicht.",
    };
  }

  return {
    title: `Referenz | ${project.name}`,
    description: project.description,
  };
}

export default async function ReferenzPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((project) => project.slug === slug);
  const projectDetails = project
    ? PROJECT_DETAILS[slug as keyof typeof PROJECT_DETAILS]
    : null;

  if (!project || !projectDetails) {
    notFound();
  }

  return (
    <div className="space-y-24">
      <div>
        <div className="flex flex-col justify-center space-y-4">
          <Typography variant="h1">{project.name}</Typography>
          <Typography variant="lead">{project.excerpt}</Typography>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-8 bg-none md:bg-accent p-0 md:p-8 rounded-lg flex items-center justify-center">
          <PaperImage
            className="h-full max-h-[400px] max-w-[640px]"
            src={project.image}
            alt={project.name}
          />
        </div>
        {/* <div className="bg-accent p-8 rounded-lg flex items-center justify-center mt-8">
          <Image
            src={project.image}
            alt={project.name}
            width={1600}
            height={900}
            className="w-full max-w-[320px]"
            priority
            quality={100}
          />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Projektbeschreibung</h2>
          <p className="mb-8">{projectDetails.task}</p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Herausforderungen</h3>
            <ul className="list-disc pl-5 space-y-2">
              {projectDetails.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Meine Lösung</h3>
            <p>{projectDetails.solution}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Ergebnisse</h3>
            <ul className="list-disc pl-5 space-y-2">
              {projectDetails.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {projectDetails.links ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          {projectDetails.links.map((link, i) => (
            <Button className="border" variant="secondary" asChild key={i}>
              <Link target="_blank" href={link.url}>
                {link.title}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      ) : null}

      <div className="space-y-8">
        {projectDetails.screenshots || projectDetails.code ? (
          <Typography variant="h3">Weitere Eindrücke</Typography>
        ) : null}

        <div className="space-y-24">
          {projectDetails.screenshots ? (
            <div className="w-full max-w-screen-lg space-y-12">
              {projectDetails.screenshots.map((screenshot, i) => (
                <div key={i} className="relative">
                  {screenshot.description ? (
                    <p className="mb-2 text-sm text-muted-foreground">
                      {screenshot.description}
                    </p>
                  ) : null}
                  <Screenshot url={screenshot.url} src={screenshot.src} />
                </div>
              ))}
            </div>
          ) : null}
          {projectDetails.code ? (
            <div className="space-y-6">
              {projectDetails.code.map((item, i) => (
                <div key={i}>
                  {item.description ? (
                    <p className="mb-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                  <div className="rounded-lg overflow-hidden shadow-sm border">
                    <div className="px-4 py-2 flex items-center gap-2 border-b">
                      <Code className="h-4 w-4" />
                      <span className="text-sm font-mono">{item.filename}</span>
                    </div>
                    <SyntaxHighlighter
                      language={item.language}
                      style={github}
                      customStyle={{
                        margin: 0,
                        padding: "1.5rem",
                        borderRadius: "0 0 0.5rem 0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
