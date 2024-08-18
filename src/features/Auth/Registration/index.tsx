import Logo from "~/components/Logo";
import Container from "~/shared/ui/Container";
import RegistrationForm from "./components/RegistrationForm";
import { api } from "~/trpc/server";
import { redirect } from "next/navigation";

export default async function Registration() {
  const user = await api.user.registration.query();
  if (!user) redirect("/sign-in");
  return (
    <Container className="max-w-lg">
      <Logo />
      <h1 className="text-center text-3xl">Регистрация</h1>
      <RegistrationForm user={user} />
    </Container>
  );
}
