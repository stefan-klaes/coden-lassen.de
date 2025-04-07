"use client";

import { AnimatedList } from "@/components/magicui/animated-list";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Project, PROJECTS } from "@/config/projects/projects";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "@/components/ui/custom-link";

let notifications = [...PROJECTS] as Project[];
notifications = Array.from({ length: 10 }, () => [...PROJECTS]).flat();

const Notification = ({ name, description, emoji }: Project) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center">
          <span className="text-2xl">{emoji}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function References({ className }: { className?: string }) {
  return (
    <div>
      <div className="text-center mb-12 space-y-4">
        <Typography variant="h2">Meine Referenzen</Typography>
        <p className="text-lg max-w-2xl mx-auto">
          Hier sind einige meiner bisherigen Projekte und Erfahrungen als{" "}
          <strong className="font-semibold">WordPress Entwickler</strong>. Ich
          habe an einer Vielzahl von Projekten gearbeitet, die meine Fähigkeiten
          und mein Engagement für Qualität unter Beweis stellen.
        </p>
      </div>
      <div
        className={cn(
          "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
          className
        )}
      >
        <AnimatedList>
          {notifications.map((item, i) => (
            <Link key={i} href={`/referenzen/${item.slug}`}>
              <Notification {...item} />
            </Link>
          ))}
        </AnimatedList>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="w-full max-w-[400px]" asChild>
          <Link href="/referenzen">
            Zu den Referenzen
            <ArrowRightIcon className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
