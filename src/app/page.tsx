import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { howItWorks, services, stats, testimonials } from "@/lib/data";
import LedgerPanel from "@/components/LedgerPanel";
import Marquee from "@/components/Marquee";
import ProcessIcon from "@/components/ProcessIcon";
import FAQAccordion from "@/components/FAQAccordion";
import ClientLogos from "@/components/ClientLogos";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata(
    "Home",
    "Operational consulting for small businesses — bookkeeping, process design, automation, and vendor management that actually gets implemented."
  ),
  // the root layout's title template only applies to child segments, not
  // this same-level page, so the full title has to be spelled out here
  title: "Home | Latchwork Inc",
};

const problems = [
  {
    title: "The books are a black box",
    body: "Nobody can say what cash actually looks like next month.",
  },
  {
    title: "Knowledge lives in one head",
    body: "One resignation away from losing how the business actually runs.",
  },
  {
    title: "Tools don't talk to each other",
    body: "Data gets retyped three times by three different people.",
  },
  {
    title: "Vendors renew on autopilot",
    body: "Nobody's renegotiated a contract since the business opened.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-52">
        <Container className="relative grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="kicker">Operations consulting, No. 001</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl italic leading-[1.05] tracking-tight text-ink-100 sm:text-6xl md:text-7xl text-balance">
                The back office,
                <br />
                finally <span className="not-italic text-emerald-400">in order.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg text-ink-300 text-balance">
                Latchwork rebuilds the operational plumbing behind small
                businesses — books, workflows, vendors, and systems — so
                owners stop firefighting and start running the business.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact">Get in Touch</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-16 hidden border-t border-charcoal-700/60 pt-6 sm:block">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                  Serving trades, clinics, law firms & regional distributors
                  since 2019
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <LedgerPanel />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Client logos */}
      <section className="border-t border-charcoal-700/60 py-14">
        <Container>
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
              Trusted by businesses like yours
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <ClientLogos />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Problem framing */}
      <section className="border-y border-charcoal-700/60 py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The problem"
                title="Growth exposes every crack in the back office."
                description="Most small businesses don't fail from a bad product. They stall because invoices go unpaid, processes live only in one person's head, and nobody has time to fix any of it."
              />
              <Reveal delay={0.2}>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-emerald-300 hover:text-emerald-200"
                >
                  Learn how we think about this →
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="divide-y divide-charcoal-700/60 border-t border-charcoal-700/60 lg:border-t-0">
                {problems.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex gap-6 py-6">
                      <span className="index-number shrink-0 text-2xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-lg text-ink-100">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-ink-300">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-charcoal-700/60 pb-10">
            <SectionHeading
              eyebrow="What we do"
              title="Six ways we tighten up your operations."
              description="Engagements are scoped to what your business actually needs — start with one workstream or run all six in parallel."
              className="max-w-xl"
            />
          </div>

          <div className="divide-y divide-charcoal-700/60">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href="/services"
                  className="group grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:items-center sm:gap-6"
                >
                  <span className="index-number sm:col-span-1 text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink-100 sm:col-span-4 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-300 sm:col-span-5">
                    {service.short}
                  </p>
                  <span className="font-mono text-xs text-emerald-400 sm:col-span-2 sm:text-right opacity-60 transition-opacity group-hover:opacity-100">
                    View →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-700/60 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div>
                  <p className="font-display text-4xl italic text-emerald-300 md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-ink-400">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From first call to ongoing support."
            description="A straightforward path — no open-ended retainers, no disappearing after the audit."
            align="center"
            className="mx-auto"
          />
          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-charcoal-700/60 lg:block" />
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
              {howItWorks.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.12} y={28}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 bg-charcoal-950 p-1">
                      <ProcessIcon name={step.icon} />
                    </div>
                    <span className="mt-5 font-mono text-xs text-emerald-400">
                      {step.step}
                    </span>
                    <h3 className="mt-2 font-display text-xl italic text-ink-100">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-ink-300">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <SectionHeading
            eyebrow="Client results"
            title="Owners sleep better once the back office runs itself."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} y={28}>
                <figure className="relative flex h-full flex-col justify-between border border-charcoal-600/60 bg-charcoal-900/40 p-8">
                  <span
                    className="absolute -top-px -left-px h-3 w-3 border-l border-t border-emerald-400"
                    aria-hidden
                  />
                  <span
                    className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-emerald-400"
                    aria-hidden
                  />
                  <div>
                    <span className="font-display text-4xl italic text-emerald-500">
                      “
                    </span>
                    <blockquote className="-mt-4 font-display text-lg italic leading-snug text-ink-100 text-balance">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-charcoal-700/60 pt-5">
                    <p className="text-sm font-medium text-ink-100">
                      {t.name}
                    </p>
                    <p className="font-mono text-xs text-ink-400">
                      {t.title}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Marquee />

      {/* FAQ */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Common questions before you book a call."
            className="mb-4"
          />
          <div className="mt-14">
            <FAQAccordion />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <Reveal>
            <div className="relative border-y border-emerald-500/30 py-16 text-center">
              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-emerald-400" />
              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-emerald-400" />
              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-emerald-400" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-emerald-400" />
              <h2 className="font-display text-4xl italic tracking-tight text-ink-100 sm:text-5xl text-balance">
                Ready to see what&apos;s leaking?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-ink-300">
                Book a free 30-minute operational audit. We&apos;ll show you
                at least one thing costing you money before you sign
                anything.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact">Get in Touch</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
