import { z } from "zod";

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
  workAuthorized: z.enum(["yes", "no"], {
    error: () => "Please select an option.",
  }),
});

export const INTERVIEW_QUESTIONS = [
  {
    id: "q1",
    label:
      "Why are you interested in this remote administrative assistant position, and what makes you a strong fit for it?",
  },
  {
    id: "q2",
    label:
      "Describe your experience with calendar management, scheduling, and coordinating meetings across multiple time zones.",
  },
  {
    id: "q3",
    label:
      "What tools or software have you used for email management, and how do you prioritize a busy inbox?",
  },
  {
    id: "q4",
    label:
      "Tell us about a time you had to manage multiple competing deadlines. How did you prioritize your work?",
  },
  {
    id: "q5",
    label:
      "How do you ensure accuracy and attention to detail when handling data entry, reports, or documentation?",
  },
  {
    id: "q6",
    label:
      "Describe your experience with virtual meeting platforms (e.g., Zoom, Google Meet, Microsoft Teams) and any administrative support you've provided during meetings.",
  },
  {
    id: "q7",
    label:
      "What is your experience with expense reporting, invoicing, or basic bookkeeping tasks?",
  },
  {
    id: "q8",
    label:
      "How do you handle confidential or sensitive information in your day-to-day work?",
  },
  {
    id: "q9",
    label:
      "Describe a situation where you had to communicate with a difficult client, vendor, or coworker. How did you handle it?",
  },
  {
    id: "q10",
    label:
      "What does your ideal remote work setup look like, and how do you stay productive and organized while working independently?",
  },
  {
    id: "q11",
    label:
      "How do you typically communicate progress or blockers to a manager when working remotely?",
  },
  {
    id: "q12",
    label:
      "What experience do you have with project management or task-tracking tools (e.g., Asana, Trello, Monday.com)?",
  },
  {
    id: "q13",
    label:
      "Describe a time you identified a way to improve a process or workflow. What did you do and what was the result?",
  },
  {
    id: "q14",
    label:
      "What hours and days are you available to work, and do you anticipate any scheduling constraints going forward?",
  },
  {
    id: "q15",
    label:
      "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
  },
] as const;

const QUESTION_MIN_LENGTH = 20;

type QuestionId = (typeof INTERVIEW_QUESTIONS)[number]["id"];

const questionsShape = INTERVIEW_QUESTIONS.reduce((shape, question, index) => {
  const isLast = index === INTERVIEW_QUESTIONS.length - 1;
  shape[question.id as QuestionId] = isLast
    ? z.string().trim()
    : z
        .string()
        .trim()
        .min(
          QUESTION_MIN_LENGTH,
          `Please provide a more detailed answer (at least ${QUESTION_MIN_LENGTH} characters).`
        );
  return shape;
}, {} as Record<QuestionId, z.ZodString>);

export const questionsSchema = z.object(questionsShape);

export const certificationSchema = z.object({
  certified: z.boolean().refine((value) => value === true, {
    message: "You must certify your responses before submitting.",
  }),
});

export const interviewSchema = applicantInfoSchema
  .merge(questionsSchema)
  .merge(certificationSchema);

export type InterviewFormValues = z.infer<typeof interviewSchema>;
