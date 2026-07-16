import { SelectHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, children, ...props },
  ref
) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={clsx(
          "w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-10 text-sm text-white outline-none transition-colors duration-200",
          "focus:border-interview-accent focus:ring-1 focus:ring-interview-accent",
          "aria-[invalid=true]:border-red-500/60 aria-[invalid=true]:focus:ring-red-500/60",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
        ▾
      </span>
    </div>
  );
});

export default Select;
