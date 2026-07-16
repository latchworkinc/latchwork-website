import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200",
        "focus:border-interview-accent focus:ring-1 focus:ring-interview-accent",
        "aria-[invalid=true]:border-red-500/60 aria-[invalid=true]:focus:ring-red-500/60",
        className
      )}
      {...props}
    />
  );
});

export default Input;
