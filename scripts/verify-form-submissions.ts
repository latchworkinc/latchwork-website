import { config } from "dotenv";
config({ path: ".env.local" });

import { appendToSheet } from "../src/lib/googleSheets";
import { sendNotificationEmail } from "../src/lib/resend";

async function main() {
  const stamp = new Date().toISOString();

  console.log(
    "Resend:",
    await sendNotificationEmail({
      subject: `[TEST] Form pipeline check ${stamp}`,
      text: "Dry run from scripts/verify-form-submissions.ts — safe to ignore.",
      replyTo: "test@example.com",
    })
  );

  for (const tab of ["Contact", "Applications", "Interviews"] as const) {
    console.log(
      `Sheets (${tab}):`,
      await appendToSheet(tab, [stamp, "TEST ROW — safe to delete", "verify-form-submissions.ts"])
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
