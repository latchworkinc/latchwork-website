import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { services, process } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Services",
  "Financial operations, process design, workflow automation, vendor management, HR foundations, and systems strategy for small businesses."
);

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <Container>
          <div className="border-b border-charcoal-700/60 pb-14">
            <SectionHeading
              eyebrow="Services"
              title="Operational consulting, scoped to how small businesses actually work."
              description="Every engagement starts with an audit, not a sales pitch. Pick one workstream or bundle several — we size the engagement to your business, not the other way around."
            />
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="divide-y divide-charcoal-700/60">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}>
                <div
                  id={service.slug}
                  className="grid scroll-mt-28 grid-cols-1 gap-8 py-14 md:grid-cols-12"
                >
                  <div className="md:col-span-5">
                    <span className="index-number text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-2xl italic text-ink-100">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-300">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-7 md:border-l md:border-charcoal-700/60 md:pl-10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">
                      What you get
                    </p>
                    <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-baseline gap-3 border-t border-charcoal-700/60 pt-3 text-sm text-ink-200"
                        >
                          <span className="font-mono text-xs text-emerald-500">
                            —
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process recap */}
      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <SectionHeading
            eyebrow="Engagement structure"
            title="How an engagement runs, from first call to handoff."
          />
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="border-t border-charcoal-600 pt-5">
                  <span className="font-mono text-xs text-emerald-400">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg italic text-ink-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-300">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <Reveal>
            <div className="relative border-y border-emerald-500/30 py-14 text-center">
              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-emerald-400" />
              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-emerald-400" />
              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-emerald-400" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-emerald-400" />
              <h2 className="font-display text-3xl italic text-ink-100 md:text-4xl">
                Not sure which workstream to start with?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-ink-300">
                Tell us what&apos;s breaking and we&apos;ll tell you honestly
                whether it&apos;s worth an engagement — or a quick fix you
                can do yourself.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact">Talk to a consultant</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
