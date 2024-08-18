import { getServerAuthSession } from "~/server/auth";
import NameEditForm from "./NameEditForm";

export default async function NameEdit() {
  const session = await getServerAuthSession();
  return <NameEditForm name={session?.user.name} />;
}
