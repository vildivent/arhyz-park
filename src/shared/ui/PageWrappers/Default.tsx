import { cn } from "~/shared/utils/cn";

export default function DefaultPageWrapper({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "mx-auto flex max-w-4xl flex-col items-center gap-10 p-2 pb-40 sm:p-5 sm:pb-60",
        className,
      )}
    >
      <h1 className="text-center text-4xl text-primary-main">{title}</h1>
      {children}
    </main>
  );
}
