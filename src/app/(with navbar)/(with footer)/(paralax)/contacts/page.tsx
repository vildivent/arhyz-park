import { type Metadata } from "next";
import GradientTel from "~/components/GradientTel";
import SocialLink from "~/shared/ui/SocialLink";
import YandexMap from "~/components/YandexMap";
import Container from "~/shared/ui/Container";
import { TelegramIcon, WhatsappIcon } from "~/shared/ui/icons";
import { TextLink } from "~/shared/ui/buttons";

const title = "Контакты | АрхызПарк";
const description =
  "Свяжитесь с нами, если у Вас есть какие-либо вопросы, связанные с нашей деятельностью или есть предложения о сотрудничестве.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/contacts",
  },
};

export default function Contacts() {
  return (
    <main className="flex flex-col items-center gap-10 p-2 pb-40 sm:p-5 sm:pb-60">
      <h1 className="text-4xl text-primary-main">Контакты</h1>
      <Container className="w-full max-w-3xl items-start gap-10">
        <div className="flex flex-col gap-2">
          <span className="opacity-75">Основная школа</span>
          <GradientTel href="tel:+79380271711">+7 (938) 027-17-11</GradientTel>
          <div className="flex items-center gap-2">
            <SocialLink href="https://wa.me/+79380271711">
              <WhatsappIcon width={40} height={40} />
            </SocialLink>
            <SocialLink href="https://t.me/+79380271711">
              <TelegramIcon width={40} height={40} />
            </SocialLink>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="opacity-75">
            Детская &quot;Школа чемпионов&quot;
          </span>
          <GradientTel href="tel:+79525656272">+7 (952) 56-56-272</GradientTel>
          <div className="flex items-center gap-2">
            <SocialLink href="https://wa.me/+79525656272">
              <WhatsappIcon width={40} height={40} />
            </SocialLink>
            <SocialLink href="https://t.me/+79525656272">
              <TelegramIcon width={40} height={40} />
            </SocialLink>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="opacity-75">Email</span>
          <TextLink href="mailto:ooo-ap@bk.ru">ooo-ap@bk.ru</TextLink>
        </div>

        <div className="flex flex-col gap-2">
          <span className="opacity-75">Время Работы</span>
          <span>пн.-вс.: 9:00-16:00, пт.,сб.: 18:00-22:00</span>
        </div>

        <div className="flex w-full flex-col gap-2">
          <span className="opacity-75">Адрес</span>
          <span>Курорт Архыз, п.Романтик</span>

          <YandexMap />
        </div>
      </Container>
    </main>
  );
}
