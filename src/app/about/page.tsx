import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Badges from "@/components/Badges";
import { values, stats } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "Latchwork Consulting was founded to fix the operational debt that quietly drags down small businesses."
);

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <Container>
          <div className="border-b border-charcoal-700/60 pb-14">
            <SectionHeading
              eyebrow="About Latchwork"
              title="We started Latchwork because good businesses kept dying of bad plumbing."
              description="Not from bad products or bad people — from operational debt nobody had time to pay down. Latchwork exists to pay it down for them."
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="font-display text-2xl italic leading-snug text-ink-100 text-balance">
                  Renata Solis spent eight years as COO of a regional
                  distributor, watching profitable companies get swallowed by
                  their own back office.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-ink-300 leading-relaxed">
                  Invoices sat unpaid not because the company was broke, but
                  because nobody owned the process. Employees quit and took
                  years of undocumented knowledge with them. Software
                  subscriptions piled up, unused and unaudited. None of it
                  was a strategy problem. It was a plumbing problem — and
                  nobody in the building had the bandwidth to fix it.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-ink-300 leading-relaxed">
                  Latchwork was built to be that bandwidth: a team that comes
                  in, diagnoses the actual operational bottlenecks, and
                  builds systems sturdy enough that the business doesn&apos;t
                  need us anymore once we leave.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <Button href="/who-we-are" variant="secondary" className="mt-8">
                  Meet the consultants
                </Button>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <dl className="divide-y divide-charcoal-700/60 border-t border-charcoal-700/60">
                {stats.map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 0.08}>
                    <div className="flex items-baseline justify-between gap-4 py-5">
                      <dt className="text-sm text-ink-300">{stat.label}</dt>
                      <span className="leader" />
                      <dd className="font-display text-2xl italic text-emerald-300">
                        {stat.value}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Recognition badges */}
      <section className="border-t border-charcoal-700/60 py-14">
        <Container>
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
              Recognized by
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <Badges />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founding story */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Why we started this"
                title="A pattern we couldn't unsee."
              />
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink-200 text-balance">
                  Before Latchwork existed, it was just a pattern Renata kept
                  running into. Company after company, the businesses that
                  struggled weren&apos;t the ones with bad products or bad
                  people — they were the ones whose back office was still
                  running on the systems, spreadsheets, and tribal knowledge
                  that got them through their first two years, now buckling
                  under a business five times the size. Growth wasn&apos;t
                  the problem. Nobody had gone back and rebuilt the plumbing
                  to carry it.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 leading-relaxed text-ink-300">
                  The moment that stuck with her was a distributor client
                  that had just landed its best year of sales on record —
                  and nearly missed payroll twice in the same quarter. Not
                  because the money wasn&apos;t there, but because nobody
                  could see it: invoices were tracked in three different
                  spreadsheets, the one person who understood the vendor
                  contracts had quit four months earlier, and the &quot;system&quot;
                  for approving a purchase was whoever happened to be in the
                  office that day. The company wasn&apos;t failing. Its
                  operations had simply never been designed to hold this
                  much weight.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 leading-relaxed text-ink-300">
                  She saw the same story again and again, across a dozen
                  different industries, with a dozen different founders who
                  were too busy running the business to stop and fix how it
                  ran. Consultants would come in, hand over a strategy deck,
                  and leave before anyone touched the actual systems. Nobody
                  was willing to do the unglamorous work of getting in the
                  back office and rebuilding it from the inside out — the
                  bookkeeping, the SOPs, the vendor contracts, the tooling.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-6 leading-relaxed text-ink-300">
                  So that became the firm. Latchwork isn&apos;t a strategy
                  shop, and it isn&apos;t a staffing agency — it&apos;s a
                  team of operators who get in, find exactly where a
                  business is bearing weight it was never built for, and
                  rebuild that part until it holds. The name is meant
                  literally: a latch is a small, unglamorous piece of
                  hardware that quietly keeps everything else in place. That
                  is the whole job.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-charcoal-700/60 py-24">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind every engagement."
          />
          <div className="mt-14 grid grid-cols-1 divide-y divide-charcoal-700/60 border-t border-charcoal-700/60 md:grid-cols-2 md:divide-y-0">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div
                  className={`py-8 md:py-10 ${
                    i % 2 === 0 ? "md:pr-10" : "md:border-l md:border-charcoal-700/60 md:pl-10"
                  }`}
                >
                  <span className="index-number text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink-100">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {value.description}
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
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-display text-3xl italic text-ink-100 md:text-4xl">
                Want to know who you&apos;d actually work with?
              </h2>
              <p className="max-w-lg text-ink-300">
                Every engagement is staffed by people who&apos;ve run a real
                back office, not a generalist account manager.
              </p>
              <Button href="/who-we-are">Meet the consultants</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
