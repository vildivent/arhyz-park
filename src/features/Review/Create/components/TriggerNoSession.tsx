"use client";

import { signIn } from "next-auth/react";
import { Button } from "~/shared/ui/buttons";

export default function TriggerNoSession() {
  return (
    <Button
      onPress={() => signIn(undefined, { callbackUrl: "/reviews?create=t" })}
    >
      Оставить отзыв
    </Button>
  );
}
