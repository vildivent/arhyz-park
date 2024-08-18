"use client";

import { FieldError, Form, Label, TextField } from "react-aria-components";
import Spinner from "~/shared/ui/Spinner";
import { Button } from "~/shared/ui/buttons";
import { TextArea, TextInput } from "~/shared/ui/inputs";
import { useFormCreate } from "../lib/hooks/useForm";
import InstructorImage from "./InstructorImage";

export default function InstructorForm({ close }: { close?: () => void }) {
  const { onSubmit, errors, image, setImage, isLoading } = useFormCreate(close);

  return (
    <Form
      onSubmit={onSubmit}
      validationErrors={errors}
      className="flex w-full flex-col items-center gap-2"
    >
      <InstructorImage image={image} setImage={setImage} />
      <TextField name="image" aria-label="error image">
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="name" maxLength={30} className="w-full">
        <Label>Имя</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="surname" maxLength={30} className="w-full">
        <Label>Фамилия</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="description" className="w-full">
        <Label>Описание инструктора</Label>
        <TextArea />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="link" className="w-full">
        <Label>Ссылка бронирования YClients</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="root" aria-label="error root">
        <FieldError className="font-medium text-err" />
      </TextField>

      <Button type="submit" isDisabled={isLoading}>
        Добавить
        {isLoading && <Spinner />}
      </Button>
    </Form>
  );
}
