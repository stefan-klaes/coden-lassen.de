export const runtime = "edge";

import { NextResponse } from "next/server";


export async function GET() {
    const test = process.env.SMTP_USER || "na"
    return NextResponse.json({ test })
}
