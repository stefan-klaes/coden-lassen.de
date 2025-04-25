"use client"

import { useSession } from "@/components/provider/session-provider";
import { SparkleIcon } from "lucide-react";

export default function TokenBalance() {
  const { session } = useSession();
  const balance = session?.user?.project?.balance || 0;
  const isLoggedIn = !!session?.user?.email;
  return (
    <div
      className="text-purple-700 max-w-screen-md mx-auto flex items-center gap-4 px-4 py-2 rounded-full border bg-gradient-to-br from-purple-50 to-purple-100"
    >
        <SparkleIcon className="w-5 h-5" />
      <div className="flex-1">
        {!isLoggedIn ? (
          <span>
            Melde dich an oder nutze die freien Token.
          </span>
        ) : (
          <span>
            Du bist angemeldet und hast{' '}
            <span className="font-semibold">
              {balance} Token
            </span>{' '}
            zur Verfügung.
          </span>
        )}
      </div>
    </div>
  );
}


