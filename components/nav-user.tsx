"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "./provider/session-provider";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  ChevronsUpDown,
  Loader2Icon,
  LogInIcon,
  LogOutIcon,
} from "lucide-react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import ApiKeyManager from "./api-key-manager";
import { TOKEN_PER_MONTH } from "@/config/token";
import { toast } from "sonner";

export function NavUser({
  isCollapsed,
  isBottomNav,
}: {
  isCollapsed: boolean;
  isBottomNav?: boolean;
}) {
  const { session } = useSession();
  useEffect(() => {
    console.log({ session });
  }, [session]);

  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await signOut();
      toast.success("Abgemeldet");
    } catch (error) {
      console.error(error);
      toast.error("Fehler beim Abmelden");
    } finally {
      setSigningOut(false);
    }
  };

  return (
    <>
      <UserAvatar
        session={session}
        isCollapsed={isCollapsed}
        setOpen={setOpen}
        isBottomNav={isBottomNav}
      />
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left w-full max-w-screen-md mx-auto p-4 lg:p-8">
            <div className="flex justify-between">
              <div>
                <DrawerTitle>{session?.user?.name || "Anmelden"}</DrawerTitle>
                <DrawerDescription>
                  {!session?.user?.email ? (
                    "Melde dich kostenlos an und erhalte kostenlose Token zur Nutzung der Tools."
                  ) : (
                    <span>
                      {session?.user?.project?.name || "Kein Projekt"} (komplett
                      kostenlos)
                    </span>
                  )}
                </DrawerDescription>
              </div>
              {session?.user?.email ? (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleSignOut}
                  disabled={signingOut}
                >
                  {signingOut ? (
                    <Loader2Icon className="size-4 animate-spin" />
                  ) : (
                    <LogOutIcon />
                  )}
                  Abmelden
                </Button>
              ) : null}
            </div>
          </DrawerHeader>
          <div className="max-w-screen-md w-full mx-auto p-4 lg:p-8">
            <UserContent session={session} />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function UserAvatar({
  session,
  isCollapsed,
  setOpen,
  isBottomNav,
}: {
  session: Session | null;
  isCollapsed: boolean;
  setOpen: (open: boolean) => void;
  isBottomNav?: boolean;
}) {
  if (isBottomNav) {
    return (
      <>
        {!session?.user?.email ? (
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="w-full"
          >
            <LogInIcon />
            Anmelden
          </Button>
        ) : (
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="w-full text-sm text-purple-700"
          >
            {session.user.project?.balance || 0} Token
            <ChevronsUpDown className="ml-auto size-4" />
          </Button>
        )}
      </>
    );
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {!session?.user?.email ? (
          <Button
            onClick={() => setOpen(true)}
            variant="default"
            className="w-full"
          >
            {isCollapsed ? (
              <>
                Anmelden
                <LogInIcon className="size-4" />
              </>
            ) : (
              <LogInIcon className="size-4" />
            )}
          </Button>
        ) : (
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            onClick={() => setOpen(true)}
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || ""}
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {session.user.project?.name || session.user.name}
              </span>
              <span className="truncate text-xs">
                {session.user.project?.balance || 0} Token verfügbar
              </span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function UserContent({ session }: { session: Session | null }) {
  const [signingIn, setSigningIn] = useState(false);
  const handleSignIn = async (provider: string) => {
    setSigningIn(true);
    try {
      await signIn(provider);
    } catch (error) {
      console.error(error);
    } finally {
      setSigningIn(false);
    }
  };
  if (!session?.user) {
    return (
      <div>
        <Button
          className="w-full"
          onClick={() => handleSignIn("github")}
          disabled={signingIn}
        >
          {signingIn ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            "Anmelden via GitHub"
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="p-4 rounded shadow-md">
        <p className="text-muted-foreground">
          Verfügbare Token für den aktuellen Monat
        </p>
        <p className="font-semibold text-purple-700 text-lg">
          {session.user.project?.balance || 0}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          * {TOKEN_PER_MONTH[session.user.project?.id ? "standard" : "free"]}{" "}
          Token pro Monat verfügbar, die im ersten Tag des nächsten Monats
          zurückgesetzt werden.
        </p>
      </div>
      <ApiKeyManager session={session} />
    </div>
  );
}
