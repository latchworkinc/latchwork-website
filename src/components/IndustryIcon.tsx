const icons: Record<string, JSX.Element> = {
  Retail: (
    <path
      d="M6 8h12l-1 12H7L6 8Z M9 8V6a3 3 0 0 1 6 0v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Logistics: (
    <path
      d="M3 7h11v9H3V7Z M14 10h4l3 3v3h-7v-6Z M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M16.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Professional: (
    <path
      d="M4 8h16v11H4V8Z M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M4 13h16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Wellness: (
    <path
      d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z M9 11h2l1-2 2 4 1-2h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Startup: (
    <path
      d="M12 2c2.5 2 4 5.3 4 8.5 0 2-1 4-4 7.5-3-3.5-4-5.5-4-7.5C8 7.3 9.5 4 12 2Z M12 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z M9 18l-2.5 3 M15 18l2.5 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function IndustryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={
        className ??
        "inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      }
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        {icons[name] ?? icons.Startup}
      </svg>
    </span>
  );
}
