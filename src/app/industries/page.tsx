import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import IndustryIcon from "@/components/IndustryIcon";
import clsx from "@/lib/clsx";
import { industries } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industries We Serve",
  "Latchwork Inc works with retail, logistics, professional services, wellness, and growing small businesses — fixing the back-office systems specific to each."
);

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <Container>
          <div className="border-b border-charcoal-700/60 pb-14">
            <SectionHeading
              eyebrow="Industries we serve"
              title="Different businesses, the same operational cracks."
              description="We've built playbooks for the back-office problems specific to each of these industries — not generic advice reused across every client."
            />
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="divide-y divide-charcoal-700/60 border-t border-charcoal-700/60">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.06} y={28}>
                <div
                  className={clsx(
                    "flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:gap-16",
                    i % 2 === 1 && "lg:flex-row-reverse"
                  )}
                >
                  <div className="flex shrink-0 items-center gap-5 lg:w-64">
                    <IndustryIcon
                      name={industry.icon}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    />
                    <span className="index-number text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl italic text-ink-100 md:text-3xl">
                      {industry.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-300">
                      {industry.description}
                    </p>
                  </div>
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
                Don&apos;t see your industry?
              </h2>
              <p className="max-w-lg text-ink-300">
                If your back office runs on spreadsheets, disconnected
                software, and institutional memory, we&apos;ve probably seen
                your exact situation before.
              </p>
              <Button href="/contact">Get in Touch</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
