"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Link } from "~/shared/ui/buttons";

type NavButtonProps = {
  children: React.ReactNode;
  variant: "start" | "middle" | "end";
  href: string;
};
export default function NavButton({ children, variant, href }: NavButtonProps) {
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
