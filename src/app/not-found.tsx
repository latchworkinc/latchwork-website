import Container from "@/components/Container";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Page Not Found",
  "The page you're looking for doesn't exist or has moved."
);

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-24">
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <Logo />
          <span className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            Error 404
          </span>
          <h1 className="mt-5 font-display text-4xl italic tracking-tight text-ink-100 sm:text-5xl text-balance">
            This page went missing from the ledger.
          </h1>
          <p className="mt-5 text-ink-300 text-balance">
            The page you&apos;re looking for doesn&apos;t exist, moved, or
            never made it past the audit. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
