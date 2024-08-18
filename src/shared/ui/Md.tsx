import Markdown from "react-markdown";
import { cn } from "~/shared/utils/cn";

export default function Md({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <Markdown
      className={cn(
        "flex flex-col gap-2",
        "[&_h2]:font-p [&_h2]:text-xl [&_h2]:font-semibold",
        "[&_h3]:text-md [&_h3]:font-p [&_h3]:font-semibold",
        "[&_ul]:ml-5 [&_ul]:list-disc",
        "[&_ol]:ml-5 [&_ol]:list-decimal",
        "[&_em]:font-semibold [&_em]:not-italic [&_em]:text-secondary-main",
        "[&_strong]:text-base",
        className,
      )}
      allowedElements={[
        "h2",
        "h3",
        "p",
        "ul",
        "ol",

        "li",
        "hr",
        "br",
        "em",
        "strong",
      ]}
    >
      {children}
    </Markdown>
  );
}
