import { type Metadata } from "next";
import { Suspense } from "react";
import CreateReview from "~/features/Review/Create";
import { ReviewList, ReviewListSkeleton } from "~/widgets/ReviewList";

const title = "Отзывы | АрхызПарк";
const description =
  "Оставьте отзыв о Ваших впечатлениях, полученных во время занятий с нашими инструкторами.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/reviews",
  },
};

export default function Reviews() {
  return (
    <main className="flex flex-col items-center gap-10 p-2 pb-40 sm:p-5 sm:pb-60">
      <h1 className="text-4xl text-primary-main">Отзывы</h1>
      <p className="text-center text-primary-main">{description}</p>
      <CreateReview />
      <Suspense fallback={<ReviewListSkeleton />}>
        <ReviewList />
      </Suspense>
    </main>
  );
}
