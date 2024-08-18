import { redirect } from "next/navigation";
import SignIn from "~/features/Auth/SignIn";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInPage() {
  const session = await getServerAuthSession();
  if (session) redirect("/");
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-1">
      <SignIn />
    </div>
  );
}
