"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { openRoles } from "@/lib/data";
import { submitApplication } from "@/app/actions/staticforms";
import { APPLY_HANDOFF_KEY, type ApplyHandoffPayload } from "@/lib/applyHandoff";
import { GENERAL_APPLICATION_KEY, hasAlreadyApplied, markApplied } from "@/lib/appliedGuard";

const REDIRECT_DELAY = 1500;

type Status = "idle" | "submitting" | "success" | "error";

function positionKeyForRole(role: string): string {
  if (role === "General application") return GENERAL_APPLICATION_KEY;
  return openRoles.find((r) => r.title === role)?.slug ?? role;
}

export default function ApplyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectTarget, setRedirectTarget] = useState("/interview");
  const [selectedRole, setSelectedRole] = useState(roleParam ?? "");
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  useEffect(() => {
    if (status !== "success") return;
    const timeout = setTimeout(() => router.push(redirectTarget), REDIRECT_DELAY);
    return () => clearTimeout(timeout);
  }, [status, redirectTarget, router]);

  // Reads localStorage after mount (not during render) to avoid a
  // server/client hydration mismatch on the initial paint.
  useEffect(() => {
    setAlreadyApplied(selectedRole ? hasAlreadyApplied(positionKeyForRole(selectedRole)) : false);
  }, [selectedRole]);

  function validate(formData: FormData) {
    const next: Record<string, string> = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const pitch = String(formData.get("pitch") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (phone && !/^[+]?[\d\s().-]{7,20}$/.test(phone))
      next.phone = "Please enter a valid phone number.";
    if (!role) next.role = "Please select a role.";
    else if (hasAlreadyApplied(positionKeyForRole(role)))
      next.role = "You've already applied for this position from this browser.";
    if (pitch.length < 10)
      next.pitch = "Tell us a little more (10+ characters).";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validation = validate(formData);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    const result = await submitApplication(formData);

    if (result.success) {
      const role = String(formData.get("role") || "").trim();
      const matchedSlug = openRoles.find((r) => r.title === role)?.slug;

      markApplied(positionKeyForRole(role));

      const payload: ApplyHandoffPayload = {
        fullName: String(formData.get("name") || "").trim() || undefined,
        email: String(formData.get("email") || "").trim() || undefined,
        phone: String(formData.get("phone") || "").trim() || undefined,
        resumeUrl: String(formData.get("resume") || "").trim() || undefined,
      };
      window.sessionStorage.setItem(APPLY_HANDOFF_KEY, JSON.stringify(payload));

      setRedirectTarget(matchedSlug ? `/interview?position=${matchedSlug}` : "/interview");
      setStatus("success");
    } else {
      setErrorMessage(result.error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-2xl text-emerald-300">
          ✓
        </span>
        <h3 className="mt-6 font-display text-2xl italic text-ink-100">
          Application received.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-300">
          Thanks for applying — our team reviews every application and will
          follow up within five business days.
        </p>
        <p className="mt-4 max-w-sm text-sm text-emerald-300">
          Taking you to the online interview now — please complete it to move
          your application forward.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          type="text"
          placeholder="Jordan Alvarez"
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jordan@email.com"
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          placeholder="(312) 555-0148"
          error={errors.phone}
        />
        <Field
          label="LinkedIn / portfolio (optional)"
          name="link"
          type="text"
          placeholder="linkedin.com/in/you"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-300"
        >
          Role you&apos;re applying for
        </label>
        <select
          id="role"
          name="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full border-b border-charcoal-500 bg-transparent px-1 py-3 text-sm text-ink-100 outline-none transition-colors focus:border-emerald-500"
        >
          <option value="" disabled>
            Select a role
          </option>
          {openRoles.map((r) => (
            <option key={r.title} value={r.title}>
              {r.title}
            </option>
          ))}
          <option value="General application">General application</option>
        </select>
        <AnimatePresence>
          {errors.role ? (
            <motion.p
              key="error"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-xs text-red-400"
            >
              {errors.role}
            </motion.p>
          ) : (
            alreadyApplied && (
              <motion.p
                key="already-applied"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-xs text-amber-400"
              >
                You&apos;ve already applied for this position from this browser. If
                you believe this is a mistake, please{" "}
                <a href="/contact" className="underline hover:text-amber-300">
                  contact us
                </a>{" "}
                at{" "}
                <a
                  href="mailto:hr@latch-work.com"
                  className="underline hover:text-amber-300"
                >
                  hr@latch-work.com
                </a>
                .
              </motion.p>
            )
          )}
        </AnimatePresence>
      </div>

      <div>
        <Field
          label="Resume link (optional)"
          name="resume"
          type="text"
          placeholder="Link to your resume"
        />
      </div>

      <div>
        <label
          htmlFor="pitch"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-300"
        >
          Why you&apos;re a fit
        </label>
        <textarea
          id="pitch"
          name="pitch"
          rows={5}
          placeholder="Tell us about your background and why this role interests you..."
          className="w-full resize-none border-b border-charcoal-500 bg-transparent px-1 py-3 text-sm text-ink-100 placeholder:text-ink-400 outline-none transition-colors focus:border-emerald-500"
        />
        <AnimatePresence>
          {errors.pitch && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-xs text-red-400"
            >
              {errors.pitch}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300">
              <span className="mt-0.5">⚠</span>
              <span>{errorMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting" || alreadyApplied}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-medium text-charcoal-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-charcoal-950/30 border-t-charcoal-950" />
            Submitting...
          </>
        ) : (
          <>
            {status === "error" ? "Try again" : "Submit application"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-charcoal-500 bg-transparent px-1 py-3 text-sm text-ink-100 placeholder:text-ink-400 outline-none transition-colors focus:border-emerald-500"
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
