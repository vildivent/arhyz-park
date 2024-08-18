"use client";

import { Link, type LinkProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export default function GradientTel({
  className,
  ...props
}: { className?: string } & Omit<LinkProps, "className">) {
  return (
    <Link
      className={({ isFocusVisible, isHovered }) =>
        twMerge(
          "w-fit animate-gradient rounded-md bg-gradient-to-r from-accent-hover via-white/60 to-accent-hover bg-300% bg-clip-text p-1 text-xl font-bold text-transparent outline-none transition",
          isHovered && "scale-[0.97] text-white/70",
          isFocusVisible && "outline-2 outline-white",
          className,
        )
      }
      {...props}
    />
  );
}
