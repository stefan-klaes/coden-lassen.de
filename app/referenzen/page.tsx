import { PROJECTS } from "@/config/projects/projects";
import { Typography } from "@/components/ui/typography";
import ProjectsList from "./components/projects-list";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <Typography variant="h1">Meine Referenzen</Typography>
        <p>
          Hier sind einige meiner bisherigen Projekte und Erfahrungen als{" "}
          <strong className="font-semibold">WordPress Entwickler</strong>. Ich
          habe an einer Vielzahl von Projekten gearbeitet. Da die meisten meiner
          WordPress Entwicklungen kundenspezifisch sind, kann ich nicht immer
          sehr viele Details zu den Projekten veröffentlichen.
        </p>
      </div>

      <ProjectsList projects={PROJECTS} />
      <p className="text-muted-foreground italic">
        Ja, alle Bilder sind Ai generiert :D
      </p>
    </section>
  );
}
