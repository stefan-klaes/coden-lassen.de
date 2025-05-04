export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/send-email";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.replyTo || !data.subject || (!data.text && !data.html)) {
      return NextResponse.json({ success: false, error: "Missing required fields." });
    }

    await sendEmail({
      replyTo: data.replyTo,
      subject: data.subject,
      text: data.text,
      html: data.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
