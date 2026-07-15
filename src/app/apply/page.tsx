import { Suspense } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";
import { openRoles } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Apply",
  "Apply for an open role at Latchwork Inc — operations, financial ops, automation, and client-facing positions."
);

export default function ApplyPage() {
  return (
    <section className="pt-40 pb-28 md:pt-48">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="kicker">Apply</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-4xl italic leading-[1.1] tracking-tight text-ink-100 sm:text-5xl text-balance">
                Tell us about yourself.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-ink-300 text-balance">
                Fill out the form and we&apos;ll follow up within five
                business days. No account required, no automated screening —
                a person reads every application.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 border-t border-charcoal-700/60 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
                  Currently open
                </p>
                <ul className="mt-4 space-y-3">
                  {openRoles.map((role) => (
                    <li
                      key={role.title}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-ink-200">{role.title}</span>
                      <span className="leader" />
                      <span className="shrink-0 font-mono text-xs text-ink-400">
                        {role.location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-charcoal-600/60 bg-charcoal-900/50 p-8 md:p-10">
                <Suspense fallback={null}>
                  <ApplyForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
