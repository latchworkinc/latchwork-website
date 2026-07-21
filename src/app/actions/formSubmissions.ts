"use server";

import { US_STATES, type InterviewFormValues } from "@/lib/validation/interview-schema";
import { INTERVIEW_QUESTION_BANK } from "@/lib/interviewQuestions";
import { openRoles } from "@/lib/data";
import { recordSubmissionFailure, recordSubmissionSuccess } from "@/lib/formHealth";
import { sendNotificationEmail } from "@/lib/resend";
import { appendToSheet } from "@/lib/googleSheets";

type SubmitResult = { success: true } | { success: false; error: string };
type ChannelResult = { ok: true } | { ok: false; error: string };

// A submission only counts as lost if BOTH channels fail — e.g. if Resend's
// daily send cap is hit, the Sheets row still captures it, so we don't want
// to tell the candidate their submission failed (or trip the maintenance
// circuit breaker) when we actually have a record of it.
async function deliverSubmission(params: {
  emailTask: Promise<ChannelResult>;
  sheetTask: Promise<ChannelResult>;
  subject: string;
}): Promise<SubmitResult> {
  const [emailResult, sheetResult] = await Promise.allSettled([
    params.emailTask,
    params.sheetTask,
  ]);

  const email: ChannelResult =
    emailResult.status === "fulfilled"
      ? emailResult.value
      : { ok: false, error: "Email send threw." };
  const sheet: ChannelResult =
    sheetResult.status === "fulfilled"
      ? sheetResult.value
      : { ok: false, error: "Sheet append threw." };

  if (!email.ok && !sheet.ok) {
    console.error(
      `[formSubmissions] Both channels failed for "${params.subject}": email=${email.error} sheet=${sheet.error}`
    );
    recordSubmissionFailure();
    return { success: false, error: email.error };
  }

  recordSubmissionSuccess();

  if (!email.ok) {
    // Sheet succeeded, so the submission is safely recorded — but we can't
    // email an alert since email itself is what's broken. Logs only.
    console.error(
      `[formSubmissions] Email failed but sheet backup succeeded for "${params.subject}": ${email.error}`
    );
  } else if (!sheet.ok) {
    console.error(`[formSubmissions] Sheet backup failed for "${params.subject}": ${sheet.error}`);
    await sendNotificationEmail({
      subject: "⚠️ Backup sheet write failed for a recent submission",
      text: `The email above sent fine, but the Google Sheets backup row failed:\n${sheet.error}\n\nOriginal subject: ${params.subject}`,
    });
  }

  return { success: true };
}

export async function submitContactForm(
  formData: FormData
): Promise<SubmitResult> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    phone && `Phone: ${phone}`,
    service && `Interested in: ${service}`,
    "",
    message,
  ].filter((line): line is string => Boolean(line) || line === "");

  const subject = `New contact form submission from ${name || "website visitor"}`;

  return deliverSubmission({
    emailTask: sendNotificationEmail({ subject, text: lines.join("\n"), replyTo: email }),
    sheetTask: appendToSheet("Contact", [
      new Date().toISOString(),
      name,
      email,
      company,
      phone,
      service,
      message,
    ]),
    subject,
  });
}

export async function submitInterview(
  data: InterviewFormValues
): Promise<SubmitResult> {
  const stateLabel =
    US_STATES.find((state) => state.value === data.state)?.label ?? data.state;

  const role = openRoles.find((r) => r.slug === data.position);
  const positionLabel = role?.title ?? data.position;
  const questions = INTERVIEW_QUESTION_BANK[data.position] ?? [];

  const header = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Location: ${data.city}, ${stateLabel}`,
    data.resumeUrl && `Resume: ${data.resumeUrl}`,
    `Authorized to work in the US: ${data.workAuthorized === "yes" ? "Yes" : "No"}`,
    `Position: ${positionLabel}`,
  ]
    .filter(Boolean)
    .join("\n");

  const answers = questions
    .map((question, index) => {
      const answer = data[question.id] as string | undefined;
      return `${index + 1}. ${question.label}\n${answer || "(no answer)"}`;
    })
    .join("\n\n");

  const subject = `New interview submission: ${data.fullName} (${positionLabel})`;

  return deliverSubmission({
    emailTask: sendNotificationEmail({
      subject,
      text: [header, answers].join("\n\n"),
      replyTo: data.email,
    }),
    sheetTask: appendToSheet("Interviews", [
      new Date().toISOString(),
      data.fullName,
      data.email,
      data.phone,
      data.city,
      stateLabel,
      data.resumeUrl || "",
      data.workAuthorized === "yes" ? "Yes" : "No",
      data.position,
      positionLabel,
      answers,
    ]),
    subject,
  });
}
