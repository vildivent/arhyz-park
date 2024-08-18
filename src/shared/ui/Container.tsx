import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div
      className={twMerge(
        "gradient flex flex-col items-center gap-5 rounded-3xl p-4 shadow-lg sm:p-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
