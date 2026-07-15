"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions/staticforms";

type Status = "idle" | "submitting" | "success" | "error";

const areas = [
  "Financial Operations",
  "Process Design & SOPs",
  "Workflow Automation",
  "Vendor & Procurement Management",
  "HR & People Ops Foundations",
  "Systems & Tooling Strategy",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  function validate(formData: FormData) {
    const next: Record<string, string> = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (phone && !/^[+]?[\d\s().-]{7,20}$/.test(phone))
      next.phone = "Please enter a valid phone number.";
    if (message.length < 10)
      next.message = "Tell us a little more (10+ characters).";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validation = validate(formData);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    const result = await submitContactForm(formData);

    if (result.success) {
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
          Message sent.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-300">
          Thanks for reaching out — a member of our team will get back to you
          within one business day.
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
          label="Work email"
          name="email"
          type="email"
          placeholder="jordan@yourcompany.com"
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="Company"
          name="company"
          type="text"
          placeholder="Your business name"
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          placeholder="(312) 555-0148"
          error={errors.phone}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-300"
        >
          Interested in
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full border-b border-charcoal-500 bg-transparent px-1 py-3 text-sm text-ink-100 outline-none transition-colors focus:border-emerald-500"
        >
          <option value="" disabled>
            Select an area
          </option>
          {areas.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-300"
        >
          What&apos;s going on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what's breaking, what's slow, or what you wish just ran itself..."
          className="w-full resize-none border-b border-charcoal-500 bg-transparent px-1 py-3 text-sm text-ink-100 placeholder:text-ink-400 outline-none transition-colors focus:border-emerald-500"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-xs text-red-400"
            >
              {errors.message}
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
        disabled={status === "submitting"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-medium text-charcoal-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-charcoal-950/30 border-t-charcoal-950" />
            Sending...
          </>
        ) : (
          <>
            {status === "error" ? "Try again" : "Send message"}
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
