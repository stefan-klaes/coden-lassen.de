import Image from "next/image";
import Link from "./ui/custom-link";

export default function SidebarHeaderLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="text-sidebar-primary-foreground flex aspect-square size-10 rounded-lg">
        <Image
          src="/stefan-coden-lassen-pfp.webp"
          alt="WordPress Entwickler"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">Stefan Klaes</span>
        <span className="truncate text-xs">WordPress Entwickler</span>
      </div>
    </Link>
  );
}
