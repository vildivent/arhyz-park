import { type Metadata } from "next";
import Privacy from "~/widgets/Privacy";

const title = "Политика в отношении обработки персональных данных | АрхызПарк";
const description =
  'На данной странице представлена "Политика в отношении обработки персональных данных"';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/privacy-policy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col items-center gap-5 p-2">
      <h1 className="text-center text-3xl text-primary-main">
        Политика в отношении обработки персональных данных
      </h1>
      <Privacy />
    </main>
  );
}
