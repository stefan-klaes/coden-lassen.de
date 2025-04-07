import Image from "next/image";
import {
  LockOpenIcon as LockClosedIcon,
  EllipsisVerticalIcon,
} from "lucide-react";

interface ScreenshotProps {
  src: string;
  url: string;
  device?: "desktop" | "mobile";
}

export function Screenshot({ src, url, device = "desktop" }: ScreenshotProps) {
  const isMobile = device === "mobile";

  return (
    <div
      className={`overflow-hidden rounded border border-accent shadow-lg ${
        isMobile ? "max-w-[375px]" : "w-full"
      }`}
    >
      {/* Browser chrome */}
      <div className="bg-zinc-200 dark:bg-zinc-800 px-4 py-2 flex items-center gap-2">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="size-2 rounded-full bg-red-500" />
          <div className="size-2 rounded-full bg-yellow-500" />
          <div className="size-2 rounded-full bg-green-500" />
        </div>

        {/* Address bar */}
        <div className="flex-grow flex items-center gap-2 bg-accent rounded-md px-2 md:px-3 py-1 truncate">
          <LockClosedIcon className="size-2 md:size-3 text-gray-400 flex-none" />
          <span className="text-gray-400 truncate text-xs">{url}</span>
        </div>

        {/* Refresh button */}
        <span className="text-gray-400">
          <EllipsisVerticalIcon className="size-3" />
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative">
        <Image
          src={src}
          alt="Screenshot"
          width={isMobile ? 375 : 1280}
          height={isMobile ? 667 : 800}
          className="w-full h-auto m-0"
        />
      </div>
    </div>
  );
}
