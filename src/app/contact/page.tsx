import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Book a free operational audit or reach out to Latchwork Inc. Chicago-based, serving small businesses nationwide."
);

const infoItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: undefined,
  },
  {
    label: "Office",
    value: siteConfig.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <section className="pt-40 pb-28 md:pt-48">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Let's find out what your back office is costing you."
              description="Book a free 30-minute audit or just tell us what's broken. We reply within one business day."
            />

            <dl className="mt-10 divide-y divide-charcoal-700/60 border-t border-charcoal-700/60">
              {infoItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="flex flex-col gap-1 py-5">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">
                      {item.label}
                    </dt>
                    {item.href ? (
                      <dd>
                        <a
                          href={item.href}
                          className="text-sm text-ink-100 transition-colors hover:text-emerald-300"
                        >
                          {item.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="text-sm text-ink-100">{item.value}</dd>
                    )}
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative border border-charcoal-600/60 bg-charcoal-900/40 p-8 md:p-10">
                <span className="absolute -top-px -left-px h-3 w-3 border-l border-t border-emerald-400" />
                <span className="absolute -top-px -right-px h-3 w-3 border-r border-t border-emerald-400" />
                <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-emerald-400" />
                <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-emerald-400" />
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
