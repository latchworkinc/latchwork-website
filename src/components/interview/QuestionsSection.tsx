"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import Card from "@/components/ui/Card";
import TextArea from "@/components/ui/TextArea";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import {
  INTERVIEW_QUESTIONS,
  type InterviewFormValues,
} from "@/lib/validation/interview-schema";

const TOTAL = INTERVIEW_QUESTIONS.length;

type QuestionsSectionProps = {
  currentIndex: number;
  onIndexChange: (index: number) => void;
};

export default function QuestionsSection({
  currentIndex,
  onIndexChange,
}: QuestionsSectionProps) {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext<InterviewFormValues>();

  const question = INTERVIEW_QUESTIONS[currentIndex];
  const fieldName = question.id as keyof InterviewFormValues;
  const answer = watch(fieldName) as string | undefined;
  const charCount = answer?.length ?? 0;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === TOTAL - 1;
  const progress = ((currentIndex + 1) / TOTAL) * 100;

  async function handleNext() {
    const valid = await trigger(fieldName);
    if (!valid) return;
    if (!isLast) onIndexChange(currentIndex + 1);
  }

  function handleBack() {
    if (!isFirst) onIndexChange(currentIndex - 1);
  }

  return (
    <Card>
      <div>
        <div className="flex items-center justify-between text-xs font-medium text-white/50">
          <span aria-live="polite">
            Question {currentIndex + 1} of {TOTAL}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-interview-accent"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="relative mt-8 min-h-[300px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <FormField
              label={question.label}
              required={!isLast}
              error={errors[fieldName]?.message as string | undefined}
            >
              <TextArea
                rows={8}
                placeholder="Type your answer here..."
                {...register(fieldName)}
              />
            </FormField>
            <p className="mt-2 text-right text-xs text-white/40" aria-live="polite">
              {charCount} character{charCount === 1 ? "" : "s"}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <Button type="button" variant="secondary" onClick={handleBack} disabled={isFirst}>
          Back
        </Button>
        {!isLast && (
          <Button type="button" variant="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </Card>
  );
}
