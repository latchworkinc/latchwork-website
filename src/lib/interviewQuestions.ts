export type InterviewQuestion = {
  id: string;
  label: string;
};

// Keyed by the `slug` field on entries in `openRoles` (src/lib/data.ts),
// so a position always has a matching question set.
export const INTERVIEW_QUESTION_BANK: Record<string, InterviewQuestion[]> = {
  "data-entry-associate": [
    {
      id: "q1",
      label:
        "Why are you interested in this data entry associate position, and what makes you a strong fit for it?",
    },
    {
      id: "q2",
      label:
        "Walk us through your process for migrating data from spreadsheets into a new system without losing accuracy.",
    },
    {
      id: "q3",
      label:
        "What tools or software have you used for data entry, database management, or spreadsheet work (e.g., Excel, Google Sheets, Airtable)?",
    },
    {
      id: "q4",
      label:
        "How do you catch and correct errors in large datasets — walk us through your quality-check process.",
    },
    {
      id: "q5",
      label:
        "Describe your experience reconciling vendor lists or cross-referencing records across multiple sources.",
    },
    {
      id: "q6",
      label:
        "Tell us about a time you found a discrepancy or error in a dataset that others had missed. What did you do?",
    },
    {
      id: "q7",
      label:
        "How do you stay focused and accurate on repetitive, detail-heavy tasks over long stretches?",
    },
    {
      id: "q8",
      label:
        "How do you handle confidential or sensitive client information in your day-to-day work?",
    },
    {
      id: "q9",
      label:
        "What does your ideal remote work setup look like, and how do you stay productive while working independently?",
    },
    {
      id: "q10",
      label:
        "How do you typically communicate progress, blockers, or questions to a manager when working remotely?",
    },
    {
      id: "q11",
      label:
        "Describe a time you had to manage a large volume of data entry work under a deadline. How did you prioritize?",
    },
    {
      id: "q12",
      label:
        "What hours and days are you available to work, and do you anticipate any scheduling constraints going forward?",
    },
    {
      id: "q13",
      label:
        "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
    },
  ],
  "customer-service-representative": [
    {
      id: "q1",
      label:
        "Why are you interested in this customer service representative position, and what makes you a strong fit for it?",
    },
    {
      id: "q2",
      label:
        "Describe your experience being the first point of contact for clients over phone or email.",
    },
    {
      id: "q3",
      label:
        "What tools or software have you used for scheduling, ticketing, or customer communication (e.g., Calendly, Zendesk, HubSpot)?",
    },
    {
      id: "q4",
      label:
        "Tell us about a time you had to calm down or de-escalate a frustrated client. How did you handle it?",
    },
    {
      id: "q5",
      label:
        "How do you decide when to answer a client's question yourself versus route it to the right person on the team?",
    },
    {
      id: "q6",
      label: "Describe your approach to managing a busy schedule of client calls and meeting requests.",
    },
    {
      id: "q7",
      label:
        "How do you keep your patience and tone professional when handling a high volume of routine or repetitive questions?",
    },
    {
      id: "q8",
      label:
        "How do you handle confidential or sensitive client information in your day-to-day work?",
    },
    {
      id: "q9",
      label:
        "What does your ideal remote work setup look like, and how do you stay productive while working independently?",
    },
    {
      id: "q10",
      label: "How do you typically communicate progress or blockers to a manager when working remotely?",
    },
    {
      id: "q11",
      label:
        "Describe a time you went out of your way to make a client's experience better than expected.",
    },
    {
      id: "q12",
      label:
        "What hours and days are you available to work, and do you anticipate any scheduling constraints going forward?",
    },
    {
      id: "q13",
      label:
        "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
    },
  ],
  "administrative-assistant": [
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
      label: "What is your experience with expense reporting, invoicing, or basic bookkeeping tasks?",
    },
    {
      id: "q8",
      label: "How do you handle confidential or sensitive information in your day-to-day work?",
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
      label: "How do you typically communicate progress or blockers to a manager when working remotely?",
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
  ],
  "senior-operations-consultant": [
    {
      id: "q1",
      label:
        "Why are you interested in this Senior Operations Consultant role, and what makes you a strong fit for it?",
    },
    {
      id: "q2",
      label: "Walk us through a recent operational audit or process assessment you led, from kickoff to findings.",
    },
    {
      id: "q3",
      label:
        "Describe your experience running implementation engagements — how do you keep a project on schedule and on scope?",
    },
    {
      id: "q4",
      label:
        "What is your background in consulting, fractional COO work, or in-house operations leadership?",
    },
    {
      id: "q5",
      label:
        "Tell us about a time you had to deliver a hard truth to a client or leadership team. How did you handle it?",
    },
    {
      id: "q6",
      label:
        "How do you structure client-facing deliverables (audits, roadmaps, reports) so they're clear to a non-technical business owner?",
    },
    {
      id: "q7",
      label: "Describe a situation where an engagement wasn't going the way you'd planned. What did you change?",
    },
    {
      id: "q8",
      label:
        "How do you approach building rapport and trust with a client's existing staff during an audit?",
    },
    {
      id: "q9",
      label:
        "This role is based in Chicago on a hybrid schedule with client travel across the Midwest — how do you approach balancing in-office, client-site, and remote work?",
    },
    {
      id: "q10",
      label: "How do you typically communicate progress, risks, or blockers to leadership and to clients?",
    },
    {
      id: "q11",
      label:
        "Describe your experience managing or mentoring junior consultants or team members on an engagement.",
    },
    {
      id: "q12",
      label:
        "What's an operational fix you're proud of that held up well after you left the client relationship?",
    },
    {
      id: "q13",
      label:
        "What does your availability look like for client travel, and are there any scheduling constraints we should know about?",
    },
    {
      id: "q14",
      label:
        "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
    },
  ],
  "bookkeeping-close-specialist": [
    {
      id: "q1",
      label:
        "Why are you interested in this Bookkeeping & Close Specialist position, and what makes you a strong fit for it?",
    },
    {
      id: "q2",
      label:
        "Describe your experience owning the monthly close process — what does your close checklist typically look like?",
    },
    {
      id: "q3",
      label:
        "What is your background with chart of accounts cleanup or standardization across multiple clients or entities?",
    },
    {
      id: "q4",
      label: "What accounting software and tools have you used (e.g., QuickBooks, Xero, NetSuite, Bill.com)?",
    },
    {
      id: "q5",
      label: "Walk us through your process for managing accounts payable and accounts receivable for a client.",
    },
    {
      id: "q6",
      label:
        "Are you a CPA, or do you hold another bookkeeping/accounting credential? Describe your relevant experience.",
    },
    {
      id: "q7",
      label:
        "Tell us about a time you caught a significant reconciliation error or discrepancy. How did you resolve it?",
    },
    {
      id: "q8",
      label:
        "How do you manage the books for multiple clients or entities at once without mixing up their records?",
    },
    {
      id: "q9",
      label: "How do you handle confidential financial information and maintain client trust?",
    },
    {
      id: "q10",
      label:
        "What does your ideal remote work setup look like, and how do you stay productive and organized while working independently?",
    },
    {
      id: "q11",
      label:
        "How do you typically communicate close status, blockers, or financial concerns to clients or a manager?",
    },
    {
      id: "q12",
      label:
        "Describe a time you improved or streamlined a client's bookkeeping process. What did you do and what was the result?",
    },
    {
      id: "q13",
      label:
        "What hours and days are you available to work, and do you anticipate any scheduling constraints going forward?",
    },
    {
      id: "q14",
      label:
        "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
    },
  ],
  "automation-engineer": [
    {
      id: "q1",
      label:
        "Why are you interested in this Automation Engineer position, and what makes you a strong fit for it?",
    },
    {
      id: "q2",
      label:
        "Describe your experience building automations with tools like Zapier, Make, or similar no-code/low-code platforms.",
    },
    {
      id: "q3",
      label:
        "What scripting languages or light coding are you comfortable with, and how have you used them to extend an automation?",
    },
    {
      id: "q4",
      label:
        "Walk us through how you'd approach connecting two disconnected tools (e.g., a CRM and an invoicing system) for a client.",
    },
    {
      id: "q5",
      label: "Tell us about an automation you built that broke in production. How did you diagnose and fix it?",
    },
    {
      id: "q6",
      label: "How do you handle data hygiene and deduplication when connecting multiple systems?",
    },
    {
      id: "q7",
      label: "Describe your process for documenting an automation so someone else could maintain it after you.",
    },
    {
      id: "q8",
      label: "How do you approach a client's tool stack when you're unfamiliar with one of the platforms involved?",
    },
    {
      id: "q9",
      label: "How do you handle confidential or sensitive client data flowing through an automation you've built?",
    },
    {
      id: "q10",
      label:
        "What does your ideal remote work setup look like, and how do you stay productive while working independently?",
    },
    {
      id: "q11",
      label:
        "How do you typically communicate progress, blockers, or technical risk to a non-technical client or manager?",
    },
    {
      id: "q12",
      label:
        "What hours and days are you available to work, and do you anticipate any scheduling constraints going forward?",
    },
    {
      id: "q13",
      label:
        "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
    },
  ],
  "client-operations-associate": [
    {
      id: "q1",
      label:
        "Why are you interested in this Client Operations Associate position, and what makes you a strong fit for it?",
    },
    {
      id: "q2",
      label: "What experience do you have with project coordination or keeping an engagement on track day-to-day?",
    },
    {
      id: "q3",
      label: "Describe your experience writing or maintaining documentation (SOPs, meeting notes, project trackers).",
    },
    {
      id: "q4",
      label: "What project management or task-tracking tools have you used (e.g., Asana, Trello, Monday.com)?",
    },
    {
      id: "q5",
      label: "Tell us about a time you had to coordinate between multiple people or teams to keep a project moving.",
    },
    {
      id: "q6",
      label: "How do you prioritize your day when you're supporting more than one client engagement at once?",
    },
    {
      id: "q7",
      label:
        "Describe a situation where you had to communicate a delay or setback to a client. How did you handle it?",
    },
    {
      id: "q8",
      label: "This role is based in Chicago, IL — what draws you to an in-office, client-facing role like this one?",
    },
    {
      id: "q9",
      label: "How do you handle confidential or sensitive client information in your day-to-day work?",
    },
    {
      id: "q10",
      label: "What does a strong first year in an entry-to-mid level ops consulting role look like to you?",
    },
    {
      id: "q11",
      label:
        "What hours and days are you available to work, and do you anticipate any scheduling constraints going forward?",
    },
    {
      id: "q12",
      label:
        "Is there anything else you'd like us to know about your background or qualifications? (Optional)",
    },
  ],
};
