"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PositionSelector from "./PositionSelector";
import InterviewNotice from "./InterviewNotice";
import InterviewForm from "./InterviewForm";
import { openRoles } from "@/lib/data";

function isRemote(location: string) {
  return location.toLowerCase().includes("remote");
}

export default function InterviewExperience() {
  const [selectedSlug, setSelectedSlug] = useState("");
  const [formHasContent, setFormHasContent] = useState(false);

  const selectedRole = openRoles.find((role) => role.slug === selectedSlug);

  function handlePositionChange(nextSlug: string) {
    if (selectedSlug && nextSlug !== selectedSlug && formHasContent) {
      const confirmed = window.confirm(
        "Switching positions will clear your answers for this interview. Continue?"
      );
      if (!confirmed) return;
      window.localStorage.removeItem(`latchwork-interview-draft-${selectedSlug}`);
    }
    setSelectedSlug(nextSlug);
    setFormHasContent(false);
  }

  const heading = selectedRole
    ? `${isRemote(selectedRole.location) ? "Remote " : ""}${selectedRole.title} Interview`
    : "Select a Position to Begin";

  return (
    <>
      <PositionSelector value={selectedSlug} onChange={handlePositionChange} />

      <div className="mt-10 text-center sm:text-left">
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={heading}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {heading}
          </motion.h1>
        </AnimatePresence>
        <p className="mt-3 text-base text-white/60">
          Complete the interview below by answering each question honestly and thoroughly.
        </p>
      </div>

      <div className="mt-10">
        <InterviewNotice />
      </div>

      {selectedRole && (
        <div className="mt-8">
          <InterviewForm
            key={selectedRole.slug}
            position={selectedRole}
            onDirtyChange={setFormHasContent}
          />
        </div>
      )}
    </>
  );
}
