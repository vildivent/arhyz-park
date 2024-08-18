import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { api } from "~/trpc/react";

type FormError = { name?: string | string[] };

export function useName() {
  const [error, setError] = useState<FormError>();
  const [changed, setChanged] = useState(false);
  const router = useRouter();

  const { mutate, isLoading } = api.user.nameUpdate.useMutation({
    onSuccess() {
      setChanged(false);
      router.refresh();
    },
    onError(error) {
      const serverErrorMessage = "Произошла ошибка. Повторите попытку позже.";
      const message = error?.data?.zodError?.formErrors;
      setError({ name: message ?? serverErrorMessage });
    },
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await onFormSubmit(e);
  }

  async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    setError({ name: undefined });
    const data = Object.fromEntries(new FormData(e.currentTarget)).name;
    if (!data) return setError({ name: "Введите имя" });
    if (typeof data === "string") mutate(data);
  }

  return {
    onSubmit,
    error,
    changed,
    setChanged,
    isLoading,
  };
}
