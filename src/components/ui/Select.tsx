"use client";

import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";

type SelectOption = { value: string; label: string };

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export default function Select({
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Select an option",
  id,
  name,
  className,
  ...aria
}: SelectProps) {
  const selected = options.find((option) => option.value === value);

  return (
    <Listbox value={value} onChange={onChange} name={name}>
      <div className="relative">
        <ListboxButton
          id={id}
          onBlur={onBlur}
          {...aria}
          className={clsx(
            "flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-white outline-none transition-colors duration-200",
            "focus:border-interview-accent focus:ring-1 focus:ring-interview-accent",
            "data-[open]:border-interview-accent data-[open]:ring-1 data-[open]:ring-interview-accent",
            "aria-[invalid=true]:border-red-500/60 aria-[invalid=true]:focus:ring-red-500/60",
            className
          )}
        >
          <span className={clsx(selected ? "text-white" : "text-white/30")}>
            {selected ? selected.label : placeholder}
          </span>
          <span className="text-white/40">▾</span>
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            anchor="bottom start"
            transition
            className={clsx(
              "z-50 mt-2 max-h-64 w-[var(--button-width)] overflow-auto rounded-xl border border-white/10 bg-interview-card p-1.5 shadow-interview-card outline-none",
              "origin-top transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            )}
          >
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={clsx(
                  "cursor-pointer select-none rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors duration-150",
                  "data-[focus]:bg-interview-accent/15 data-[focus]:text-white",
                  "data-[selected]:bg-interview-accent/20 data-[selected]:text-interview-accent-light data-[selected]:font-medium"
                )}
              >
                {option.label}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
