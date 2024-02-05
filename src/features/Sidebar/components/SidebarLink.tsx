"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Link } from "~/shared/ui/buttons";

type LinkItemProps = {
  href: string;
  label: string;
  close: () => void;
};
export default function SidebarLink({ href, label, close }: LinkItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      variant={pathname === href ? "accent" : "secondary"}
      className={twMerge(
        "justify-start px-6 py-2 shadow-none",
        pathname !== href && "font-normal",
      )}
      onPress={close}
    >
      {label}
    </Link>
  );
}
