// One-time sessionStorage handoff from the Apply form to the Interview page,
// carrying over the identity fields the two forms have in common.
export const APPLY_HANDOFF_KEY = "latchwork-apply-handoff";

export type ApplyHandoffPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  resumeUrl?: string;
};
