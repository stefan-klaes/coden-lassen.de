"use client";

import { useSession } from "@/components/provider/session-provider";

export default function UserData() {
  const { session } = useSession();

  return (
    <div>
      <h2 className="text-xl font-bold">User Data</h2>
      <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
