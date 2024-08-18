"use client";

import type { ButtonProps, LinkProps } from "react-aria-components";
import { Button as ButtonRAC, Link as LinkRAC } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Button({
  className,
  variant = "accent",
  ...props
}: Omit<ButtonProps, "className"> & {
  className?: string;
  variant?: "accent" | "primary" | "secondary" | "warning";
}) {
  return (
    <ButtonRAC
      className={({ isFocusVisible, isDisabled }) =>
        twMerge(
          "flex items-center justify-center gap-2 truncate rounded-full px-7 py-3 font-medium shadow-lg outline-none transition",
          isFocusVisible && "z-10 outline-2 outline-white",
          isDisabled && "text-opacity-50 shadow-none",
          variant === "accent" &&
            "bg-accent-main text-dark hover:bg-accent-hover pressed:bg-accent-press",
          variant === "primary" &&
            "bg-primary-main text-light hover:bg-primary-hover pressed:bg-primary-press",
          variant === "secondary" &&
            "bg-secondary-main text-light hover:bg-secondary-hover pressed:bg-secondary-press",
          variant === "warning" &&
            "bg-warning-main text-light hover:bg-warning-hover pressed:bg-warning-press",
          className,
        )
      }
      {...props}
    />
  );
}

export function Link({
  className,
  variant = "accent",
  ...props
}: Omit<LinkProps, "className"> & {
  className?: string;
  variant?: "accent" | "primary" | "secondary";
}) {
  return (
    <LinkRAC
      className={({ isFocusVisible, isDisabled }) =>
        twMerge(
          "flex items-center justify-center gap-2 truncate rounded-full px-7 py-3 font-medium shadow-md outline-none transition",
          isFocusVisible && "z-10 outline-2 outline-white",
          isDisabled && "text-opacity-50 shadow-none",
          variant === "accent" &&
            "bg-accent-main text-dark hover:bg-accent-hover pressed:bg-accent-press",
          variant === "primary" &&
            "bg-primary-main text-light hover:bg-primary-hover pressed:bg-primary-press",
          variant === "secondary" &&
            "bg-secondary-main text-light hover:bg-secondary-hover pressed:bg-secondary-press",
          className,
        )
      }
      {...props}
    />
  );
}

export function TextButton({
  className,
  variant = "light",
  ...props
}: Omit<ButtonProps, "className"> & {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <ButtonRAC
      className={({ isFocusVisible, isDisabled, isPressed, isHovered }) =>
        twMerge(
          "flex items-center justify-center gap-2 truncate rounded-md outline-none transition",
          isFocusVisible && "z-10 outline-2 outline-white",
          isHovered && "text-opacity-75",
          (isDisabled || isPressed) && "text-opacity-50",
          variant === "light" && "text-light",
          variant === "dark" && "text-dark",
          className,
        )
      }
      {...props}
    />
  );
}

export function TextLink({
  className,
  variant = "light",
  ...props
}: Omit<LinkProps, "className"> & {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <LinkRAC
      className={({ isFocusVisible, isDisabled, isPressed, isHovered }) =>
        twMerge(
          "flex w-fit items-center justify-center gap-2 truncate rounded-md outline-none transition",
          isFocusVisible && "z-10 outline-2 outline-white",
          isHovered && "text-opacity-75",
          (isDisabled || isPressed) && "text-opacity-50",
          variant === "light" && "text-light",
          variant === "dark" && "text-dark",
          className,
        )
      }
      {...props}
    />
  );
}
