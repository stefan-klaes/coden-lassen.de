import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheckIcon } from "lucide-react";
import { CodeIcons } from "@/components/icons/code-icons";
import { Typography } from "@/components/ui/typography";
import Link from "@/components/ui/custom-link";

const CODING_ICONS = [
  { name: "PHP", icon: CodeIcons.php },
  { name: "WordPress", icon: CodeIcons.wordpress },
  { name: "Javascript", icon: CodeIcons.javascript },
  { name: "HTML", icon: CodeIcons.html },
  { name: "MySQL", icon: CodeIcons.mysql },
  { name: "CSS", icon: CodeIcons.css },
];

const OFFER_POINTS = [
  "Individuelle WordPress Themes",
  "Maßgeschneiderte Plugins",
  "Performance-Optimierung",
  "Sicherheit & Updates",
];

export default function Hero() {
  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="flex flex-col justify-center space-y-4">
          <Typography variant="h1">
            Individuelle WordPress-Lösungen für Ihr Unternehmen
          </Typography>
          <Typography variant="lead">
            Maßgeschneiderte Themes, Plugins und Funktionen – entwickelt mit
            Leidenschaft und technischer Präzision für Ihren einzigartigen
            Bedarf.
          </Typography>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="/kontakt">
                Projekt anfragen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/referenzen">Referenzen ansehen</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {OFFER_POINTS.map((point, i) => (
              <div key={i} className="flex items-center space-x-2 p-4">
                <BadgeCheckIcon className="h-6 w-6 text-muted-foreground" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end h-full">
          <div className="h-full relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/wordpress-entwickler.jpg"
              alt="WordPress Entwickler mit Laptop"
              width={1600}
              height={900}
              className="w-full h-full object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-green-500 h-2.5 w-2.5"></div>
                <p className="text-sm font-medium text-white">
                  Verfügbar für neue Projekte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8">
        {CODING_ICONS.map((item) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div className="size-8">{item.icon()}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
