"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "~/shared/ui/buttons";
import { PersonIcon } from "~/shared/ui/icons";

export function SignInButton({ close }: { close: () => void }) {
  return (
    <Button
      variant="primary"
      className="justify-start gap-2 px-4 py-2 font-normal"
      onPress={async () => {
        await signIn();
        close();
      }}
    >
      <PersonIcon />
      Вход
    </Button>
  );
}

export function SignOutButton({ close }: { close: () => void }) {
  return (
    <Button
      variant="secondary"
      className="justify-start px-6 py-2 font-normal shadow-none"
      onPress={async () => {
        await signOut();
        close();
      }}
    >
      Выход
    </Button>
  );
}
