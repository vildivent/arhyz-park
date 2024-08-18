"use client";

import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type DialogProps,
} from "react-aria-components";
import { cn } from "~/shared/utils/cn";

export default function ModalDialog({
  trigger,
  children,
  isDismissable,
  defaultOpen,
  ...props
}: {
  trigger: React.ReactNode;
  isDismissable?: boolean;
  defaultOpen?: boolean;
} & DialogProps) {
  return (
    <DialogTrigger {...props} defaultOpen={defaultOpen}>
      {trigger}
      <ModalOverlay
        isKeyboardDismissDisabled={!isDismissable}
        isDismissable={isDismissable}
        className={({ isEntering, isExiting }) =>
          cn(
            "fixed inset-0 z-50 flex min-h-full items-center justify-center overflow-y-auto bg-black/25 p-2 backdrop-blur transition",
            isEntering && "ease-out animate-in fade-in",
            isExiting && "ease-in animate-out fade-out",
          )
        }
      >
        <Modal
          className={({ isEntering, isExiting }) =>
            cn(
              "my-auto grid w-full max-w-lg content-center transition",
              isEntering && "ease-out animate-in zoom-in-95",
              isExiting && "ease-in animate-out zoom-out-95",
            )
          }
        >
          <Dialog className="relative outline-none">{children}</Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
