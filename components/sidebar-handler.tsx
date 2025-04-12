"use client";

import { AppSidebar } from "./app-sidebar";
import MobileBottomNav from "./mobile-bottom-nav";

export default function SidebarHandler() {
  return (
    <>
      <AppSidebar className="hidden md:flex" />
      <MobileBottomNav className="md:hidden" />
    </>
  );
}
