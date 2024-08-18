import { getServerAuthSession } from "~/server/auth";
import SettingsCard from "~/widgets/Profile/components/SettingsCard";
import UserAvatar from "~/shared/ui/UserAvatar";
import { Button } from "~/shared/ui/buttons";

export default async function AvatarChange() {
  const session = await getServerAuthSession();
  return (
    <SettingsCard
      title="Изображение профиля"
      actionButton={<Button variant="primary">Сохранить</Button>}
      additionalContent={
        <UserAvatar
          className="size-20 @2xl:mr-5 @2xl:size-28"
          src={null}
          sizes="14rem"
        />
      }
      hint="Аватар необязателен, но крайне рекомендуем"
    >
      <p>
        Это - Ваш аватар.
        <br />
        Нажмите на него, чтобы сменить
      </p>
    </SettingsCard>
  );
}
