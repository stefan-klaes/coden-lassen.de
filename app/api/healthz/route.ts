import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "health check failed" }, { status: 500 });
  }
  return NextResponse.json({ status: "ok" });
}
