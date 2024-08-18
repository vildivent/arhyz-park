import { cn } from "~/shared/utils/cn";

const DisplayName = ({
  displayName,
  className,
}: {
  displayName: string;
  className?: string;
}) => (
  <span className={cn("truncate text-xl font-semibold", className)}>
    {displayName}
  </span>
);

export default DisplayName;
