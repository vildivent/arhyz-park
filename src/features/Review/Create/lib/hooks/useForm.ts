import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { api } from "~/trpc/react";
import formParse from "../formParse";

type FormError = {
  type?: string | string[];
  text?: string | string[];
  root?: string | string[];
};

export function useForm() {
  const [errors, setErrors] = useState<FormError>({});
  const router = useRouter();

  const {
    mutate: submit,
    isSuccess,
    isLoading,
  } = api.review.create.useMutation({
    onSuccess() {
      router.refresh();
    },
    onError(error) {
      const serverErrorMessage = "Произошла ошибка. Повторите попытку позже.";
      const fields = ["type", "text"] as const;
      fields.forEach((field) => {
        const message = error?.data?.zodError?.fieldErrors[field];
        setErrors((state) => ({ ...state, [field]: message }));
      });

      setErrors((state) =>
        !state.type && !state.text
          ? { root: serverErrorMessage }
          : { ...state, root: undefined },
      );
    },
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = formParse(data);
    if (result.errors) return setErrors(result.errors);
    submit(result.data);
  }

  return {
    onSubmit,
    errors,
    isSuccess,
    isLoading,
  };
}
