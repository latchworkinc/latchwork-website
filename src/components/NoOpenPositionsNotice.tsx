export default function NoOpenPositionsNotice() {
  return (
    <div className="rounded-2xl border border-charcoal-600/60 bg-charcoal-900/50 p-8 text-center sm:p-10">
      <p className="text-lg font-semibold text-white">
        No open positions available right now.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        We&apos;re not accepting applications at the moment. If you&apos;d
        like to be considered for future openings, email{" "}
        <a
          href="mailto:hiring@latch-work.com"
          className="underline hover:text-white/80"
        >
          hiring@latch-work.com
        </a>
        .
      </p>
    </div>
  );
}
