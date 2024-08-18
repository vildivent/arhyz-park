import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import uploadImage from "~/shared/utils/uploadImage";
import { api } from "~/trpc/react";
import formParse from "../formParse";

type FormError = {
  name?: string | string[];
  surname?: string | string[];
  tel?: string | string[];
  image?: string | string[];
  root?: string | string[];
};

export function useForm() {
  const [file, setFile] = useState<File | null>(null);
  const [deleteImage, setDeleteImage] = useState(false);
  const [errors, setErrors] = useState<FormError>({});
  const [isImageLoading, setIsImageLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? "/";

  const { data: token } = api.image.getToken.useQuery();

  const {
    mutate: submit,
    isSuccess,
    isLoading,
  } = api.user.submit.useMutation({
    onSuccess() {
      router.push(callbackUrl);
      router.refresh();
    },
    onError(error) {
      const serverErrorMessage =
        "Произошла ошибка регистрации. Повторите попытку позже.";
      const fields = ["name", "surname", "tel"] as const;
      fields.forEach((field) => {
        const message = error?.data?.zodError?.fieldErrors[field];
        setErrors((state) => ({ ...state, [field]: message }));
      });

      setErrors((state) =>
        !state.name && !state.surname && !state.tel
          ? { root: serverErrorMessage }
          : { ...state, root: undefined },
      );
    },
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsImageLoading(true);
    await onFormSubmit(e);
    setIsImageLoading(false);
  }

  async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    setErrors({});

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = formParse(data);
    if (result.errors) return setErrors(result.errors);

    result.data.imageId = deleteImage ? null : undefined;

    if (file) {
      const serverErrorMessage = "Произошла ошибка загрузки изображения.";
      const res = await uploadImage(file, token ?? "", "user");

      if (!res.success)
        return setErrors((prev) => ({ ...prev, image: serverErrorMessage }));

      if (!res.data.success) {
        const errorMessage = res.data.message;
        return setErrors((prev) => ({ ...prev, image: errorMessage }));
      }

      result.data.imageId = res.data.imageId;
      console.log("Изображение сохранено.");
    }

    submit(result.data);
  }
  return {
    onSubmit,
    errors,
    setFile,
    setDeleteImage,
    isSuccess,
    isLoading: isImageLoading || isLoading,
  };
}
