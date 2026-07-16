"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function InterviewNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="border-interview-accent/30 bg-interview-accent/[0.06]">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interview-accent/15 text-interview-accent">
            ℹ
          </span>
          <div>
            <h2 className="text-base font-semibold text-white">Interview Notice</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Thank you for your interest in joining Latchwork Inc. This interview is a
              required step in our hiring process and is designed to help us better
              understand your qualifications, experience, communication skills, and overall
              fit for the position. Please answer each question honestly and thoughtfully.
              Your responses will be reviewed together with your application and resume.
              Completion of this interview does not guarantee employment or an offer of
              employment. Only candidates selected to move forward in the hiring process
              will be contacted.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
