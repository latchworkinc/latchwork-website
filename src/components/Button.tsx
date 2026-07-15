import Link from "next/link";
import { ReactNode } from "react";
import clsx from "@/lib/clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-emerald-500 text-charcoal-950 hover:bg-emerald-400 hover:shadow-glow",
    secondary:
      "border border-charcoal-500 text-ink-100 hover:border-emerald-500 hover:text-emerald-300",
    ghost: "text-ink-100 hover:text-emerald-300",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={clsx(base, variants[variant], className)} {...props}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
