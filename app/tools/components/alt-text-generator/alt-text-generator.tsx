"use client";
import { FileUploader } from "@/components/blocks/file-upload";
import RequiredToken from "@/components/blocks/required-token";
import { Button } from "@/components/ui/button";
import { getTool } from "@/config/tools/utils/get-tool";
import { useApiFetcher } from "@/hooks/api-fetcher";
import { cn } from "@/lib/utils";
import { fileToBase64 } from "@/lib/utils/filte-to-base64";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function KiAltTextGenerator() {
  const [files, setFiles] = useState<File[]>([]);
  const { fetcher, isPending, data, reset } = useApiFetcher<"image-alt-text">();

  const tool = getTool("ki-alt-text-generator");

  const handleGenerate = async () => {
    const base64Url = await fileToBase64(files[0]);
    await fetcher("image-alt-text", {
      method: "POST",
      body: {
        base64Url,
        language: "german",
      },
    });
  };

  useEffect(() => {
    reset();
  }, [files]);

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FileUploader
          className="aspect-[calc(16/9)] lg:aspect-square"
          maxItems={1}
          allowedFormats={["image/jpeg", "image/png", "image/webp"]}
          maxSize={5 * 1024 * 1024} // 5MB
          files={files}
          setFiles={setFiles}
        />
        <div className="border rounded p-4 flex flex-col h-full">
          <div className="space-y-4 flex-1">
            <div className="space-y-2">
              <p className="font-semibold">Alt Text:</p>
              <p
                className={cn(
                  "bg-accent rounded p-2",
                  isPending ? "animate-pulse" : ""
                )}
              >
                {isPending ? "-" : data?.altText || "-"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Dateiname:</p>
              <p
                className={cn(
                  "bg-accent rounded p-2",
                  isPending ? "animate-pulse" : ""
                )}
              >
                {isPending ? "-" : data?.fileName || "-"}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <RequiredToken requiredToken={tool.requiredToken} />
            <Button
              variant="ai"
              className="w-full"
              disabled={!files.length || isPending || !!data}
              onClick={handleGenerate}
            >
              {isPending ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <>
                  <SparklesIcon />
                  Generiere Alt-Text
                </>
              )}
            </Button>
            <p className="text-xs mt-1 text-center text-muted-foreground">
              {!files.length ? (
                "Bitte lade ein Bild hoch"
              ) : data ? (
                <span
                  className="text-destructive cursor-pointer hover:underline"
                  onClick={() => setFiles([])}
                >
                  Auswahl zurücksetzen
                </span>
              ) : isPending ? (
                "Der Alt-Text wird generiert"
              ) : (
                "Alt-Text per KI generieren"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
