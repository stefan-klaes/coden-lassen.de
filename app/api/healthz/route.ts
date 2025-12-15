import { NextResponse } from "next/server";

export async function GET() {
  const test = process.env.SMTP_USER;
  if (!test) {
    return NextResponse.json({ error: "health check failed" }, { status: 500 });
  }
  return NextResponse.json({ status: "ok" });
}
