const words = [
  "Bookkeeping",
  "Process Design",
  "Automation",
  "Vendor Management",
  "People Ops",
  "Systems Strategy",
];

export default function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-charcoal-700/60 bg-charcoal-950 py-6">
      <div className="flex w-max animate-marquee gap-12">
        {items.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl italic text-charcoal-500"
          >
            {word}
            <span className="text-emerald-600">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
