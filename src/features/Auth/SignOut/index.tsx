"use client";

import { type User } from "next-auth";
import { signOut } from "next-auth/react";
import Logo from "~/components/Logo";
import UserAvatar from "~/shared/ui/UserAvatar";
import Container from "~/shared/ui/Container";
import { Button } from "~/shared/ui/buttons";
import { SignOutIcon } from "~/shared/ui/icons";

export default function SignOut({ user }: { user?: User }) {
  return (
    <Container className="max-w-lg">
      <Logo />
      <h1 className="text-3xl">Выход из учётной записи</h1>
      {user?.name && (
        <div className="flex flex-wrap items-center gap-2">
          <span>Вы авторизованы, как</span>
          <div className="flex items-center gap-2">
            <UserAvatar src={user.image} />
            <span>{user.name + "."}</span>
          </div>
        </div>
      )}

      <Button variant="secondary" className="w-full" onPress={() => signOut()}>
        <SignOutIcon />
        <span>Выход</span>
      </Button>
    </Container>
  );
}
