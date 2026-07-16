import { cloneElement, ReactElement, useId } from "react";
import clsx from "clsx";

type FormFieldProps = {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: ReactElement;
};

export default function FormField({
  label,
  error,
  hint,
  required,
  className,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId: string = children.props.id ?? generatedId;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const control = cloneElement(children, {
    id: fieldId,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  });

  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <label htmlFor={fieldId} className="text-sm font-medium text-white/90">
        {label}
        {required && <span className="ml-1 text-interview-accent-light">*</span>}
      </label>
      {control}
      {hint && !error && (
        <p id={hintId} className="text-xs text-white/40">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
