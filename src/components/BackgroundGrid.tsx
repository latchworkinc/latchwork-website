export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="noise" />
    </div>
  );
}
