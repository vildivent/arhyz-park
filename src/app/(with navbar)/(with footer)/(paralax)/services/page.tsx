import { type Metadata } from "next";
import { notFound } from "next/navigation";

const title = "Услуги | АрхызПарк";
const description =
  "У нас вы можете воспользоваться услугами по обучению безопасному и техничному катанию на горных лыжах и сноуборде. Мы предоставляем широкий спектр услуг - от индивидуальных занятий до групповых абонементов и специальных курсов для любого уровня катания.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/services",
  },
};

export default function Services() {
  return notFound();
  return (
    <main className="flex min-h-[50vh] flex-col items-center">
      <h1 className="text-4xl text-primary-main">
        Услуги (раздел в разработке)
      </h1>
    </main>
  );
}
