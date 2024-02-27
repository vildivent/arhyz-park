import type { AriaRole, ReactNode } from "react";

export default function Card({
  ...props
}: {
  children: ReactNode;
  role?: AriaRole;
}) {
  return (
    <div
      className="gradient flex w-full flex-col items-center gap-5 rounded-3xl p-5 shadow-lg md:flex-row md:items-start md:gap-10"
      {...props}
    />
  );
}
