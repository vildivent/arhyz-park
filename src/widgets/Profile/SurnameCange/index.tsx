"use client";

import SettingsCard from "~/widgets/Profile/components/SettingsCard";
import { Button } from "~/shared/ui/buttons";
import { TextInput } from "~/shared/ui/inputs";

export default function SurnameChange() {
  return (
    <SettingsCard
      title="Фамилия"
      actionButton={<Button variant="primary">Сохранить</Button>}
      hint="Фамилия должна содержать от 3 до 30 символов"
    >
      <p>Ваша фамилия (необязательно)</p>
      <TextInput />
    </SettingsCard>
  );
}
