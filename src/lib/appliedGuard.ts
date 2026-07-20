// Soft, browser-only guard against re-applying for the same position twice.
// This is NOT a real enforcement mechanism — it only stops accidental
// double-submits and repeat visits from the same browser. It's trivially
// bypassed by clearing storage, incognito, or a different browser/device.
const APPLIED_KEY_PREFIX = "latchwork-applied-";

export const GENERAL_APPLICATION_KEY = "general-application";

export function hasAlreadyApplied(positionKey: string): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(`${APPLIED_KEY_PREFIX}${positionKey}`) !== null;
}

export function markApplied(positionKey: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(`${APPLIED_KEY_PREFIX}${positionKey}`, new Date().toISOString());
}
