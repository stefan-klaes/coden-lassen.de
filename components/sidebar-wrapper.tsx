import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarBreadcrumbs from "./sidebar-breadcrumbs";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="relative overflow-hidden">
        <header className="flex h-12 shrink-0 items-center gap-2 absolute top-0 left-0 right-0 z-10 bg-background border-b border-border">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <SidebarBreadcrumbs />
          </div>
        </header>
        <div className="absolute inset-0 top-12 flex flex-col overflow-y-auto">
          <div className="flex-1 p-4 lg:p-8">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
