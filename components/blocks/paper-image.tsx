import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PaperImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center aspect-[16/9] w-full overflow-visible",
        className
      )}
    >
      {/* Tape oben */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "2%",
          width: "48px",
          height: "16px",
          background: "linear-gradient(135deg, #fbeec1 80%, #e6d7a7 100%)",
          borderRadius: "8px 8px 12px 12px",
          boxShadow: "0 2px 6px 0 rgba(0,0,0,0.10)",
          transform: "rotate(-4deg)",
          opacity: 0.85,
          zIndex: 10,
        }}
      />
      {/* Papier-Effekt */}
      <div
        className="bg-white border border-yellow-100 shadow-lg rounded-md overflow-hidden flex items-center justify-center"
        style={{
          boxShadow: "0 8px 24px 0 rgba(0,0,0,0.13), 0 1.5px 0 #fbeec1",
          border: "1px solid #fbeec1",
          position: "absolute",
          top: "5%",
          left: "20%",
          width: "90%",
          height: "90%",
          marginLeft: "-15%",
          marginTop: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          className="w-full h-full"
          style={{
            background: "#fffbe7",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
