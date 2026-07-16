import { TextareaHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { className, rows = 5, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={clsx(
        "w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-white/30 outline-none transition-colors duration-200",
        "focus:border-interview-accent focus:ring-1 focus:ring-interview-accent",
        "aria-[invalid=true]:border-red-500/60 aria-[invalid=true]:focus:ring-red-500/60",
        className
      )}
      {...props}
    />
  );
});

export default TextArea;
