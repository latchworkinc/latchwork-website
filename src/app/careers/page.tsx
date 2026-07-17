import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { openRoles, benefits, values } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Careers",
  "Join Latchwork Consulting — open roles in operations consulting, financial operations, automation, and client operations."
);

export default function CareersPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <Container>
          <div className="border-b border-charcoal-700/60 pb-14">
            <Reveal>
              <span className="kicker">Careers</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-3xl font-display text-4xl italic leading-[1.1] tracking-tight text-ink-100 sm:text-5xl md:text-6xl text-balance">
                Build operational systems that actually get used.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg text-ink-300 text-balance">
                Latchwork is a small, senior team. Every hire works directly
                with clients and directly with the founder — no layers, no
                bureaucracy about how to remove bureaucracy.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why work here */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-charcoal-700/60 border-t border-charcoal-700/60 md:grid-cols-2 md:divide-y-0 md:divide-x">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="py-8 md:px-8 md:py-10">
                  <span className="index-number text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink-100">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <span className="kicker">Benefits</span>
          <h2 className="mt-4 font-display text-3xl italic text-ink-100 md:text-4xl">
            What you get for doing your best work here.
          </h2>
          <ul className="mt-10 divide-y divide-charcoal-700/60 border-t border-charcoal-700/60">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.04}>
                <li className="flex items-center gap-4 py-4">
                  <span className="font-mono text-xs text-emerald-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink-200">{benefit}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Open roles */}
      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-charcoal-700/60 pb-8">
            <div>
              <span className="kicker">Open roles</span>
              <h2 className="mt-4 font-display text-3xl italic text-ink-100 md:text-4xl">
                Current openings.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-ink-400">
              Don&apos;t see a fit but think you should be here anyway? Reach
              out — we&apos;d rather hear from you than miss you.
            </p>
          </div>

          <div className="divide-y divide-charcoal-700/60">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.05}>
                <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-6">
                    <span className="index-number hidden text-3xl sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg text-ink-100">
                          {role.title}
                        </h3>
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-emerald-300">
                          {role.type}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-ink-400">
                        {role.location}
                      </p>
                      <p className="mt-3 max-w-2xl text-sm text-ink-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    href={`/apply?role=${encodeURIComponent(role.title)}`}
                    variant="secondary"
                    className="shrink-0 self-start md:self-center"
                  >
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-display text-3xl italic text-ink-100 md:text-4xl">
                Don&apos;t see the right role?
              </h2>
              <p className="max-w-lg text-ink-300">
                Send us a note anyway. We create roles around exceptional
                people more often than the other way around.
              </p>
              <Button href="/apply">Get in touch</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
