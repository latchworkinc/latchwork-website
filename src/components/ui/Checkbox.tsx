import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, error, className, id, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={error && id ? `${id}-error` : undefined}
          className={clsx(
            "mt-0.5 h-5 w-5 shrink-0 rounded-md border border-white/20 bg-white/[0.03] accent-interview-accent outline-none transition-colors duration-200",
            "focus-visible:ring-2 focus-visible:ring-interview-accent",
            className
          )}
          {...props}
        />
        <span className="text-sm leading-relaxed text-white/70">{label}</span>
      </label>
      {error && (
        <p id={id ? `${id}-error` : undefined} role="alert" className="pl-8 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

export default Checkbox;
