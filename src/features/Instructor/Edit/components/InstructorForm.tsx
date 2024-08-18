"use client";

import { FieldError, Form, Label, TextField } from "react-aria-components";
import Spinner from "~/shared/ui/Spinner";
import { Button } from "~/shared/ui/buttons";
import { TextArea, TextInput } from "~/shared/ui/inputs";
import { type Instructor } from "~/trpc/shared";
import { useFormEdit } from "../lib/hooks/useFormEdit";
import InstructorImage from "./InstructorImage";

export default function InstructorForm({
  instructor,
  close,
}: {
  instructor: Instructor;
  close?: () => void;
}) {
  const { onSubmit, errors, image, setImage, isLoading } = useFormEdit({
    instructor,
    onSuccess: close,
  });

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

      <TextField
        name="name"
        maxLength={30}
        className="w-full"
        defaultValue={instructor.name}
      >
        <Label>Имя</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField
        name="surname"
        maxLength={30}
        className="w-full"
        defaultValue={instructor.surname}
      >
        <Label>Фамилия</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField
        name="description"
        className="w-full"
        defaultValue={instructor.description}
      >
        <Label>Описание инструктора</Label>
        <TextArea />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="link" className="w-full" defaultValue={instructor.link}>
        <Label>Ссылка бронирования YClients</Label>
        <TextInput />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="root" aria-label="error root">
        <FieldError className="font-medium text-err" />
      </TextField>

      <Button type="submit" isDisabled={isLoading}>
        Сохранить
        {isLoading && <Spinner />}
      </Button>
    </Form>
  );
}
