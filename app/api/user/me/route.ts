export const runtime = "edge";

import { auth } from "@/lib/auth";
import { createBearerToken } from "@/lib/auth/create-bearer-token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await auth();
  let bearerToken: string | null = null;
  if (session?.user?.email) {
    const email = session.user.email;
    const projectId = session.user.project?.id || 0;

    bearerToken = await createBearerToken({
      email,
      projectId,
    });
  } else {
    // create bearer token with users IP address
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "";
    if (ip) {
      bearerToken = await createBearerToken({
        email: `IP__${ip}`,
        projectId: 0,
      });
    }
  }

  return NextResponse.json({
    session,
    bearerToken,
  });
}