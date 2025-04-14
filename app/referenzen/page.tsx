import { PROJECTS } from "@/config/projects/projects";
import ProjectsList from "./components/projects-list";
import HeadStarter from "@/components/blocks/head-starter";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <HeadStarter
        tag="Referenzen"
        title="Meine Referenzen als WordPress Entwickler"
        description={
          <span>
            Hier sind einige meiner bisherigen Projekte und Erfahrungen als{" "}
            <strong className="font-semibold">WordPress Entwickler</strong>. Ich
            habe an einer Vielzahl von Projekten gearbeitet. Da die meisten
            meiner WordPress Entwicklungen kundenspezifisch sind, kann ich nicht
            immer sehr viele Details zu den Projekten veröffentlichen.
          </span>
        }
      />
      <ProjectsList projects={PROJECTS} />
      <p className="text-muted-foreground italic text-sm">
        Ja, alle Bilder sind KI generiert :D
      </p>
    </section>
  );
}
