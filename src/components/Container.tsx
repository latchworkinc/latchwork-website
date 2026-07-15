import { ReactNode } from "react";
import clsx from "@/lib/clsx";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl container-px", className)}>
      {children}
    </div>
  );
}
