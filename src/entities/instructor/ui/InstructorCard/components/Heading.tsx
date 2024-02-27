import { cn } from "~/shared/utils/cn";

export default function Heading({
  children,
  actionMenu,
  className,
}: {
  children: React.ReactNode;
  actionMenu: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col-reverse items-center gap-5 md:flex-row md:items-start",
        className,
      )}
    >
      <div className="flex items-center gap-2">{children}</div>
      {actionMenu && <div className="ml-auto">{actionMenu}</div>}
    </div>
  );
}
