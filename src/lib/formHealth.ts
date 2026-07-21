// In-memory circuit breaker for the application/interview submission backend.
// If real submission attempts (not user validation errors) fail repeatedly in
// a short window, take /apply and /interview down automatically rather than
// silently dropping more applications the way the earlier incident did.
// Trips for a cooldown, then automatically retries — no manual redeploy needed.
//
// Assumes a single long-running Node process, which holds for this app's
// Railway deployment. State resets on restart/redeploy — that's fine, a fresh
// process deserves a clean retry rather than staying stuck down.

const FAILURE_THRESHOLD = 2;
const WINDOW_MS = 5 * 60 * 1000;
const COOLDOWN_MS = 4 * 60 * 60 * 1000;

let recentFailures: number[] = [];
let trippedUntil: number | null = null;

export function recordSubmissionFailure() {
  const now = Date.now();
  recentFailures = recentFailures.filter((t) => now - t < WINDOW_MS);
  recentFailures.push(now);
  console.error(
    `[formHealth] submission failure ${recentFailures.length}/${FAILURE_THRESHOLD} in the last ${WINDOW_MS / 60000} min`
  );
  if (recentFailures.length >= FAILURE_THRESHOLD) {
    trippedUntil = now + COOLDOWN_MS;
    console.error(
      `[formHealth] circuit breaker TRIPPED — /apply and /interview will show the maintenance notice until ${new Date(trippedUntil).toISOString()}`
    );
  }
}

export function recordSubmissionSuccess() {
  recentFailures = [];
}

export function isAutoMaintenanceActive(): boolean {
  if (trippedUntil === null) return false;
  if (Date.now() < trippedUntil) return true;
  console.log("[formHealth] circuit breaker reset — forms back online");
  trippedUntil = null;
  recentFailures = [];
  return false;
}
