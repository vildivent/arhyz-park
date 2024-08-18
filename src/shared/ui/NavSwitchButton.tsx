"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Link } from "~/shared/ui/buttons";

export default function NavSwitchButton({
  children,
  variant,
  href,
}: {
  children: React.ReactNode;
  variant: "start" | "middle" | "end";
  href: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      variant={pathname === href ? "accent" : "primary"}
      className={twMerge(
        "px-6 py-2 shadow-none",
        pathname !== href && "font-normal",
        variant === "start" && "rounded-br-none rounded-tr-none",
        variant === "middle" && "rounded-none",
        variant === "end" && "rounded-bl-none rounded-tl-none",
      )}
    >
      {children}
    </Link>
  );
}
