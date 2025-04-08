"use client";

import { MoreHorizontal } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "@/components/ui/custom-link";
import { PROJECTS } from "@/config/projects/projects";
import { usePathname } from "next/navigation";

export function NavProjects() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Referenzen</SidebarGroupLabel>
      <SidebarMenu>
        {PROJECTS.slice(0, 5).map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              tooltip={item.name}
              className={
                pathname === `/referenzen/${item.slug}`
                  ? "bg-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-800"
                  : ""
              }
            >
              <Link href={`/referenzen/${item.slug}`}>
                <i>{item.emoji}</i>
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Referenzen" asChild>
            <Link href="/referenzen">
              <MoreHorizontal />
              <span>Alle Referenzen</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
