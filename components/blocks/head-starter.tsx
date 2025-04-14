import Image from "next/image";
import { Typography } from "../ui/typography";

export default function HeadStarter({
  tag,
  title,
  variant = "h1",
  description,
  image,
}: {
  tag?: string;
  title: string;
  variant?: "h1" | "h2" | "h3";
  description: string | React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className="grid gap-4 text-center text-pretty w-full max-w-screen-md mx-auto pb-12">
      {tag ? <p className="text-muted-foreground text-sm">{tag}</p> : null}
      <Typography variant={variant}>{title}</Typography>
      <p>{description}</p>
      {image ? (
        <div className="aspect-[1/1] rounded-lg overflow-hidden w-full max-w-60 mx-auto border bg-accent mt-12">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
            className="w-full h-full object-contain object-left lg:object-cover"
            priority
          />
        </div>
      ) : null}
    </div>
  );
}
