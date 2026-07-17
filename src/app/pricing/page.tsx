import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import clsx from "@/lib/clsx";
import { pricingTiers } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Pricing",
  "Latchwork Consulting pricing — audit-only engagements, audit plus implementation, or a full ongoing operations partnership."
);

export default function PricingPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <Container>
          <div className="border-b border-charcoal-700/60 pb-14">
            <SectionHeading
              eyebrow="Pricing"
              title="Three ways to start, priced for what you actually need."
              description="Every engagement starts with a scoped quote, not an hourly guessing game. Start with an audit, add implementation, or bring us on as an ongoing partner."
            />
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1} y={28}>
                <div
                  className={clsx(
                    "relative flex h-full flex-col border p-8",
                    tier.highlight
                      ? "border-emerald-500/50 bg-charcoal-900/70 shadow-glow lg:-mt-4 lg:mb-4 lg:py-12"
                      : "border-charcoal-600/60 bg-charcoal-900/30"
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-8 rounded-full border border-emerald-500/40 bg-charcoal-950 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-emerald-300">
                      {tier.badge}
                    </span>
                  )}
                  {tier.highlight && (
                    <>
                      <span className="absolute -top-px -left-px h-3 w-3 border-l border-t border-emerald-400" />
                      <span className="absolute -top-px -right-px h-3 w-3 border-r border-t border-emerald-400" />
                      <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-emerald-400" />
                      <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-emerald-400" />
                    </>
                  )}

                  <h3 className="font-display text-xl italic text-ink-100">
                    {tier.name}
                  </h3>
                  <p className="mt-2 min-h-[2.5rem] text-sm text-ink-300">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1 border-t border-charcoal-700/60 pt-6">
                    <span className="font-display text-4xl italic text-emerald-300">
                      {tier.price}
                    </span>
                    <span className="font-mono text-lg text-emerald-300">
                      {tier.priceSuffix}
                    </span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-ink-200"
                      >
                        <span className="mt-1 font-mono text-xs text-emerald-500">
                          —
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={tier.highlight ? "primary" : "secondary"}
                    className="mt-10 w-full"
                  >
                    Get in Touch
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-10 text-center font-mono text-xs uppercase tracking-wide text-ink-400">
              All engagements begin with a free 30-minute discovery call — no
              commitment required.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-display text-3xl italic text-ink-100 md:text-4xl">
                Not sure which tier fits?
              </h2>
              <p className="max-w-lg text-ink-300">
                Book a free discovery call and we&apos;ll recommend a
                starting point honestly — even if that means the smallest
                engagement.
              </p>
              <Button href="/contact">Get in Touch</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
