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

export function NavSecondary() {
  const { state } = useSidebar();
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
