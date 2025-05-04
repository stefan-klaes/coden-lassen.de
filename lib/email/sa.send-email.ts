'use server';

import { sendEmail, SendEmailParams } from "./send-email";

export default async function SA_sendEmail(params: SendEmailParams) {
  try {
    await sendEmail(params);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
