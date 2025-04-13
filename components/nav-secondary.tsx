import { ArrowRightIcon, MailIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "@/components/ui/custom-link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function NavSecondary() {
  const { state } = useSidebar();
  const pathname = usePathname();
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            {pathname !== "/kontakt" ? (
              <Button variant="default" className="w-full" asChild>
                <Link href="/kontakt">
                  {state !== "collapsed" ? (
                    <>
                      Anfragen
                      <ArrowRightIcon className="size-4" />
                    </>
                  ) : (
                    <MailIcon className="size-4" />
                  )}
                </Link>
              </Button>
            ) : null}
            {state !== "collapsed" ? (
              <div className="grid grid-cols-2 gap-2 text-xs text-center pt-2 text-muted-foreground">
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
              </div>
            ) : null}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
