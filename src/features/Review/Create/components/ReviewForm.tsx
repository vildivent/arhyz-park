"use client";

import { FieldError, Form, Label, TextField } from "react-aria-components";
import { Button } from "~/shared/ui/buttons";
import { TextArea } from "~/shared/ui/inputs";
import SelectExample from "~/shared/ui/Select";
import { useForm } from "../lib/hooks/useForm";

export default function ReviewForm() {
  const { errors, onSubmit, isSuccess, isLoading } = useForm();

  if (isSuccess)
    return (
      <div className="text-center text-lg">
        Отзыв оставлен и будет опубликован после модерации.
      </div>
    );

  return (
    <Form
      onSubmit={onSubmit}
      validationErrors={errors}
      className="flex w-full flex-col items-center gap-2"
    >
      <SelectExample
        name="type"
        label="Тип отзыва"
        defaultSelectedKey="positive"
        isRequired
        items={[
          {
            value: "positive",
            label: "Положительный",
            icon: <span className="h-3 w-3 rounded-full bg-green-500" />,
          },
          {
            value: "neutral",
            label: "Нейтральный",
            icon: <span className="h-3 w-3 rounded-full bg-gray-500" />,
          },
          {
            value: "negative",
            label: "Отрицательный",
            icon: <span className="h-3 w-3 rounded-full bg-red-500" />,
          },
        ]}
      />

      <TextField name="text" className="w-full" maxLength={2000} isRequired>
        <Label>Отзыв</Label>
        <TextArea />
        <FieldError className="font-medium text-err" />
      </TextField>

      <TextField name="root" aria-label="error root">
        <FieldError className="font-medium text-err" />
      </TextField>

      <Button type="submit" isDisabled={isLoading}>
        Подтвердить
      </Button>
    </Form>
  );
}
