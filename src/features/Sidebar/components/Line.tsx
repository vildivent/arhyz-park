import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Line({
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={twMerge("w-full px-6 py-2 opacity-80", props.className)}
      {...props}
    >
      <hr />
    </div>
  );
}
