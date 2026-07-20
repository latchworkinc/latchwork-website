"use client";

import { useEffect, useRef, useState } from "react";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import ApplicantInfoSection from "./ApplicantInfoSection";
import QuestionsSection from "./QuestionsSection";
import CertificationSection from "./CertificationSection";
import SuccessScreen from "./SuccessScreen";
import Button from "@/components/ui/Button";
import {
  buildInterviewSchema,
  type InterviewFormValues,
} from "@/lib/validation/interview-schema";
import { INTERVIEW_QUESTION_BANK } from "@/lib/interviewQuestions";
import type { ApplyHandoffPayload } from "@/lib/applyHandoff";

const DRAFT_KEY_PREFIX = "latchwork-interview-draft-";
const AUTOSAVE_DELAY = 600;

const APPLICANT_DEFAULTS = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  resumeUrl: "",
  workAuthorized: undefined,
  certified: false,
};

function hasAnyContent(values: Record<string, unknown>) {
  return Object.entries(values).some(([key, value]) => {
    if (key === "position") return false;
    if (typeof value === "string") return value.trim() !== "";
    if (typeof value === "boolean") return value;
    return Boolean(value);
  });
}

type Status = "idle" | "submitting" | "success" | "error";

type InterviewFormProps = {
  position: { slug: string; title: string };
  prefill?: ApplyHandoffPayload;
  onDirtyChange?: (hasContent: boolean) => void;
};

export default function InterviewForm({ position, prefill, onDirtyChange }: InterviewFormProps) {
  const questions = INTERVIEW_QUESTION_BANK[position.slug] ?? [];
  const draftKey = `${DRAFT_KEY_PREFIX}${position.slug}`;

  const defaultValues = {
    ...APPLICANT_DEFAULTS,
    ...prefill,
    position: position.slug,
    ...Object.fromEntries(questions.map((question) => [question.id, ""])),
  } as unknown as InterviewFormValues;

  const methods = useForm<InterviewFormValues>({
    resolver: zodResolver(buildInterviewSchema(questions)),
    defaultValues,
  });

  const { handleSubmit, reset, watch } = methods;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hydrated = useRef(false);
  const saveTimeout = useRef<ReturnType<typeof setTimeout>>();

  // Restore an in-progress draft from localStorage, if one exists for this position.
  useEffect(() => {
    const saved = window.localStorage.getItem(draftKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        reset(parsed);
        onDirtyChange?.(hasAnyContent(parsed));
      } catch {
        window.localStorage.removeItem(draftKey);
      }
    }
    hydrated.current = true;
    // Only run once per mount — this form remounts (via key) on position change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced autosave of the full form state on every change.
  useEffect(() => {
    const subscription = watch((values) => {
      if (!hydrated.current) return;
      onDirtyChange?.(hasAnyContent(values as Record<string, unknown>));
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(() => {
        window.localStorage.setItem(draftKey, JSON.stringify(values));
      }, AUTOSAVE_DELAY);
    });
    return () => {
      subscription.unsubscribe();
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
  }, [watch, draftKey, onDirtyChange]);

  async function onValid(values: InterviewFormValues) {
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/interview/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setErrorMessage(
          data?.error ||
            "Something went wrong submitting your interview. Please try again, or email hello@latch-work.com if it keeps happening."
        );
        setStatus("error");
        return;
      }

      window.localStorage.removeItem(draftKey);
      onDirtyChange?.(false);
      setStatus("success");
    } catch {
      setErrorMessage(
        "Network error — please check your connection and try again, or email hello@latch-work.com if it keeps happening."
      );
      setStatus("error");
    }
  }

  function onInvalid(formErrors: FieldErrors<InterviewFormValues>) {
    const firstInvalidQuestion = questions.findIndex(
      (question) => formErrors[question.id as keyof InterviewFormValues]
    );
    if (firstInvalidQuestion !== -1) {
      setQuestionIndex(firstInvalidQuestion);
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <SuccessScreen key="success" />
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FormProvider {...methods}>
            <form
              noValidate
              onSubmit={handleSubmit(onValid, onInvalid)}
              className="flex flex-col gap-8"
            >
              <ApplicantInfoSection />
              <QuestionsSection
                questions={questions}
                currentIndex={questionIndex}
                onIndexChange={setQuestionIndex}
              />
              <CertificationSection />

              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300"
                    >
                      <span className="mt-0.5">⚠</span>
                      <span>{errorMessage}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                variant="primary"
                loading={status === "submitting"}
                className="w-full py-4 text-base sm:w-auto sm:self-start"
              >
                {status === "submitting" ? "Submitting..." : "Submit Interview"}
              </Button>

              <p className="text-xs text-white/40">
                Didn&apos;t get a confirmation, or think this didn&apos;t go through?
                Email{" "}
                <a
                  href="mailto:hello@latch-work.com"
                  className="underline hover:text-white/60"
                >
                  hello@latch-work.com
                </a>{" "}
                or try submitting again.
              </p>
            </form>
          </FormProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
