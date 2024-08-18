"use client";

import type { Session } from "next-auth";
import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Button } from "~/shared/ui/buttons";
import { MenuIcon } from "~/shared/ui/icons";
import SidebarContent from "./SidebarContent";

export default function SidebarModal({ session }: { session: Session | null }) {
  return (
    <DialogTrigger>
      <Button
        variant="primary"
        aria-label="menu"
        className="h-10 w-10 rounded-full p-2"
      >
        <MenuIcon />
      </Button>
      <ModalOverlay
        isDismissable
        className={({ isEntering, isExiting }) =>
          twMerge(
            "fixed inset-0 z-50 flex items-start justify-end bg-black/25 backdrop-blur transition",
            isEntering && "ease-out animate-in fade-in",
            isExiting && "ease-in animate-out fade-out",
          )
        }
      >
        <Modal
          className={({ isEntering, isExiting }) =>
            twMerge(
              "min-w-60 rounded-l-[1.75rem] bg-secondary-main p-2 shadow-xl",
              isEntering && "ease-out animate-in slide-in-from-right-full",
              isExiting && "ease-in animate-out slide-out-to-right-full",
            )
          }
        >
          <Dialog className="outline-none">
            {({ close }) => <SidebarContent close={close} session={session} />}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
