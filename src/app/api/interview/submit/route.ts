import { NextResponse } from "next/server";
import { interviewSchema } from "@/lib/validation/interview-schema";

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

  // TODO: persist result.data to the database and/or email the hiring team.

  return NextResponse.json({ success: true });
}
