"use client";

import type { Session } from "next-auth";
import { twMerge } from "tailwind-merge";
import UserAvatar from "~/components/UserAvatar";
import { navLinks } from "~/shared/data";
import { Button } from "~/shared/ui/buttons";
import { CloseIcon } from "~/shared/ui/icons";
import { SignInButton, SignOutButton } from "./AuthButtons";
import Line from "./Line";
import SidebarLink from "./SidebarLink";

type SidebarContentProps = {
  session: Session | null;
  close: () => void;
};
export default function SidebarContent({
  close,
  session,
}: SidebarContentProps) {
  return (
    <div className="flex flex-col">
      <div className={twMerge("flex gap-2", !session && "mb-2")}>
        {!session && <SignInButton close={close} />}
        <Button
          variant="secondary"
          className="ml-auto h-10 w-10 rounded-full p-2 shadow-none"
          onPress={close}
        >
          <CloseIcon />
        </Button>
      </div>
      {session && (
        <div className="flex items-center gap-2 p-3 pt-0">
          <UserAvatar src={session.user.image} sizes="5rem" />
          <span className="max-w-40 truncate">{session.user.name}</span>
        </div>
      )}

      {navLinks.map((link) => (
        <SidebarLink
          key={link.href}
          href={link.href}
          label={link.label}
          close={close}
        />
      ))}

      {session && (
        <>
          <Line />
          {session.user.role === "admin" && (
            <SidebarLink
              href="/admin"
              label="Администрирование"
              close={close}
            />
          )}
          <SidebarLink href="/profile" label="Профиль" close={close} />
          <SignOutButton close={close} />
        </>
      )}
    </div>
  );
}
