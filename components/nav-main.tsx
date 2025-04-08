"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "@/components/ui/custom-link";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { usePathname } from "next/navigation";

export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {MAIN_NAVIGATION.map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={
                pathname === item.url
                  ? "bg-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-800"
                  : ""
              }
            >
              <Link prefetch={true} href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
