"use server";

import { US_STATES, type InterviewFormValues } from "@/lib/validation/interview-schema";
import { INTERVIEW_QUESTION_BANK } from "@/lib/interviewQuestions";
import { openRoles } from "@/lib/data";
import { recordSubmissionFailure, recordSubmissionSuccess } from "@/lib/formHealth";

const STATICFORMS_ENDPOINT = "https://api.staticforms.dev/submit";

type SubmitResult = { success: true } | { success: false; error: string };

async function submitWithKey(
  payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
    replyTo?: string;
  },
  apiKey: string
): Promise<SubmitResult> {
  try {
    const res = await fetch(STATICFORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey, ...payload }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.success) {
      return {
        success: false,
        error:
          data?.error ||
          "Something went wrong sending your message. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Network error — please check your connection and try again.",
    };
  }
}

// Keys are tried in order — once a key's staticforms.dev submission quota
// (500/mo on the free plan) is exhausted, its requests start failing, so we
// fall through to the next key rather than dropping submissions.
async function submitToStaticForms(
  payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
    replyTo?: string;
  },
  apiKeys: Array<string | undefined> = [process.env.STATICFORMS_ACCESS_KEY]
): Promise<SubmitResult> {
  const keys = apiKeys.filter((key): key is string => Boolean(key));

  if (keys.length === 0) {
    return { success: false, error: "Form submission isn't configured yet." };
  }

  let lastResult: SubmitResult = { success: false, error: "" };
  for (const key of keys) {
    lastResult = await submitWithKey(payload, key);
    if (lastResult.success) return lastResult;
  }
  return lastResult;
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

  const result = await submitToStaticForms(
    {
      name,
      email,
      subject: `New contact form submission from ${name || "website visitor"}`,
      message: lines.join("\n"),
      replyTo: email,
    },
    [process.env.STATICFORMS_ACCESS_KEY, process.env.STATICFORMS_ACCESS_KEY_FALLBACK]
  );
  if (result.success) recordSubmissionSuccess();
  else {
    console.error(`[formSubmissions] Contact form failed: ${result.error}`);
    recordSubmissionFailure();
  }
  return result;
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

  const result = await submitToStaticForms(
    {
      name: data.fullName,
      email: data.email,
      subject: `New interview submission: ${data.fullName} (${positionLabel})`,
      message: [header, answers].join("\n\n"),
      replyTo: data.email,
    },
    [
      process.env.STATICFORMS_INTERVIEW_ACCESS_KEY,
      process.env.STATICFORMS_ACCESS_KEY_FALLBACK,
    ]
  );
  if (result.success) recordSubmissionSuccess();
  else {
    console.error(`[formSubmissions] Interview (${positionLabel}) failed: ${result.error}`);
    recordSubmissionFailure();
  }
  return result;
}
