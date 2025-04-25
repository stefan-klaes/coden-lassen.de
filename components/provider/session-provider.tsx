"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

const SessionContext = createContext<{
  session: Session | null;
  refetchSession: () => Promise<void>;
}>({
  session: null,
  refetchSession: async () => {},
});

export function useSession() {
  return useContext(SessionContext);
}

type SessionProviderProps = {
  children: ReactNode;
};

export function SessionProvider({ children }: SessionProviderProps) {
  const pathname = usePathname();
  const [session, setSession] = useState<Session | null>(null);

  const fetchSession = async () => {
    try {
      const res = await fetch("/api/user/me");
      if (res.ok) {
        const data = await res.json() as {
          session: Session | null;
          bearerToken: string | null;
        }
        const bearerToken = data.bearerToken;
        if (bearerToken) {
          localStorage.setItem("sclbrrtkn", bearerToken);
        } else {
          localStorage.removeItem("sclbrrtkn");
        }
        setSession(data?.session || null);
      } else {
        setSession(null);
      }
    } catch {
      setSession(null);
    }
  };

  useEffect(() => {
    if (pathname.startsWith("/tools")) {
      fetchSession();
    }
  }, []);

  return (
    <SessionContext.Provider value={{ session, refetchSession: fetchSession }}>
      {children}
    </SessionContext.Provider>
  );
}
