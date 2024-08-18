"use client";

import type {
  ListBoxItemProps,
  SelectProps as SelectRACProps,
  ValidationResult,
} from "react-aria-components";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as SelectRAC,
  SelectValue,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { CheckIcon, SelectDownIcon } from "~/shared/ui/icons";

type ListItem = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type SelectProps<T extends object> = {
  label?: string;
  items?: Iterable<T>;
  errorMessage?: string | ((validation: ValidationResult) => string);
} & Omit<SelectRACProps<T>, "children">;

export default function Select({
  label,
  items,
  errorMessage,
  ...props
}: SelectProps<ListItem>) {
  return (
    <SelectRAC className="flex w-full flex-col gap-1" {...props}>
      {({ isOpen, isInvalid }) => (
        <>
          <Label className="text-light cursor-default">{label}</Label>
          <Button
            className={({ isFocusVisible }) =>
              twMerge(
                "bg-primary-main flex items-center rounded-input px-5 py-3 text-start shadow-md outline-none transition",
                isFocusVisible && "ring-2 ring-white",
                isInvalid && "ring-2 ring-err",
              )
            }
          >
            <SelectValue className="flex-1 truncate placeholder-shown:italic" />
            <SelectDownIcon
              className={twMerge("transition", isOpen && "rotate-180")}
            />
          </Button>
          <FieldError className="font-medium text-err">
            {errorMessage}
          </FieldError>
          <Popover
            className={({ isEntering, isExiting }) =>
              twMerge(
                "bg-primary-main max-h-60 w-[--trigger-width] overflow-auto rounded-[1.75rem] shadow-lg ring-1 ring-black/5",
                isEntering && "animate-in fade-in",
                isExiting && "animate-out fade-out",
              )
            }
          >
            <ListBox className="p-1 outline-none" items={items}>
              {(item) => (
                <ListItem id={item.value} textValue={item.value}>
                  {item.icon}
                  {item.label}
                </ListItem>
              )}
            </ListBox>
          </Popover>
        </>
      )}
    </SelectRAC>
  );
}

function ListItem(props: ListBoxItemProps & { children: React.ReactNode }) {
  return (
    <ListBoxItem
      {...props}
      className="focus:bg-primary-hover flex cursor-pointer select-none items-center gap-2 rounded-3xl px-5 py-3 outline-none transition"
    >
      {({ isSelected }) => (
        <>
          <div className="flex flex-1 items-center gap-2 truncate">
            {props.children}
          </div>
          <div className="flex w-5 items-center">
            {isSelected && <CheckIcon />}
          </div>
        </>
      )}
    </ListBoxItem>
  );
}
