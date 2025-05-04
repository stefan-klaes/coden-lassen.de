import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="order-2 lg:order-1 flex justify-start h-full">
          <div className="w-full relative overflow-hidden">
            <Image
              src="/wordpress-entwickler-leistungen.webp"
              alt="WordPress Entwickler mit Laptop"
              width={800}
              height={1200}
              className="h-full w-auto max-h-[520px] mx-auto"
              priority
              quality={100}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
          <Typography variant="h2">
            Die folgenden Leistungen biete ich als WordPress Entwickler an.
          </Typography>
          <p className="text-base leading-relaxed mb-4">
            Als{" "}
            <strong className="font-semibold">
              erfahrener WordPress Entwickler
            </strong>{" "}
            unterstütze ich Agenturen und Freelancer bei
            <span className="font-semibold"> technischen Aufgaben</span>, die
            über den typischen Website-Baukasten hinausgehen. Ob
            <strong className="font-semibold">
              {" "}
              individuelle Programmierung
            </strong>
            , die
            <strong className="font-semibold"> Anbindung externer APIs</strong>,
            oder die
            <strong className="font-semibold">
              {" "}
              Entwicklung maßgeschneiderter Plugins
            </strong>{" "}
            – ich liefere sauberen, wartbaren Code und
            <span className="font-semibold"> zuverlässige Lösungen</span>.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Mein Fokus liegt auf der Umsetzung von Anforderungen, bei denen
            WordPress-typische Mittel an ihre Grenzen stoßen. Ich arbeite eng
            mit <span className="font-semibold">Designern</span>,{" "}
            <span className="font-semibold">Projektleitern</span> oder
            <span className="font-semibold"> anderen Entwicklern</span> zusammen
            –{" "}
            <strong className="font-semibold">
              schnell, professionell und pragmatisch
            </strong>
            . Dabei achte ich besonders auf{" "}
            <strong className="font-semibold">Performance</strong>,{" "}
            <strong className="font-semibold">Sicherheit</strong> und
            <strong className="font-semibold"> Erweiterbarkeit</strong>.
          </p>
          <p className="text-base leading-relaxed">
            Wenn du für dein Projekt Unterstützung bei
            <span className="font-semibold">
              {" "}
              komplexeren WordPress-Entwicklungen
            </span>{" "}
            brauchst, helfe ich gerne weiter –
            <strong className="font-semibold"> unkompliziert</strong>,{" "}
            <strong className="font-semibold">lösungsorientiert</strong> und mit
            <span className="font-semibold">
              {" "}
              tiefem technischem Verständnis
            </span>
            . Egal ob einmalige Aufgabe oder langfristige Zusammenarbeit.
          </p>
        </div>
      </div>
    </section>
  );
}
