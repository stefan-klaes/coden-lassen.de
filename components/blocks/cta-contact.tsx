"use client";
import { ArrowRightIcon, MoveUpRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "../ui/custom-link";
import Image from "next/image";

export default function AnfrageCTA({
  description,
  className,
  secondaryBotton,
}: {
  description?: string;
  className?: string;
  secondaryBotton?: {
    href: string;
    label: string;
  };
}) {
  return (
    <div className={className}>
      <div className="overflow-hidden relative w-full bg-zinc-100 dark:bg-zinc-800 p-4 py-22 border rounded flex items-center justify-center">
        <div className="space-y-12">
          <p className="text-4xl font-bold text-center text-pretty">
            Interesse an einer Zusammenarbeit?
          </p>
          {description ? (
            <p className="text-center max-w-xl mx-auto">{description}</p>
          ) : null}
          <div className="text-center space-x-4">
            <Button asChild>
              <Link href="/kontakt">
                Projekt anfragen
                <MoveUpRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={secondaryBotton?.href || "/leistungen"}>
                {secondaryBotton?.label || "Leistungen"}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/wordpress-entwickler-anfragen-kontakt.png"
          alt="WordPress Entwickler PHP"
          className="bottom-0 right-0 opacity-100 h-[90%] w-auto hidden xl:block absolute"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
