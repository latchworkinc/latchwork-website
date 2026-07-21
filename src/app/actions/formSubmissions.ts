"use server";

import { US_STATES, type InterviewFormValues } from "@/lib/validation/interview-schema";
import { INTERVIEW_QUESTION_BANK } from "@/lib/interviewQuestions";
import { openRoles } from "@/lib/data";
import { recordSubmissionFailure, recordSubmissionSuccess } from "@/lib/formHealth";
import { sendNotificationEmail } from "@/lib/resend";
import { appendToSheet } from "@/lib/googleSheets";

type SubmitResult = { success: true } | { success: false; error: string };

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

  const [emailResult, sheetResult] = await Promise.allSettled([
    sendNotificationEmail({ subject, text: lines.join("\n"), replyTo: email }),
    appendToSheet("Contact", [
      new Date().toISOString(),
      name,
      email,
      company,
      phone,
      service,
      message,
    ]),
  ]);

  const emailOutcome =
    emailResult.status === "fulfilled"
      ? emailResult.value
      : { ok: false as const, error: "Email send threw." };

  if (!emailOutcome.ok) {
    console.error(`[formSubmissions] Contact form failed: ${emailOutcome.error}`);
    recordSubmissionFailure();
    return { success: false, error: emailOutcome.error };
  }
  recordSubmissionSuccess();

  const sheetOutcome =
    sheetResult.status === "fulfilled"
      ? sheetResult.value
      : { ok: false as const, error: "Sheet append threw." };

  if (!sheetOutcome.ok) {
    console.error(`[formSubmissions] Contact sheet backup failed: ${sheetOutcome.error}`);
    await sendNotificationEmail({
      subject: "⚠️ Backup sheet write failed for a recent submission",
      text: `The email above sent fine, but the Google Sheets backup row failed:\n${sheetOutcome.error}\n\nOriginal subject: ${subject}`,
    });
  }

  return { success: true };
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

  const [emailResult, sheetResult] = await Promise.allSettled([
    sendNotificationEmail({
      subject,
      text: [header, answers].join("\n\n"),
      replyTo: data.email,
    }),
    appendToSheet("Interviews", [
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
  ]);

  const emailOutcome =
    emailResult.status === "fulfilled"
      ? emailResult.value
      : { ok: false as const, error: "Email send threw." };

  if (!emailOutcome.ok) {
    console.error(`[formSubmissions] Interview (${positionLabel}) failed: ${emailOutcome.error}`);
    recordSubmissionFailure();
    return { success: false, error: emailOutcome.error };
  }
  recordSubmissionSuccess();

  const sheetOutcome =
    sheetResult.status === "fulfilled"
      ? sheetResult.value
      : { ok: false as const, error: "Sheet append threw." };

  if (!sheetOutcome.ok) {
    console.error(`[formSubmissions] Interview sheet backup failed: ${sheetOutcome.error}`);
    await sendNotificationEmail({
      subject: "⚠️ Backup sheet write failed for a recent submission",
      text: `The email above sent fine, but the Google Sheets backup row failed:\n${sheetOutcome.error}\n\nOriginal subject: ${subject}`,
    });
  }

  return { success: true };
}
