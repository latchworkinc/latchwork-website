"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal-700/60 border-t border-charcoal-700/60">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={faq.question} delay={i * 0.05}>
            <div>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="index-number text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg text-ink-100 sm:text-xl">
                    {faq.question}
                  </span>
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 font-mono text-xl text-emerald-400"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 pl-0 text-sm leading-relaxed text-ink-300 sm:pl-11">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
