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

export function NavProjects() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Referenzen</SidebarGroupLabel>
      <SidebarMenu>
        {PROJECTS.slice(0, 5).map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
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
