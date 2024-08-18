import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export default function Frame({
  variant = "main",
  className,
  ...props
}: { variant?: "main" | "mainShort" | "gradient" } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 overflow-hidden rounded-3xl p-5 shadow-lg @container",
        variant === "main" && "text-md bg-primary-main/80",
        variant === "mainShort" &&
          "w-fit bg-primary-main/80 text-center text-lg",
        variant === "gradient" &&
          "bg-gradient-to-br from-gradient-1 to-gradient-2",
        className,
      )}
      {...props}
    />
  );
}
