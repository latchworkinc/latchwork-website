import clsx from "@/lib/clsx";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="7" fill="#12A866" fillOpacity="0.14" />
        <path
          d="M9 8.5V19.5H18.5"
          stroke="#2ECB85"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 13.5H18.5"
          stroke="#2ECB85"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-100">
        Latchwork
      </span>
    </span>
  );
}
