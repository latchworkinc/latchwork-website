import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import Spinner from "./Spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = "primary", loading = false, disabled, className, ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-interview-accent text-white hover:bg-interview-accent-light hover:shadow-interview-glow",
    secondary:
      "border border-white/15 text-white/80 hover:border-interview-accent hover:text-white",
    ghost: "text-white/60 hover:text-white",
  };

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {loading && <Spinner size={16} />}
      {children}
    </button>
  );
});

export default Button;
