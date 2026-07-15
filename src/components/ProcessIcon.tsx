const icons: Record<string, JSX.Element> = {
  Call: (
    <path
      d="M5 4.5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8l.7 2.8c.1.4 0 .9-.4 1.2L8.2 9.5c1 2.1 2.7 3.8 4.8 4.8l1.2-1.3c.3-.3.7-.4 1.2-.4l2.8.7c.5.1.8.5.8 1V17c0 .6-.4 1-1 1h-1C10.6 18 5 12.4 5 5.5v-1Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Audit: (
    <path
      d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z M15.3 15.3 19.5 19.5 M8 10.5h5 M10.5 8v5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Build: (
    <path
      d="m14.5 3.5 2 2-8 8-2.7.7.7-2.7 8-8Z M4 20h5 M4 20v-3.5L7.5 20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Support: (
    <path
      d="M4 13v-2a8 8 0 0 1 16 0v2 M4 13a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2Z M20 13a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2Z M8 18.5v.5a3 3 0 0 0 3 3h1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function ProcessIcon({ name }: { name: string }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        {icons[name] ?? icons.Build}
      </svg>
    </span>
  );
}
