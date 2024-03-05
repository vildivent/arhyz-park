"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "~/shared/ui/buttons";
import { cn } from "~/shared/utils/cn";

type ButtonData = {
  id: string;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function DaysSwitch({
  data,
}: {
  data: ButtonData[];
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "children"
>) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}
    >
      {data.map((button, index) => (
        <DaysSwitchButton
          key={button.id}
          variant={
            index === 0 ? "start" : index === data.length - 1 ? "end" : "middle"
          }
          isSelected={button.isSelected}
          onPress={button.onPress}
        >
          {button.label}
        </DaysSwitchButton>
      ))}
    </div>
  );
}

function DaysSwitchButton({
  children,
  variant,
  isSelected,
  onPress,
}: {
  children: React.ReactNode;
  variant: "start" | "middle" | "end";
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <Button
      variant={isSelected ? "accent" : "primary"}
      className={cn(
        "px-6 py-2 shadow-none",
        !isSelected && "font-normal",
        variant === "start" && "rounded-br-none rounded-tr-none",
        variant === "middle" && "rounded-none",
        variant === "end" && "rounded-bl-none rounded-tl-none",
      )}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
