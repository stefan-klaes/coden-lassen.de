"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { Loader2Icon, SendIcon } from "lucide-react";
import AboutMe from "@/components/blocks/about-me";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import SA_sendEmail from "@/lib/email/sa.send-email";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen haben." }),
  email: z.string().email({ message: "Bitte eine gültige E-Mail angeben." }),
  subject: z.string().min(2, { message: "Betreff muss mindestens 2 Zeichen haben." }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen haben." }),
});


export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      await SA_sendEmail({
        replyTo: data.email,
        subject: data.subject,
        text: data.message,
      });
      setSuccess(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-8 relative h-full">
      <div className={cn("pb-12 lg:pb-0 transition duration-300 ease-in-out",
      success || loading ? "bg-zinc-800 text-white" : "")}>
        <div className="h-full">
          {success || loading ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center px-8">
                <Typography variant="h1" className="mb-6">
                  {loading ? "Wird gesendet..." : "Vielen Dank!"}
                </Typography>
                <p className="mb-6">
                  {loading ? "Wir verarbeiten deine Nachricht..." : "Ich habe deine Nachricht erhalten und werde mich schnellstmöglich bei dir melden."}
                </p>
                {!loading ? (
                  <Button size="sm" variant="secondary" onClick={() => setSuccess(false)}>Neue Nachricht senden</Button>
                ) : null}
              </div>
            </div>
          ) : (
            <>
              <Typography variant="h1" className="mb-6">
                Kontakt
              </Typography>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Dein Name" disabled={loading} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="deine-email@beispiel.de" disabled={loading} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Betreff</FormLabel>
                        <FormControl>
                          <Input placeholder="Worum geht es?" disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachricht</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Beschreibe hier deine Anfrage..." rows={6} disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <Loader2Icon className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Nachricht senden
                        <SendIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Mit Absenden des Formulars stimmst du zu, dass deine Daten zur
                    Bearbeitung der Anfrage verwendet werden.
                  </p>
                </form>
              </Form></>
          )}
        </div>
      </div>

      <div className="pt-12 lg:pt-0 flex items-center h-full overflow-hidden">
        <div className="flex flex-col h-full w-full">
            <AboutMe />
          <div className="flex items-end justify-end mt-auto w-full">
            <Image
              src="/wordpress-entwickler-anfrage.webp"
              alt="WordPress Entwickler PHP"
              className="h-[360px] w-auto"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
