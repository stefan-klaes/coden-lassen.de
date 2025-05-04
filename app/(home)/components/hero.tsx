import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircle, MoveUpRightIcon } from "lucide-react";
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

const CHECK_POINTS = [
  "Individuelle WordPress Programmierungen",
  "Aufträge, die du auslagern möchtest",
  "Lösungen, um dein Angebot zu erweitern",
];

export default function Hero() {
  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="flex flex-col justify-center space-y-8">
          <Typography variant="h1">
            WordPress Entwickler für individuelle Lösungen
          </Typography>
          <div>
            <p className="text-lg">
              Du bist WordPress Profi
              <br />
              und suchst jemanden für:
            </p>
            <ul className="space-y-2 text-muted-foreground my-2">
              {CHECK_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="/kontakt">
                Projekt anfragen <MoveUpRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/referenzen">
                Referenzen ansehen
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end h-full">
          <div className="h-full w-full relative overflow-hidden lg:rounded-bl-lg">
            <Image
              src="/stefan-coden-lassen.webp"
              alt="WordPress Entwickler mit Laptop"
              width={800}
              height={1200}
              className="h-full w-auto max-h-[480px] mx-auto"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-wrap justify-center gap-6 md:gap-8">
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
