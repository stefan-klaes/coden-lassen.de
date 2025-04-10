"use client";
import { Button } from "@/components/ui/button";
import Link from "@/components/ui/custom-link";
import { Typography } from "@/components/ui/typography";
import { PROJECTS } from "@/config/projects/projects";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-4">
        <Typography variant="h2">Meine Referenzen</Typography>
        <p className="text-lg">
          Hier sind einige meiner bisherigen Projekte und Erfahrungen als{" "}
          <strong className="font-semibold">WordPress Entwickler</strong>. Ich
          habe an einer Vielzahl von Projekten gearbeitet, die meine Fähigkeiten
          und mein Engagement für Qualität unter Beweis stellen.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.slice(0, 8).map((project, i) => (
          <Link
            className="cursor-pointer"
            href={`/referenzen/${project.slug}`}
            key={i}
          >
            <div className="flex flex-row items-center gap-3 border hover:bg-accent transition-all p-2 rounded">
              <div className="flex items-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  height={120}
                  width={120}
                  className="size-16"
                />
              </div>
              <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                  <span className="text-sm sm:text-lg">{project.name}</span>
                </figcaption>
                <p className="text-sm font-normal dark:text-white/60">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Button variant="ghost" asChild>
        <Link href="/referenzen">
          Alle Referenzen
          <ArrowRightIcon className="mr-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
