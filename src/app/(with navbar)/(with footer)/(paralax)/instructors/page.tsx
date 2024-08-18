import { type Metadata } from "next";
import { Suspense } from "react";
import {
  InstructorList,
  InstructorListSkeleton,
} from "~/widgets/InstructorList";

const title = "Наши инструкторы | АрхызПарк";
const description =
  "Все инструкторы АрхызПарка обладают высокой квалификацией и прошли обучение на различных профессиональных курсах.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/instructors",
  },
};

export default function Instructors() {
  return (
    <main className="flex flex-col items-center gap-10 p-2 pb-40 sm:p-5 sm:pb-60">
      <h1 className="text-4xl text-primary-main">Инструкторы</h1>
      <p className="text-center text-primary-main">{description}</p>
      <Suspense fallback={<InstructorListSkeleton />}>
        <InstructorList />
      </Suspense>
    </main>
  );
}
