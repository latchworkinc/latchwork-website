import clsx from "clsx";

type RadioOption = { label: string; value: string };

type RadioGroupProps = {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: RadioOption[];
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export default function RadioGroup({
  name,
  value,
  onChange,
  onBlur,
  options,
  id,
  ...aria
}: RadioGroupProps) {
  return (
    <div id={id} role="radiogroup" className="flex gap-3" {...aria}>
      {options.map((option, index) => {
        const checked = value === option.value;
        return (
          <label
            key={option.value}
            className={clsx(
              "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors duration-200",
              checked
                ? "border-interview-accent bg-interview-accent/10 text-white"
                : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={checked}
              onChange={() => onChange(option.value)}
              onBlur={onBlur}
              autoFocus={false}
              tabIndex={checked || (!value && index === 0) ? 0 : -1}
              className="sr-only"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}
