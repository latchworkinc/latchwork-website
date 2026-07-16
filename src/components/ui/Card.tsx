import { ReactNode } from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/5 bg-interview-card p-6 shadow-interview-card sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
