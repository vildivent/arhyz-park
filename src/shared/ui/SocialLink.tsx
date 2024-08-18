"use client";

import { Link, type LinkProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export default function SocialLink({
  className,
  children,
  ...props
}: { className?: string } & Omit<LinkProps, "className">) {
  return (
    <Link
      className={({ isFocusVisible }) =>
        twMerge(
          "flex items-center gap-2 rounded-md outline-none transition hover:-translate-y-1",
          isFocusVisible && "outline-2 outline-white",
          className,
        )
      }
      target="_blank"
      rel="noreffer"
      {...props}
    >
      {children}
    </Link>
  );
}
