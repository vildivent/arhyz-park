"use client";

import type { ReactNode } from "react";
import {
  Checkbox as CheckboxRAC,
  Input,
  TextArea as TextAreaRAC,
} from "react-aria-components";
import type {
  CheckboxProps,
  InputProps,
  TextAreaProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import textAreaStyle from "~/styles/text-area-scrollbar.module.css";

export function TextInput({
  className,
  onFocus,
  ...props
}: Omit<InputProps, "className"> & { className?: string }) {
  return (
    <Input
      className={({ isInvalid, isFocused }) =>
        twMerge(
          "w-full rounded-full bg-primary-main px-5 py-3 outline-none outline-offset-0 transition",
          "selection:bg-primary-hover disabled:text-light/50",
          isFocused && "ring-2 ring-white",
          isInvalid && "ring-2 ring-err",
          className,
        )
      }
      onFocus={(e) => {
        e.currentTarget.select();
        if (onFocus) onFocus(e);
      }}
      {...props}
    />
  );
}

export function TextArea({
  className,
  ...props
}: Omit<TextAreaProps, "className"> & { className?: string }) {
  return (
    <TextAreaRAC
      className={({ isInvalid, isFocused }) =>
        twMerge(
          "h-60 w-full resize-none rounded-3xl bg-primary-main px-5 py-3 outline-none outline-offset-0 transition",
          "selection:bg-primary-hover disabled:text-light/50",
          isFocused && "ring-2 ring-white",
          isInvalid && "ring-2 ring-err",
          textAreaStyle.scroll,
          className,
        )
      }
      {...props}
    />
  );
}

export function Checkbox({
  className,
  children,
  ...props
}: Omit<CheckboxProps, "className | children"> & {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <CheckboxRAC
      className={twMerge("group flex items-start gap-2", className)}
      {...props}
    >
      <div
        className={twMerge(
          "mt-[2px] flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-md border-2 border-white transition-all",
          "group-pressed:border-white/50 group-disabled:opacity-50",
          "group-selected:border-secondary-1 group-selected:bg-secondary-1 group-selected:group-pressed:border-secondary-2 group-selected:group-pressed:bg-secondary-2",
          "group-indeterminate:border-secondary-1 group-indeterminate:bg-secondary-1 group-indeterminate:group-pressed:border-secondary-2 group-indeterminate:group-pressed:bg-secondary-2",
          "group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-white",
        )}
      >
        <svg
          className={twMerge(
            "h-4 w-4 fill-none stroke-white stroke-[3px] transition-all [stroke-dashoffset:66px]",
            "group-selected:[stroke-dashoffset:44px]",
            "group-indeterminate:fill-white group-indeterminate:stroke-none group-indeterminate:[stroke-dashoffset:44px]",
          )}
          viewBox="0 0 18 18"
          aria-hidden="true"
          strokeDasharray="22px"
        >
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </CheckboxRAC>
  );
}
