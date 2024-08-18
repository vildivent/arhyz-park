"use client";

import { useState } from "react";
import { FieldError, Form, Label, TextField } from "react-aria-components";
import { Button, TextLink } from "~/shared/ui/buttons";
import { Checkbox, TextInput } from "~/shared/ui/inputs";
import { telFormat } from "~/shared/utils/tel";
import type { UserRegistration } from "~/trpc/shared";
import { useForm } from "../lib/hooks/useForm";
import ProfileImageEdit from "./ProfileImage";

export default function RegistrationForm({ user }: { user: UserRegistration }) {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const { onSubmit, errors, setFile, setDeleteImage, isSuccess, isLoading } =
    useForm();

  if (isSuccess)
    return <div className="text-xl">Регистрация прошла успешно!</div>;

  return (
    <Form
      onSubmit={onSubmit}
      validationErrors={errors}
      className="flex w-full flex-col items-center gap-2"
    >
      <ProfileImageEdit
        setFile={setFile}
        setDeleteFile={setDeleteImage}
        currentImage={user?.image}
      />
      <TextField name="image" aria-label="error image">
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField
        name="name"
        maxLength={30}
        isRequired
        className="w-full"
        defaultValue={user?.name ?? ""}
      >
        <Label>Имя</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField
        name="surname"
        className="w-full"
        maxLength={30}
        defaultValue={user?.surname ?? ""}
      >
        <Label>Фамилия</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField
        name="tel"
        className="w-full"
        defaultValue={telFormat(user?.tel ?? "")}
        inputMode="tel"
        onInput={(e) =>
          (e.currentTarget.value = telFormat(e.currentTarget.value))
        }
      >
        <Label>Контактный телефон</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <Checkbox
        isRequired
        defaultSelected={!isSubmitDisabled}
        onChange={(isSelected) => setIsSubmitDisabled(!isSelected)}
      >
        <TermsOfService />
      </Checkbox>

      <TextField name="root" aria-label="error root">
        <FieldError className="font-medium text-err" />
      </TextField>

      <Button type="submit" isDisabled={isSubmitDisabled || isLoading}>
        Завершить
      </Button>
    </Form>
  );
}

function TermsOfService() {
  return (
    <div>
      {/*принимаю условия{" "}
       <Link
        href="/terms-of-service"
        target="_blank"
        rel="noreferrer"
        className="text-darkgray rounded-sm outline-none hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Пользовательского соглашения
      </Link> */}
      Я даю своё согласие АрхызПарку на обработку моей персональной информации
      на условиях, определенных{" "}
      <TextLink
        variant="dark"
        href="/privacy-policy"
        target="_blank"
        rel="noreferrer"
        className="px-0"
      >
        Политикой конфиденциальности.
      </TextLink>
    </div>
  );
}
