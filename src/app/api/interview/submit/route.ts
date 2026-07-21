import { NextResponse } from "next/server";
import { buildInterviewSchema } from "@/lib/validation/interview-schema";
import { INTERVIEW_QUESTION_BANK } from "@/lib/interviewQuestions";
import { submitInterview } from "@/app/actions/formSubmissions";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const questions = INTERVIEW_QUESTION_BANK[body?.position] ?? [];

  if (questions.length === 0) {
    return NextResponse.json(
      { success: false, error: "Please select a valid position." },
      { status: 422 }
    );
  }

  const result = buildInterviewSchema(questions).safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Some answers are missing or invalid.",
        issues: result.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const submission = await submitInterview(result.data);

  if (!submission.success) {
    return NextResponse.json(
      { success: false, error: submission.error },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
