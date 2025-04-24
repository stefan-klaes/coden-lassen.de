"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "./app-sidebar";
import MobileBottomNav from "./mobile-bottom-nav";
import { ToolSidebar } from "./tool-sidebar";

export default function SidebarHandler() {
  const pathname = usePathname();

  if (pathname.startsWith("/tools")) {
    return <>
      <ToolSidebar />
      <MobileBottomNav className="md:hidden" />
    </>
  }
  return (
    <>
      <AppSidebar className="hidden md:flex" />
      <MobileBottomNav className="md:hidden" />
    </>
  );
}
