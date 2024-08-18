import type { ReactNode } from "react";
import { cn } from "~/shared/utils/cn";
import Frame from "~/shared/ui/Frame";

export default function SettingsCard({
  title,
  actionButton,
  children,
  additionalContent,
  hint,
  className,
}: {
  title: string;
  actionButton: ReactNode;
  children: ReactNode;
  additionalContent?: ReactNode;
  hint?: string;
  className?: string;
}) {
  return (
    <Frame variant="gradient" className={className}>
      <div className="flex flex-col gap-5 @2xl:p-5">
        <div className="flex flex-col items-center justify-between gap-5 @[16rem]:flex-row">
          <div className="flex grow flex-col gap-5 @lg:grow-0">
            <h2 className="font-p text-xl font-semibold">{title}</h2>
            <div className="flex flex-col gap-2">{children}</div>
          </div>
          {additionalContent}
        </div>
        <div
          className={cn(
            "flex flex-col items-center gap-2 @2xl:flex-row",
            hint ? "justify-between" : "justify-end",
          )}
        >
          {hint && <p className="text-center text-light/50">{hint}</p>}
          {actionButton}
        </div>
      </div>
    </Frame>
  );
}
