import { stats } from "@/lib/data";

export default function LedgerPanel() {
  return (
    <div className="relative border border-charcoal-600/70 bg-charcoal-900/40 p-8">
      <span className="absolute -top-px -left-px h-3 w-3 border-l border-t border-emerald-400" />
      <span className="absolute -top-px -right-px h-3 w-3 border-r border-t border-emerald-400" />
      <span className="absolute -bottom-px -left-px h-3 w-3 border-l border-b border-emerald-400" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-r border-b border-emerald-400" />

      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-400">
        Client audit — sample findings
      </p>

      <dl className="mt-8 space-y-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3">
            <dt className="text-sm text-ink-300">{stat.label}</dt>
            <span className="leader" />
            <dd className="font-display text-2xl italic text-emerald-300">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex items-center justify-between border-t border-charcoal-700/60 pt-5">
        <span className="font-mono text-[11px] text-ink-400">
          FIG. 01 — LATCHWORK OPERATIONAL BASELINE
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>
    </div>
  );
}
