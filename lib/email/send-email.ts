import nodemailer from "nodemailer";

export interface SendEmailParams {
  replyTo: string;
  replyToName: string;
  subject: string;
  text: string;
}

export async function sendEmail({
  replyTo,
  replyToName,
  subject,
  text,
}: SendEmailParams): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailResult = await transporter.sendMail({
      from: `"${replyToName}" <${replyTo}>`,
      to: "stefan@coden-lassen.de",
      subject,
      text,
    });

    if (!emailResult.messageId) {
      console.error("No Message ID", emailResult);
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Failed to send email", error);
    throw new Error("Failed to send email");
  }
}
