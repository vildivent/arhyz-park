"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { TextButton } from "~/shared/ui/buttons";
import { ErrowDownIcon } from "~/shared/ui/icons";
import { cn } from "~/shared/utils/cn";
import { useMeasure } from "~/shared/utils/hooks/useMeasure";

export default function Expand({
  children,
  toggleBarContent,
  square,
}: {
  children: React.ReactNode;
  square: number;
  toggleBarContent?: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const [expandable, setExpandable] = useState(false);
  const [ref, { width, height }] = useMeasure();

  const defaultHeight = useMemo(
    () => (width ? square / width : 0),
    [square, width],
  );

  useEffect(() => {
    setExpandable(height > defaultHeight);
  }, [height, defaultHeight]);

  return (
    <>
      <motion.div
        animate={expandable && { height: expanded ? "auto" : defaultHeight }}
        className="relative overflow-hidden"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
      {expandable ? (
        <div className="flex w-full items-center justify-between gap-2">
          {toggleBarContent}
          {expandable && (
            <TextButton onPress={() => setExpanded(!expanded)}>
              {expanded ? "Свернуть" : "Подробнее"}
              <ErrowDownIcon
                className={cn("transition", expanded && "rotate-180")}
              />
            </TextButton>
          )}
        </div>
      ) : (
        toggleBarContent
      )}
    </>
  );
}

// className={cn(
//   expandable &&
//     !expanded &&
//     "[&>div>*:nth-child(5)]:line-clamp-5 sm:[&>div>*:nth-child(5)]:line-clamp-3 [&>div>*]:opacity-0",
//   "[&>div>*:nth-child(1)]:opacity-100 [&>div>*:nth-child(2)]:opacity-100 [&>div>*:nth-child(3)]:opacity-100 [&>div>*:nth-child(4)]:opacity-100 [&>div>*:nth-child(5)]:opacity-100",
// )}
