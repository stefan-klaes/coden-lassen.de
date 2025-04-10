"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AnfrageCTA() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Hier würde normalerweise die Anfrage verarbeitet werden
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-2 border-slate-200">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 pb-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
          Kommen Sie mit Ihrer WordPress-Website nicht weiter?
        </CardTitle>
        <CardDescription className="text-base md:text-lg text-slate-700 mt-2">
          Ich unterstütze WordPress-Profis, die bei ihren Projekten feststecken
          oder spezielle Funktionen benötigen.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {!submitted ? (
          <>
            {!showForm ? (
              <div className="space-y-4">
                <p className="text-slate-700">
                  <strong>Speziell für:</strong> Webdesigner, Agenturen und
                  Freelancer, die beruflich mit WordPress arbeiten und...
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>...bei komplexen Anpassungen nicht weiterkommen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      ...maßgeschneiderte Plugin-Entwicklung benötigen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      ...technische Unterstützung für ihre Kundenprojekte suchen
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Ihr Name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Ihre Anfrage
                  </label>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-semibold text-slate-800">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-slate-700">
              Ich melde mich zeitnah bei Ihnen zurück.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center md:justify-end pt-2 pb-6">
        {!submitted ? (
          !showForm ? (
            <Button
              onClick={() => setShowForm(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
            >
              Jetzt anfragen <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Zurück
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
              >
                Absenden
              </Button>
            </div>
          )
        ) : (
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setShowForm(false);
            }}
          >
            Neue Anfrage
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
