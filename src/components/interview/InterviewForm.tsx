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
  INTERVIEW_QUESTIONS,
  interviewSchema,
  type InterviewFormValues,
} from "@/lib/validation/interview-schema";

const DRAFT_KEY = "latchwork-interview-draft";
const AUTOSAVE_DELAY = 600;

type QuestionId = (typeof INTERVIEW_QUESTIONS)[number]["id"];

const questionDefaults = Object.fromEntries(
  INTERVIEW_QUESTIONS.map((question) => [question.id, ""])
) as { [K in QuestionId]: string };

const defaultValues: InterviewFormValues = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  state: "" as InterviewFormValues["state"],
  resumeUrl: "",
  workAuthorized: undefined as unknown as InterviewFormValues["workAuthorized"],
  certified: false,
  ...questionDefaults,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function InterviewForm() {
  const methods = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema),
    defaultValues,
  });

  const { handleSubmit, reset, watch } = methods;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hydrated = useRef(false);
  const saveTimeout = useRef<ReturnType<typeof setTimeout>>();

  // Restore an in-progress draft from localStorage, if one exists.
  useEffect(() => {
    const saved = window.localStorage.getItem(DRAFT_KEY);
    if (saved) {
      try {
        reset(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem(DRAFT_KEY);
      }
    }
    hydrated.current = true;
  }, [reset]);

  // Debounced autosave of the full form state on every change.
  useEffect(() => {
    const subscription = watch((values) => {
      if (!hydrated.current) return;
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(() => {
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
      }, AUTOSAVE_DELAY);
    });
    return () => {
      subscription.unsubscribe();
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
  }, [watch]);

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
          data?.error || "Something went wrong submitting your interview. Please try again."
        );
        setStatus("error");
        return;
      }

      window.localStorage.removeItem(DRAFT_KEY);
      setStatus("success");
    } catch {
      setErrorMessage("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  function onInvalid(formErrors: FieldErrors<InterviewFormValues>) {
    const firstInvalidQuestion = INTERVIEW_QUESTIONS.findIndex(
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
            </form>
          </FormProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
