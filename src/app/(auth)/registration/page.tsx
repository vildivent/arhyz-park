import { notFound } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import Registration from "~/features/Auth/Registration";

export default async function RegistrationPage() {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "guest") return notFound();
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-1">
      <Registration />
    </div>
  );
}
