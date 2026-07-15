const badges = [
  {
    title: "Ops Excellence Award",
    subtext: "2024",
  },
  {
    title: "Top Small Business Partner",
    subtext: "Midwest Business Council",
  },
  {
    title: "5-Star Client Rating",
    subtext: "Verified reviews",
  },
  {
    title: "Client Data Standards Certified",
    subtext: "Annual review",
  },
];

function SealIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M12 3.5 14 6l3-.7.5 3 2.5 1.7-1.5 2.7 1.5 2.7-2.5 1.7-.5 3-3-.7-2 2.5-2-2.5-3 .7-.5-3-2.5-1.7 1.5-2.7-1.5-2.7L7.5 8.3 8 5.3l3 .7 1-2.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9.5 12.5 1.8 1.8 3.2-3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Badges() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex items-center gap-3 border border-charcoal-600/60 bg-charcoal-900/30 px-5 py-4"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
            <SealIcon />
          </span>
          <div>
            <p className="text-sm font-medium leading-tight text-ink-100">
              {badge.title}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-400">
              {badge.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
