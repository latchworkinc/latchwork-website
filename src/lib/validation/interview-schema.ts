import { z } from "zod";
import type { InterviewQuestion } from "@/lib/interviewQuestions";

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
] as const;

const US_STATE_VALUES = US_STATES.map((s) => s.value) as [string, ...string[]];

export const applicantInfoSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: z.string().trim().min(1, "Phone number is required."),
  city: z.string().trim().min(1, "City is required."),
  state: z.enum(US_STATE_VALUES, {
    error: () => "Please select your state.",
  }),
  resumeUrl: z
    .string()
    .trim()
    .url("Enter a valid URL, starting with http:// or https://.")
    .optional()
    .or(z.literal("")),
  workAuthorized: z.enum(["yes", "no"], {
    error: () => "Please select an option.",
  }),
});

const QUESTION_MIN_LENGTH = 20;

export const positionSchema = z.object({
  position: z.string().trim().min(1, "Please select a position."),
});

// Builds the question-answer shape for a given position's question set. The
// last question in any set is treated as the optional "anything else" wrap-up.
export function buildQuestionsSchema(questions: InterviewQuestion[]) {
  const shape = questions.reduce((acc, question, index) => {
    const isLast = index === questions.length - 1;
    acc[question.id] = isLast
      ? z.string().trim()
      : z
          .string()
          .trim()
          .min(
            QUESTION_MIN_LENGTH,
            `Please provide a more detailed answer (at least ${QUESTION_MIN_LENGTH} characters).`
          );
    return acc;
  }, {} as Record<string, z.ZodString>);

  return z.object(shape);
}

export const certificationSchema = z.object({
  certified: z.boolean().refine((value) => value === true, {
    message: "You must certify your responses before submitting.",
  }),
});

export type ApplicantInfoValues = z.infer<typeof applicantInfoSchema>;
export type CertificationValues = z.infer<typeof certificationSchema>;

// The question-answer fields vary per position (different ids/counts), so
// they're typed loosely here rather than threading a schema-specific generic
// through every consuming component.
export type InterviewFormValues = ApplicantInfoValues &
  CertificationValues & {
    position: string;
    [key: string]: unknown;
  };

export function buildInterviewSchema(questions: InterviewQuestion[]) {
  const schema = applicantInfoSchema
    .merge(positionSchema)
    .merge(buildQuestionsSchema(questions))
    .merge(certificationSchema);

  // zod infers a loose Record<string, string> for the dynamic question shape,
  // which collapses the merged type — cast back to our hand-declared shape.
  return schema as unknown as z.ZodType<InterviewFormValues, InterviewFormValues>;
}
