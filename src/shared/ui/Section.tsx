import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { cn } from "~/shared/utils/cn";

export default function Section({
  reverse,
  className,
  children,
  heading,
  ...props
}: { reverse?: boolean; heading?: ReactNode } & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>) {
  if (!heading)
    return (
      <section
        className={cn(
          "flex flex-col items-center gap-10 lg:flex-row",
          reverse && "flex-col-reverse",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );

  return (
    <section
      className={cn("flex flex-col items-center gap-10", className)}
      {...props}
    >
      {heading}
      <div
        className={cn(
          "flex flex-col items-center gap-10 lg:flex-row",
          reverse && "flex-col-reverse",
        )}
      >
        {children}
      </div>
    </section>
  );
}
