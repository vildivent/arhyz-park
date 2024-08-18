import { redirect } from "next/navigation";
import SignOut from "~/features/Auth/SignOut";
import { getServerAuthSession } from "~/server/auth";

export default async function SignOutPage() {
  const session = await getServerAuthSession();
  if (!session) redirect("/");
  return <SignOut user={session.user} />;
}
