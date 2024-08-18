// import Link from "next/link";
import Logo from "~/components/Logo";
import Container from "~/shared/ui/Container";
import Providers from "./components/Providers";

export default function SignIn() {
  return (
    <Container className="max-w-lg">
      <Logo />
      <h1 className="text-3xl">Авторизация</h1>
      <p>Для продолжения авторизуйтесь с помощью одного из сервисов:</p>
      <Providers />
      {/* <div className="flex flex-col">
        <span>Авторизуясь, Вы принимаете</span>
        <Link
          href="/terms-of-service"
          className="text-darkgray underline hover:opacity-70"
        >
          Пользовательское соглашение
        </Link>
      </div> */}
    </Container>
  );
}
