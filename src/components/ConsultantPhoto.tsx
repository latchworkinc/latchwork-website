"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "@/lib/clsx";

export default function ConsultantPhoto({
  src,
  alt,
  aspect = "portrait",
  className,
}: {
  src: string;
  alt: string;
  aspect?: "portrait" | "square";
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={clsx(
        "group relative overflow-hidden border border-charcoal-600/60",
        aspect === "portrait" ? "aspect-[4/5]" : "aspect-square",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(46,203,133,0)] transition-shadow duration-500 group-hover:shadow-[inset_0_0_0_1px_rgba(46,203,133,0.4)]" />
    </motion.div>
  );
}
