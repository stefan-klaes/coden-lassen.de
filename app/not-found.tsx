import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">404</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Seite nicht gefunden</h2>
          <p className="text-muted-foreground">
            Diese Seite scheint nicht zu existieren oder wurde möglicherweise
            entfernt.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild variant="default">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Zur Startseite
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
