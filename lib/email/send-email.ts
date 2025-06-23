
export interface SendEmailParams {
  replyTo: string;
  replyToName: string;
  subject: string;
  text: string;
}

export async function sendEmail({ replyTo, replyToName, subject, text }: SendEmailParams): Promise<void> {

  const url = "https://services.coden-lassen.de/send-email"

  const payload: {
    subject: string;
    message: string;
    reply_to: string;
    reply_to_name: string;
  } = {
    subject,
    message: text,
    reply_to: replyTo,
    reply_to_name: replyToName
  }

  try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-api-key': process.env.CODEN_LASSEN_SERVICES_API_KEY!,
        },
        cache: "no-store",
        body: JSON.stringify(payload),
      });

      console.log({status: response.status, statusText: response.statusText})
    
      if (!response.ok) {
        const errorText = await response.text();
        console.log({errorText})
        throw new Error(errorText || "unknown error");
      }

      const data = await response.json();
      console.log(data)
      return data;

  } catch (error) {
    console.log(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`)
    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
  }
}
