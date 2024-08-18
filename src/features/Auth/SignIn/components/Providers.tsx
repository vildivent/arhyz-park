"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button } from "~/shared/ui/buttons";
import { GoogleIcon, YandexIcon } from "~/shared/ui/icons";

export default function Providers() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? undefined;
  const error = params.get("error") ?? undefined;
  const errorMessage =
    "Произошла ошибка. Повторите попытку или попробуйте другой сервис.";

  return (
    <div className="flex w-full flex-col gap-2">
      <Button
        variant="secondary"
        onPress={() => signIn("google", { callbackUrl })}
      >
        <GoogleIcon />
        <span>Войти через Google</span>
      </Button>
      <Button
        variant="secondary"
        onPress={() => signIn("yandex", { callbackUrl })}
      >
        <YandexIcon />
        <span>Войти через Яндекс</span>
      </Button>
      {/* <Button variant="secondary">
        <VKIcon />
        <span>Войти через ВКонтакте</span>
      </Button> */}
      {error && <span className="font-medium text-err">{errorMessage}</span>}
    </div>
  );
}
