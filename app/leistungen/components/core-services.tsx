import YearsExperience from "@/components/blocks/years-experience";
import { Typography } from "@/components/ui/typography";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function CoreServices() {
  return (
    <div className="grid gap-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="flex justify-start h-full">
          <div className="border-b lg:border-b-0 min-h-72 lg:min-h-96 lg:h-auto w-full relative overflow-hidden">
            <Image
              src="/individuelles-wordpress-plugin.png"
              alt="WordPress Entwickler mit Laptop"
              fill
              className="object-contain object-left"
              priority
              quality={100}
            />
          </div>
        </div>
        <div className="space-y-4 px-4">
          <Typography variant="h2">
            Individuelles WordPress Plugin als Lösung für deine Anfroderungen
          </Typography>
          <p>
            WordPress bietet über Plugins eine hervorragende Möglichkeit, die
            Funktionalität <span className="font-semibold">update sicher</span>{" "}
            zu erweitern.
          </p>
          <p>
            Ich liefere meine Programmierungen aus den folgenden Gründen sehr
            häufig in Form eines WordPress Plugis:
          </p>
          <div className="grid gap-2">
            {[
              "Unabhängigkeit vom Theme",
              "Einfach updatebar",
              "Einfach erweiterbar",
              "leichte Installation",
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-2">
                <CheckIcon className="size-4" /> <span>{item}</span>
              </p>
            ))}
          </div>
          <p>
            WordPress Plugins können übrigens aus sehr wenigen Zeilen Code
            bestehen und somit leicht und schnell sein.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="order-2 lg:order-1 space-y-4 px-4">
          <Typography variant="h2">
            WordPress durch individuellen Code erweitern
          </Typography>
          <p>
            Als WordPress Entwickler mit <YearsExperience /> Jahren Erfahrung
            kann ich so gut wie jede Anforderung bedienen. Die Möglichkeiten
            sind nahezu unbegrenzt. Ich bin stets auf der Suche nach kleineren
            und größeren Herausforderungen, die ich mit individuellem Code lösen
            kann.
          </p>
          <p>
            Ich arbeite in der Regel für WordPress Profis wie Agenturen,
            Freelancer oder andere Entwickler, die individuelle WordPress
            Programmierungen selbst nicht anbieten oder aus zeitlichen Gründen
            nicht umsetzen können.
          </p>
          <p>
            Ich biete meine{" "}
            <span className="font-semibold">
              WordPress Programmierung zum Festpreis
            </span>{" "}
            an und denke so eine sehr gute Planbarkeit für dich und dein Projekt
            zu schaffen.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex justify-center h-full">
          <div className="border-b lg:border-b-0 min-h-72 lg:min-h-96 lg:h-auto w-full relative overflow-hidden">
            <Image
              src="/wordpress-entwickler-php.png"
              alt="WordPress Entwickler mit Laptop"
              fill
              className="object-contain object-center"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
