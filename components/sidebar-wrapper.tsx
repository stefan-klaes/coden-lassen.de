import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarBreadcrumbs from "./sidebar-breadcrumbs";
import SidebarHandler from "./sidebar-handler";
import SidebarVisibilityToggle from "./sidebar-visibility-toggle";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarHandler />
      <SidebarInset className="relative overflow-hidden">
        <header className="flex h-12 shrink-0 items-center gap-2 absolute top-0 left-0 right-0 z-10 bg-background border-b border-border">
          <div className="flex items-center gap-0 lg:gap-2 px-4">
            <SidebarVisibilityToggle />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <SidebarBreadcrumbs />
          </div>
        </header>
        <div className="absolute inset-0 top-12 flex flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex-1 pb-16 md:pb-4 pt-4 px-4">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
