"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Typography } from "@/components/ui/typography";
import { SendIcon } from "lucide-react";
import Age from "@/components/blocks/age";
import YearsExperience from "@/components/blocks/years-experience";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative h-full">
      <div className="border-b lg:border-b-0 lg:border-r p-4">
        <Typography variant="h1" className="mb-6">
          Kontakt
        </Typography>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dein Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="deine-email@beispiel.de"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Betreff</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Worum geht es?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Beschreibe hier deine Anfrage..."
                rows={6}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              Nachricht senden
              <SendIcon className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Mit Absenden des Formulars stimmst du zu, dass deine Daten zur
              Bearbeitung der Anfrage verwendet werden.
            </p>
          </form>
        </div>
      </div>

      <div className="flex items-center h-full overflow-hidden">
        <div className="flex flex-col h-full w-full">
          <div className="space-y-2 text-left p-4">
            {[
              {
                label: (
                  <span>
                    Stefan Klaes (<Age /> Jahre alt)
                  </span>
                ),
                emoji: "👨‍💻  ",
              },
              {
                label: (
                  <span>
                    WordPress Entwickler (<YearsExperience /> Jahre Erfahrung)
                  </span>
                ),
                emoji: "💻  ",
              },
              {
                label: "Elsdorf (zw. Hamburg und Bremen)",
                emoji: "📍  ",
              },
              {
                label: "arbeite remote (ganz Deutschland)",
                emoji: "🏠  ",
              },
              {
                label: "stefan@coden-lassen.de",
                emoji: "✉️  ",
              },
              {
                label: "Antwort in <48 Stunden",
                emoji: "⏳  ",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-lg">{item.emoji}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-end mt-auto w-full">
            <Image
              src="/wordpress-entwickler-anfragen-kontakt.png"
              alt="WordPress Entwickler PHP"
              className="h-[300px] w-auto"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
