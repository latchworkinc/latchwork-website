import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-charcoal-700/60 bg-charcoal-950">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-emerald-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-emerald-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.phone}</li>
              <li className="text-ink-400">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal-700/60 pt-8 text-xs text-ink-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Latchwork Inc. All rights reserved.
          </p>
          <p>Business operations & back-office efficiency consulting.</p>
        </div>
      </Container>
    </footer>
  );
}
