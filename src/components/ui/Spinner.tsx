import clsx from "clsx";

export default function Spinner({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={clsx(
        "inline-block shrink-0 animate-spin rounded-full border-2 border-white/25 border-t-white",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}
