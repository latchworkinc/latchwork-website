export default function MaintenanceNotice() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-8 text-center sm:p-10">
      <p className="text-lg font-semibold text-white">
        This form is temporarily under maintenance.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        Please try again in a few hours. If you need to reach us in the
        meantime, email{" "}
        <a
          href="mailto:hello@latch-work.com"
          className="underline hover:text-white/80"
        >
          hello@latch-work.com
        </a>
        .
      </p>
    </div>
  );
}
