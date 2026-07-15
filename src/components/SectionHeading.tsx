import Reveal from "./Reveal";
import clsx from "@/lib/clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="kicker">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl italic tracking-tight text-ink-100 text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base md:text-lg text-ink-300 text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
