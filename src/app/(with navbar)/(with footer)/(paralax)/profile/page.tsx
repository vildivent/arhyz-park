import DefaultPageWrapper from "~/shared/ui/PageWrappers/Default";
import authCheck from "~/shared/utils/authCheck";
import AvatarChange from "~/widgets/Profile/AvatarChange";
import NameEdit from "~/widgets/Profile/NameEdit";
import SurnameChange from "~/widgets/Profile/SurnameCange";

export default async function ProfilePage() {
  await authCheck("/profile");
  return (
    <DefaultPageWrapper title="Настройки профиля">
      <AvatarChange />
      <NameEdit />
      <SurnameChange />
    </DefaultPageWrapper>
  );
}
