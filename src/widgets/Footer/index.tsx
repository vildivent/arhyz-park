import Logo from "~/components/Logo";
import RecordButton from "~/features/Instructor/RecordButton";
import { TextLink } from "~/shared/ui/buttons";
import ContactsGroup from "./components/ContactsGroup";
import { navLinks } from "./data";

export default function Footer() {
  return (
    <footer className="gradient flex w-full flex-col items-center gap-5 overflow-x-hidden p-2 sm:p-5 lg:gap-10 xl:pt-10">
      <div className="flex flex-col items-center gap-5 lg:gap-10 xl:flex-row xl:gap-x-24">
        <Logo />
        <div className="flex flex-col-reverse gap-5 lg:flex-row lg:gap-10">
          <div className="hidden flex-col gap-2 lg:flex">
            {navLinks.map((link) => (
              <TextLink key={link.href} href={link.href}>
                {link.label}
              </TextLink>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <TextLink
              href="/Тарифы_на_услуги_инструкторов_АрхызПарка_23_24.pdf"
              target="_blank"
            >
              Тарифы 2023-2024
            </TextLink>
            <TextLink href="/Договор-оферта_АрхызПарк.pdf" target="_blank">
              Договор-оферта
            </TextLink>
            {/* <TextLink href="terms-of-servise">Условия использования</TextLink> */}
            <TextLink href="privacy-policy">
              Политика конфиденциальности
            </TextLink>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="grid grid-rows-2 gap-5 sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-1">
              <ContactsGroup title="Основная школа" tel="+79380271711" />
              <ContactsGroup
                title='Детская "Школа чемпионов"'
                tel="+79525656272"
                telFormatted="+7 (952) 56-56-272"
              />
            </div>
            <RecordButton href="https://n1040847.yclients.com">
              Забронировать занятие
            </RecordButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center text-sm opacity-70 sm:text-base">
        <span>© 2024 ООО «Архыз Парк» - официальный сайт</span>
      </div>
    </footer>
  );
}
