"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="flex flex-col items-center px-6 py-14 text-center sm:px-10">
        <motion.span
          initial={{ scale: 0, rotate: -45, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-interview-accent/15 text-3xl text-interview-accent-light"
        >
          ✓
        </motion.span>

        <h2 className="mt-6 text-2xl font-semibold text-white">
          Interview Successfully Submitted
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
          Thank you for taking the time to complete your interview. Our hiring team will
          carefully review your responses together with your application materials. If your
          qualifications match our current hiring needs, we will contact you regarding the
          next stage of the hiring process.
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
          Please save{" "}
          <a
            href="mailto:hiring@latch-work.com"
            className="font-medium text-interview-accent-light underline"
          >
            hiring@latch-work.com
          </a>{" "}
          as a contact so you don&apos;t miss any follow-up emails from us.
        </p>

        <Link
          href="/careers"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-interview-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-interview-accent-light hover:shadow-interview-glow"
        >
          Return to Careers
        </Link>
      </Card>
    </motion.div>
  );
}
