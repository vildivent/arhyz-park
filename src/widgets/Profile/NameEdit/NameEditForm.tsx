"use client";

import { FieldError, Form, TextField } from "react-aria-components";
import Spinner from "~/shared/ui/Spinner";
import { Button } from "~/shared/ui/buttons";
import { TextInput } from "~/shared/ui/inputs";
import SettingsCard from "../components/SettingsCard";
import { useName } from "./lib/useName";

export default function NameEditForm({ name }: { name?: string | null }) {
  const { onSubmit, error, changed, setChanged, isLoading } = useName();

  return (
    <Form onSubmit={onSubmit} validationErrors={error} className="w-full">
      <SettingsCard
        title="Имя"
        actionButton={
          changed && (
            <Button variant="primary" type="submit" isDisabled={isLoading}>
              Сохранить
              {isLoading && <Spinner variant="light" />}
            </Button>
          )
        }
        hint="Имя должно содержать от 3 до 30 символов"
      >
        <p>Пожалуйста, введите Ваше имя</p>
        <TextField
          name="name"
          maxLength={30}
          isRequired
          defaultValue={name ?? ""}
          onChange={() => setChanged(true)}
          aria-label="Имя"
          className="flex flex-col gap-1"
        >
          <TextInput />
          <FieldError className=" font-medium text-err" />
        </TextField>
      </SettingsCard>
    </Form>
  );
}
