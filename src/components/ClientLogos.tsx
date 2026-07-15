const logos = [
  "NORTHBRIDGE",
  "Core & Co.",
  "VELLUM GROUP",
  "Ashford Partners",
  "MERIDIAN WORKS",
  "Stonegate",
];

export default function ClientLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:justify-between">
      {logos.map((logo) => (
        <span
          key={logo}
          className="font-display text-xl italic tracking-tight text-ink-400 opacity-70 grayscale transition-all duration-300 hover:text-emerald-300 hover:opacity-100"
        >
          {logo}
        </span>
      ))}
    </div>
  );
}
