import { cn } from "~/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block animate-pulse rounded-md bg-primary/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
