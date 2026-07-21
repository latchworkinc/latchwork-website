import { JWT } from "google-auth-library";

export type SheetTab = "Contact" | "Applications" | "Interviews";

type AppendResult = { ok: true } | { ok: false; error: string };

// Sheets/CSV formula-injection mitigation — a cell starting with one of
// these characters can execute as a formula when opened in a spreadsheet.
function sanitizeCell(value: string) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

export async function appendToSheet(tab: SheetTab, row: string[]): Promise<AppendResult> {
  try {
    // Instantiated lazily (not at module load) so this reads the service
    // account env vars whenever the env is actually populated.
    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const { token } = await auth.getAccessToken();
    const sheetId = process.env.GOOGLE_SHEET_ID;

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${tab}!A1:append?valueInputOption=RAW`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row.map(sanitizeCell)] }),
      }
    );

    if (!res.ok) {
      return { ok: false, error: `Sheets API responded ${res.status}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error appending to sheet." };
  }
}
