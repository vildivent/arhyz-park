import { type Metadata } from "next";
import { TextLink } from "~/shared/ui/buttons";
import PricesTable from "~/widgets/PricesTable";

const title = "Цены | АрхызПарк";
const description =
  "Тарифы, предоставленные на данной странице, являются публичной офертой.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/prices",
  },
};

export default function Prices() {
  return (
    <main className="flex flex-col items-center gap-10 p-2 pb-40 sm:p-5 sm:pb-60">
      <h1 className="text-4xl text-primary-main">Цены</h1>
      <p className="text-center text-primary-main">
        Тарифы, предоставленные на данной странице, являются публичной офертой.
      </p>
      <div className="flex flex-col items-center gap-2">
        <TextLink
          variant="dark"
          href="/Тарифы_на_услуги_инструкторов_АрхызПарка_23_24.pdf"
          target="_blank"
        >
          Тарифы 2023-2024.pdf
        </TextLink>
        <TextLink
          variant="dark"
          href="/Договор-оферта_АрхызПарк.pdf"
          target="_blank"
        >
          Договор-оферта.pdf
        </TextLink>
      </div>
      <PricesTable />
    </main>
  );
}
