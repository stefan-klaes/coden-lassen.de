"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  CodeIcon,
  HomeIcon,
  LayoutGridIcon,
  Menu,
  ProjectorIcon,
  SendIcon
} from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MAIN_NAVIGATION } from "@/config/navigation";
import Link from "./ui/custom-link";
import SidebarHeaderLogo from "./sidebar-header-logo";
import { PROJECTS } from "@/config/projects/projects";
import { usePathname } from "next/navigation";
import { NavUser } from "./nav-user";

const MOBILE_NAV = [
  {
    title: "Leistungen",
    url: "/leistungen",
    icon: CodeIcon,
  },
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Referenzen",
    url: "/referenzen",
    icon: ProjectorIcon,
  },
  {
    title: "Kontakt",
    url: "/kontakt",
    icon: SendIcon,
  },
];

export default function MobileBottomNav({ className }: { className?: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 z-10 w-full border-t bg-background md:hidden",
          className
        )}
      >
        {pathname.startsWith("/tools") ? (
          <div className="grid h-12 grid-cols-5">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center justify-center space-y-1"
          >
            <Menu className="size-4" />
            <span className="text-xs">Menu</span>
          </button>
          <Link
              href="/tools"
              onClick={closeDrawer}
              className={cn(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/tools" ? "font-semibold" : ""
              )}
            >
              <LayoutGridIcon className="size-4" />
              <span className="text-xs">Tools</span>
            </Link>
          <Link
              href="/"
              onClick={closeDrawer}
              className={cn(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/" ? "font-semibold" : ""
              )}
            >
              <HomeIcon className="size-4" />
              <span className="text-xs">Home</span>
            </Link>
            <div className="col-span-2 flex items-center pr-4">
              <NavUser isBottomNav={true} isCollapsed={false} />
            </div>
          </div>
        ): (
        <div className="grid h-12 grid-cols-5">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center justify-center space-y-1"
          >
            <Menu className="size-4" />
            <span className="text-xs">Menu</span>
          </button>
          {MOBILE_NAV.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              onClick={closeDrawer}
              className={cn(
                "flex flex-col items-center justify-center space-y-1",
                pathname === item.url ? "font-semibold" : ""
              )}
            >
              <item.icon className="size-4" />
              <span className="text-xs">{item.title}</span>
            </Link>
          ))}
        </div>
        )}
      </div>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="pb-8">
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerHeader>
              <div onClick={closeDrawer} className="w-fit">
                <SidebarHeaderLogo />
              </div>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-8 pb-8">
              <div className="grid grid-cols-2 gap-2">
                {MAIN_NAVIGATION.map((item, i) => {
                if (item.title === "Referenzen") {
                  return null
                }
                return (
                  <Button
                    variant="outline"
                    className="w-full justify-start truncate"
                    onClick={closeDrawer}
                    key={i}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span className="truncate">{item.title}</span>
                    </Link>
                  </Button>
                )})}
              </div>
              <div className="grid gap-2">
                <p className="text-sm font-medium">Referenzen</p>
                <div className="grid grid-cols-2 gap-2">
                  {PROJECTS.slice(0, 4).map((item, i) => (
                    <Button
                      variant="outline"
                      className="w-full truncate justify-start"
                      key={i}
                      onClick={closeDrawer}
                      asChild
                    >
                      <Link href={`/referenzen/${item.slug}`}>
                        <i>{item.emoji}</i>
                        <span className="truncate">{item.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  asChild
                  onClick={closeDrawer}
                  className="w-full justify-start"
                >
                  <Link href="/referenzen">
                    <span className="truncate">
                      {PROJECTS.length - 4} weitere Referenzen
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-2">
              <DrawerClose asChild>
                <Button
                  variant="default"
                  className="w-full"
                  asChild
                  onClick={closeDrawer}
                >
                  <Link href="/kontakt">
                    Anfragen
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </Button>
              </DrawerClose>
              <div className="grid grid-cols-2 gap-2 text-xs text-center">
                <Link href="/impressum" onClick={closeDrawer}>
                  Impressum
                </Link>
                <Link href="/datenschutz" onClick={closeDrawer}>
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
