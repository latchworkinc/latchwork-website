import { Resend } from "resend";

type EmailResult = { ok: true } | { ok: false; error: string };

export async function sendNotificationEmail(params: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<EmailResult> {
  try {
    // Instantiated lazily (not at module load) so this reads RESEND_API_KEY
    // whenever the env is actually populated, not whatever it was at import time.
    const resend = new Resend(process.env.RESEND_API_KEY);
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
