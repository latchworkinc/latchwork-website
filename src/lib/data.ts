export const siteConfig = {
  name: "Latchwork Inc",
  tagline: "Back-office operations, engineered for small business.",
  description:
    "Latchwork Inc helps small businesses fix the operational plumbing behind the scenes — bookkeeping systems, workflow automation, vendor management, and process design — so owners can get back to running the business, not babysitting it.",
  email: "hello@latchworkinc.com",
  phone: "+1 (312) LATCHWK",
  address: "233 S Wacker Dr, Suite 1900, Chicago, IL 60606",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "financial-ops",
    title: "Financial Operations",
    short: "Books that close on time, every time.",
    description:
      "We rebuild your bookkeeping, AP/AR, and reporting cadence into a system your team can actually run — clean chart of accounts, reconciled monthly close, and dashboards that tell you the truth about cash.",
    icon: "Ledger",
    deliverables: [
      "Monthly close in 5 business days or less",
      "Cash flow forecasting templates",
      "Chart of accounts cleanup & standardization",
      "AP/AR workflow automation",
    ],
  },
  {
    slug: "process-design",
    title: "Process Design & SOPs",
    short: "Turn tribal knowledge into repeatable systems.",
    description:
      "We map how work actually moves through your business, find the bottlenecks and single points of failure, then document SOPs your team can follow without you in the room.",
    icon: "Flow",
    deliverables: [
      "End-to-end process mapping",
      "Written SOPs & training materials",
      "Bottleneck & redundancy audit",
      "Handoff-ready documentation",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    short: "Cut the busywork out of your week.",
    description:
      "We connect the tools you already use — invoicing, CRM, scheduling, inventory — so data moves automatically instead of being retyped three times by three different people.",
    icon: "Automate",
    deliverables: [
      "Tool audit & integration mapping",
      "No-code / low-code automations",
      "Data hygiene & deduplication",
      "Ongoing automation maintenance",
    ],
  },
  {
    slug: "vendor-procurement",
    title: "Vendor & Procurement Management",
    short: "Fewer surprises, better terms.",
    description:
      "We centralize vendor contracts, renewal dates, and pricing so nothing auto-renews at a bad rate and every purchase goes through the right approval path.",
    icon: "Vendor",
    deliverables: [
      "Vendor contract centralization",
      "Renewal & spend calendar",
      "Approval workflow design",
      "Cost-savings renegotiation support",
    ],
  },
  {
    slug: "hr-people-ops",
    title: "HR & People Ops Foundations",
    short: "The paperwork side of taking care of people.",
    description:
      "We stand up the essential people-ops infrastructure — onboarding, handbooks, PTO tracking, compliance basics — so growth doesn't outpace your ability to manage a team.",
    icon: "People",
    deliverables: [
      "Employee handbook & policy drafting",
      "Onboarding/offboarding checklists",
      "PTO & compliance tracking setup",
      "Payroll process review",
    ],
  },
  {
    slug: "systems-integration",
    title: "Systems & Tooling Strategy",
    short: "The right stack, not the trendiest one.",
    description:
      "We audit your software spend and recommend a lean, integrated toolset sized for where your business is today — and where it's headed in 18 months.",
    icon: "Stack",
    deliverables: [
      "Software spend audit",
      "Tool consolidation roadmap",
      "Migration planning & execution",
      "Team training & adoption support",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Operational Audit",
    description:
      "We spend two weeks embedded in your back office — shadowing workflows, reviewing your books, and interviewing your team — to find exactly where time and money leak out.",
  },
  {
    step: "02",
    title: "Systems Blueprint",
    description:
      "You get a prioritized roadmap: what to fix first, what it costs, and what it saves. No jargon, no 80-page deck you'll never open again.",
  },
  {
    step: "03",
    title: "Build & Implement",
    description:
      "Our team does the actual work — rebuilding processes, configuring tools, writing SOPs — alongside your staff so knowledge stays in-house.",
  },
  {
    step: "04",
    title: "Handoff & Support",
    description:
      "We train your team to own the new systems, then stay on retainer for 90 days to make sure everything holds under real-world pressure.",
  },
];

export const testimonials = [
  {
    quote:
      "Latchwork found $180K in vendor overspend in the first month. We didn't even know we had three different pest control contracts.",
    name: "Dana Whitfield",
    title: "Owner",
    company: "Whitfield Family Dental",
  },
  {
    quote:
      "Our month-end close went from three weeks of chaos to five days. I finally know what my cash position actually is.",
    name: "Marcus Oduya",
    title: "Founder",
    company: "Oduya Logistics",
  },
  {
    quote:
      "They didn't just hand us a binder of SOPs and disappear. They stayed until our office manager could run the new system solo.",
    name: "Priya Raman",
    title: "General Manager",
    company: "Raman & Sons Construction",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Get in Touch",
    description:
      "A free 30-minute conversation where we learn how your business runs today and where it's costing you time or money.",
    icon: "Call",
  },
  {
    step: "02",
    title: "Operations Audit",
    description:
      "We spend two weeks inside your back office — reviewing books, workflows, and tools — to find exactly what's broken.",
    icon: "Audit",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Our team rebuilds the systems alongside your staff, so the fixes stick and the knowledge stays in-house.",
    icon: "Build",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "We stay on to make sure everything holds under real-world pressure, with a direct line whenever something needs attention.",
    icon: "Support",
  },
];

export const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We work primarily with small and mid-sized businesses in trades, healthcare and dental practices, law firms, construction, and regional distribution — generally 5 to 200 employees. If your back office runs on a mix of spreadsheets, disconnected software, and institutional memory, we've probably seen your exact situation before.",
  },
  {
    question: "How much does an engagement cost?",
    answer:
      "Pricing is scoped to the workstream and size of your business, not a flat package. Most engagements range from a single-workstream project over a few weeks to a multi-month build across financial ops, process design, and automation. You'll get a fixed quote after the operational audit — never an open-ended hourly retainer.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements run 6 to 12 weeks from audit to handoff, followed by a 90-day support period to make sure the new systems hold. Single-workstream projects (like a vendor contract cleanup) can wrap in as little as three weeks.",
  },
  {
    question: "Do you work with remote or distributed teams?",
    answer:
      "Yes. About half of our current clients operate fully remote or across multiple locations. Our audits and implementation work happen over video and screen-share as often as in person, and our systems are built to hold up whether your team is in one office or five.",
  },
  {
    question: "Will we need to hire new staff for this to work?",
    answer:
      "No — the entire point is to make your existing team more effective, not to add headcount. We build systems your current staff can run, and we train them directly during implementation. If a role gap does turn up during the audit, we'll tell you plainly, but it's the exception, not the plan.",
  },
];

