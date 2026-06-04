import { Resend } from "resend";

export interface SendEmailParams {
  replyTo: string;
  replyToName: string;
  subject: string;
  text: string;
}

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendEmail({
  replyTo,
  replyToName,
  subject,
  text,
}: SendEmailParams): Promise<void> {
  const resend = getResendClient();
  const replyToAddress = replyToName
    ? `"${replyToName}" <${replyTo}>`
    : replyTo;

  const { data, error } = await resend.emails.send({
    from: "Kontaktformular <kontakt@coden-lassen.de>",
    to: ["stefan@coden-lassen.de"],
    replyTo: replyToAddress,
    subject,
    text,
  });

  if (error) {
    console.error("Failed to send email", error);
    throw new Error(error.message);
  }

  if (!data?.id) {
    throw new Error("Failed to send email");
  }
}
