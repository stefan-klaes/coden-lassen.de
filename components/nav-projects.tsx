"use client";

import { ChevronRight, MoreHorizontal } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "@/components/ui/custom-link";
import { PROJECTS } from "@/config/projects/projects";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export function NavProjects() {
  const pathname = usePathname();
  return (
    <Collapsible title="Tools" defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <CollapsibleTrigger className="cursor-pointer">
            Referenzen
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {PROJECTS.slice(0, 5).map((item, i) => (
                <SidebarMenuItem key={i}>
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
                    <SidebarMenuBadge>{PROJECTS.length}</SidebarMenuBadge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