export const stats = [
  { value: "140+", label: "Small businesses served" },
  { value: "$14M", label: "In annualized cost savings identified" },
  { value: "9 days", label: "Average reduction in month-end close" },
  { value: "97%", label: "Client retention past year one" },
];

export const team = [
  {
    name: "Renata Solis",
    role: "Founder & Managing Partner",
    bio: "Spent eight years as a COO before starting Latchwork, and still can't walk past a messy filing cabinet without itching to reorganize it. Usually the first one in the office, coffee in hand.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Théo Bergman",
    role: "Head of Financial Operations",
    bio: "A CPA who fell for spreadsheets long before it was cool. Théo has closed the books for more small businesses than he can count, and still grins when a reconciliation finally ties out.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Director of Process Design",
    bio: "Started on a factory floor and never lost the habit of asking 'why do we do it this way?' Brings Six Sigma rigor to law firms and clinics that have never heard the term — and makes it stick.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sam Kestrel",
    role: "Head of Automation",
    bio: "Has automated himself out of three different jobs and considers that a personal best. If your business runs on a spreadsheet held together by hope, he's the one who'll quietly fix it.",
    photo:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Delphine Cortez",
    role: "People Ops Lead",
    bio: "Built HR from scratch at three companies and believes a good handbook is really just a love letter to your future employees. Off the clock, she's usually elbow-deep in a garden bed.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ben Whitfield",
    role: "Client Partner",
    bio: "The friendly voice clients call when something's on fire. Ten years in client operations taught him that most 'emergencies' just need someone calm on the other end of the phone.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
];

export const values = [
  {
    title: "Systems over heroics",
    description:
      "If your business only works because one person never takes a vacation, that's not a business — that's a liability. We build systems that survive people leaving.",
  },
  {
    title: "Show your work",
    description:
      "No black-box consulting. Every recommendation comes with the math behind it and the documentation to run it without us.",
  },
  {
    title: "Small business first",
    description:
      "We size our engagements, pricing, and advice for businesses with 5 to 200 employees — not Fortune 500 playbooks shrunk down to fit.",
  },
  {
    title: "Finish the handoff",
    description:
      "A consultant who leaves before your team can run the new system hasn't finished the job. We stay until it holds.",
  },
];

export const openRoles = [
  {
    title: "Data Entry Associate",
    location: "Remote (US)",
    type: "Part Time",
    description:
      "Keep client records accurate and current — migrating spreadsheets, reconciling vendor lists, and cleaning up databases as part of our operational audits. High attention to detail required; no prior consulting experience needed.",
  },
  {
    title: "Customer Service Representative",
    location: "Remote (US)",
    type: "Part Time",
    description:
      "Be the first voice clients hear when they call or email Latchwork. Manage scheduling, answer routine questions, and route issues to the right consultant. Great communication skills and patience required.",
  },
  {
    title: "Administrative Assistant",
    location: "Remote (US)",
    type: "Part Time",
    description:
      "Support the Latchwork team with calendar management, travel coordination, document preparation, and general office operations. Ideal for someone organized who wants to learn the consulting business from the inside.",
  },
  {
    title: "Senior Operations Consultant",
    location: "Chicago, IL / Hybrid",
    type: "Full-time",
    description:
      "Lead operational audits and implementation engagements for small business clients across the Midwest. 5+ years in ops, consulting, or fractional COO work.",
  },
  {
    title: "Bookkeeping & Close Specialist",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Own the financial operations workstream for a portfolio of clients — chart of accounts cleanup, monthly close, AP/AR systems. CPA or bookkeeping background required.",
  },
  {
    title: "Automation Engineer",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Design and build no-code/low-code automations connecting client tool stacks. Comfortable with Zapier, Make, and light scripting.",
  },
  {
    title: "Client Operations Associate",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Entry-to-mid level role supporting client engagements — documentation, project coordination, and day-to-day communication. Great first step into ops consulting.",
  },
];

export const benefits = [
  "Fully covered health, dental, and vision",
  "4-day work week during non-travel weeks",
  "Profit-sharing after year one",
  "$2,000 annual learning & development stipend",
  "Unlimited PTO with a mandatory 15-day minimum",
  "Fully remote-friendly with quarterly in-person offsites",
];

export const pricingTiers = [
  {
    name: "Audit Only",
    price: "$1,500",
    priceSuffix: "+",
    tagline: "For businesses that want a clear diagnosis first.",
    highlight: false,
    features: [
      "Full operations audit across your back office",
      "Written findings report with prioritized fixes",
      "1-hour walkthrough call with a lead consultant",
    ],
  },
  {
    name: "Audit + Implementation",
    price: "$4,500",
    priceSuffix: "+",
    tagline: "For businesses ready to fix what the audit finds.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Audit Only",
      "Workflow redesign across affected systems",
      "Team training on the new processes",
      "30 days of post-launch support",
    ],
  },
  {
    name: "Full Partnership",
    price: "Custom",
    priceSuffix: "",
    tagline: "For businesses that want an ongoing operations partner.",
    highlight: false,
    features: [
      "Everything in Audit + Implementation",
      "Quarterly operations reviews",
      "Priority support with guaranteed response times",
      "A dedicated Latchwork point of contact",
    ],
  },
];

export const industries = [
  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    icon: "Retail",
    description:
      "We clean up inventory, order fulfillment, and returns workflows so a busy season doesn't mean chaos in the back room or the inbox.",
  },
  {
    slug: "logistics-distribution",
    title: "Logistics & Distribution",
    icon: "Logistics",
    description:
      "We tighten up dispatch, vendor, and warehouse processes so freight moves on schedule and nothing falls through the cracks between systems.",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: "Professional",
    description:
      "For law firms, agencies, and consultancies, we rebuild billing, client intake, and project handoffs so partners spend less time on admin and more on billable work.",
  },
  {
    slug: "wellness-healthcare-adjacent",
    title: "Wellness & Healthcare-Adjacent Businesses",
    icon: "Wellness",
    description:
      "We help clinics, dental practices, and wellness studios untangle scheduling, billing, and compliance paperwork without disrupting patient care.",
  },
  {
    slug: "startups-growing-small-business",
    title: "Startups & Growing Small Businesses",
    icon: "Startup",
    description:
      "We build the operational foundation early — books, SOPs, and tooling — so growth doesn't outrun your ability to run the business.",
  },
];
