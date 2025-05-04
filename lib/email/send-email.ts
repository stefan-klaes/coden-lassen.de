import nodemailer from 'nodemailer';

export interface SendEmailParams {
  replyTo: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail({ replyTo, subject, text, html }: SendEmailParams): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `coden-lassen.de <${process.env.SMTP_USER}>`,
      replyTo,
      to: process.env.SMTP_USER,
      subject,
      text,
      html,
    });
  } catch (error) {
    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
  }
}
