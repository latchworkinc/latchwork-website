import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailResult = { ok: true } | { ok: false; error: string };

export async function sendNotificationEmail(params: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<EmailResult> {
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Latchwork Consulting <noreply@latch-work.com>",
      to: process.env.RESEND_TO_EMAIL || "hello@latch-work.com",
      replyTo: params.replyTo,
      subject: params.subject,
      text: params.text,
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error sending email — please try again.",
    };
  }
}
