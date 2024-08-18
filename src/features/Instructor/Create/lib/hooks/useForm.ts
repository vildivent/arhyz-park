import type { TRPCClientErrorLike } from "@trpc/client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { AppRouter } from "~/server/api/root";
import uploadImage from "~/shared/utils/uploadImage";
import { api } from "~/trpc/react";
import formParse from "../formParse";

type FormError = {
  name?: string | string[];
  surname?: string | string[];
  description?: string | string[];
  link?: string | string[];
  image?: string | string[];
  root?: string | string[];
};

export type InstructorImage = {
  id: string | null;
  file: File | null;
  url?: string;
};

export function useFormCreate(onSuccess?: () => void) {
  const [image, setImage] = useState<InstructorImage>({ id: null, file: null });
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [errors, setErrors] = useState<FormError>({});

  const router = useRouter();
  const { data: token } = api.image.getToken.useQuery();

  function onError(error: TRPCClientErrorLike<AppRouter>) {
    const serverErrorMessage = "Произошла ошибка. Повторите попытку позже.";
    const fields = ["name", "surname", "description", "link"] as const;
    fields.forEach((field) => {
      const message = error?.data?.zodError?.fieldErrors[field];
      setErrors((state) => ({ ...state, [field]: message }));
    });

    setErrors((state) =>
      !(state.name ?? state.surname ?? state.description ?? state.link)
        ? { root: serverErrorMessage }
        : { ...state, root: undefined },
    );
  }

  const { mutate, isLoading } = api.instructor.create.useMutation({
    onSuccess() {
      router.refresh();
      if (onSuccess) onSuccess();
    },
    onError,
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
    if (image.id) result.data.imageId = image.id;
    if (image.file && !image.id) {
      const serverErrorMessage = "Произошла ошибка загрузки изображения.";
      const res = await uploadImage(image.file, token ?? "", "instructor");

      if (!res.success)
        return setErrors((prev) => ({ ...prev, image: serverErrorMessage }));

      if (!res.data.success) {
        const errorMessage = res.data.message;
        return setErrors((prev) => ({ ...prev, image: errorMessage }));
      }
      const id = res.data.imageId;
      setImage((state) => ({ ...state, id }));
      result.data.imageId = id;
      console.log("Изображение сохранено.");
    }
    mutate(result.data);
  }
  return {
    onSubmit,
    errors,
    image,
    setImage,
    isLoading: isImageLoading || isLoading,
  };
}
