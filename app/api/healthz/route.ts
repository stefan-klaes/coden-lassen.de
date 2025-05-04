export const runtime = "edge";

import { NextResponse } from "next/server";


export default async function GET(_req: Request) {
    const test = process.env.SMTP_USER || "na"
    return NextResponse.json({ test })
}
