"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

type FileUploaderProps = {
  maxItems?: number;
  allowedFormats?: string[];
  maxSize?: number; // in bytes
  files: File[];
  setFiles: (files: File[]) => void;
  description?: string;
  className?: string;
};

export function FileUploader({
  maxItems = 1,
  allowedFormats = ["image/jpeg", "image/png", "image/webp"],
  maxSize = 5 * 1024 * 1024,
  files,
  setFiles,
  description,
  className,
}: FileUploaderProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;
    const newFiles: File[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (!allowedFormats.includes(file.type)) {
        setError("Invalid file format.");
        continue;
      }
      if (file.size > maxSize) {
        setError("File is too large.");
        continue;
      }
      newFiles.push(file);
    }
    if (files.length + newFiles.length > maxItems) {
      setError(`You can only upload up to ${maxItems} file(s).`);
      return;
    }
    setError(null);
    setFiles([...files, ...newFiles]);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (idx: number) => {
    setFiles(files.filter((_, i) => i !== idx));
  };

  if (files.length > 0) {
    return (
      <div className={cn("relative flex items-center justify-center border rounded overflow-hidden", className)}>
          {files.map((file, i) => {
            const url = URL.createObjectURL(file);
            return (
              <React.Fragment key={i}>
                  <Image
                    height={600}
                    width={600}
                    src={url}
                    alt={file.name}
                    className="object-contain mx-auto bg-white max-h-full max-w-full"
                    onLoad={() => URL.revokeObjectURL(url)}
                  />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 text-destructive hover:text-destructive border"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(i);
                  }}
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </Button>
              </React.Fragment>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      <div
        className={cn(
          "border-2 border-dashed bg-accent hover:border-primary hover:bg-blue-50 rounded p-4 flex flex-col items-center justify-center transition",
          dragActive ? "bg-blue-50" : "",
          className
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        style={{ cursor: "pointer" }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={allowedFormats.join(",")}
          multiple={maxItems > 1}
          className="hidden"
          onChange={onInputChange}
        />
        <span className="text-sm text-muted-foreground mb-2 text-center">
          {description || (
            <span>
              Datei{maxItems > 1 ? "en" : ""} hier hineinziehen oder{" "}
              <span className="font-semibold">klicke zum Hochladen</span>
            </span>
          )}
        </span>
        <span className="text-xs text-muted-foreground">
          Erlaubt: {allowedFormats.map((f) => f.split("/")[1]).join(", ")} | max
          Größe: {(maxSize / 1024 / 1024).toFixed(1)}MB
        </span>
      </div>
      {error && <div className="text-destructive text-xs mt-2">{error}</div>}
    </div>
  );
}
