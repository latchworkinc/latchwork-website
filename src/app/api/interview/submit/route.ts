import { NextResponse } from "next/server";
import { interviewSchema } from "@/lib/validation/interview-schema";
import { submitInterview } from "@/app/actions/staticforms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const result = interviewSchema.safeParse(body);

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
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
