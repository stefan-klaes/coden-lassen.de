export const runtime = "edge";

import { auth } from "@/lib/auth";
import { createBearerToken } from "@/lib/auth/create-bearer-token";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  let bearerToken: string | null = null;
  if (session?.user?.email) {
    const email = session.user.email;
    const projectId = session.user.project?.id || 0;

    bearerToken = createBearerToken({
      email,
      projectId,
    });
  }

  return NextResponse.json({
    ...session,
    bearerToken,
  });
}
