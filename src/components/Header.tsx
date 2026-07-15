"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
import clsx from "@/lib/clsx";
import { navLinks } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal-950/85 backdrop-blur-md border-b border-charcoal-700/60"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="z-10">
          <Logo />
        </Link>

        <nav className="hidden xl:flex items-center gap-0 font-mono text-xs uppercase tracking-wide">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative px-2.5 py-2 whitespace-nowrap transition-colors",
                  active ? "text-emerald-300" : "text-ink-300 hover:text-ink-100"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-emerald-400"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact" className="!px-5 !py-2.5 text-sm">
            Get in Touch
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-charcoal-600"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
            className="h-px w-4 bg-ink-100"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
            className="h-px w-4 bg-ink-100"
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden border-b border-charcoal-700/60 bg-charcoal-950/95 backdrop-blur-md"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-lg px-4 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "text-ink-200"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2 w-full">
                Get in Touch
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
