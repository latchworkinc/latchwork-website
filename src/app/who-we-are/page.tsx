import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ConsultantPhoto from "@/components/ConsultantPhoto";
import { team } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Who We Are",
  "Meet the consultants behind Latchwork Inc — operators who've run real back offices, not generalist consultants."
);

const [founder, ...rest] = team;

export default function WhoWeArePage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-b border-charcoal-700/60 pb-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="kicker">Who we are</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-4xl italic leading-[1.1] tracking-tight text-ink-100 sm:text-5xl md:text-6xl text-balance">
                  Six operators, one back office at a time.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg text-ink-300 text-balance">
                  Everyone at Latchwork has run operations inside a real
                  company before advising on one. No career consultants, no
                  MBA case-study theorists — just people who have personally
                  closed the books, written the SOP, or answered the phone
                  when a vendor called about a lapsed contract.
                </p>
              </Reveal>
            </div>
            <div className="flex items-end lg:col-span-4 lg:justify-end">
              <Reveal delay={0.2}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
                  Roster — {String(team.length).padStart(2, "0")} consultants
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder — featured, asymmetric treatment */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5" y={32}>
              <ConsultantPhoto
                src={founder.photo}
                alt={`Portrait of ${founder.name}`}
                aspect="portrait"
                className="max-w-sm"
              />
            </Reveal>
            <div className="flex flex-col justify-center lg:col-span-7">
              <Reveal delay={0.1}>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">
                  Founder — 01
                </span>
              </Reveal>
              <Reveal delay={0.16}>
                <h2 className="mt-4 font-display text-3xl italic text-ink-100 md:text-4xl text-balance">
                  {founder.name}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-400">
                  {founder.role}
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-200 text-balance">
                  {founder.bio}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Rest of the roster — staggered grid */}
      <section className="pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((member, i) => (
              <Reveal
                key={member.name}
                delay={(i % 3) * 0.1}
                y={36}
                className={i % 2 === 1 ? "lg:mt-14" : ""}
              >
                <div>
                  <ConsultantPhoto
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    aspect={i % 3 === 1 ? "square" : "portrait"}
                  />
                  <div className="mt-5 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl italic text-ink-100">
                      {member.name}
                    </h3>
                    <span className="index-number text-sm">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-emerald-400">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {member.bio}
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
                Want to work alongside this roster?
              </h2>
              <p className="max-w-lg text-ink-300">
                We&apos;re hiring across operations, financial ops,
                automation, and client-facing roles.
              </p>
              <Button href="/careers">View open roles</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
