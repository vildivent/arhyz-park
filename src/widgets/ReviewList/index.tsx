import {
  ReviewCard,
  ReviewCardSkeleton,
} from "~/entities/review/ui/ReviewCard";
import { api } from "~/trpc/server";

export async function ReviewList() {
  const reviews = await api.review.get.query();
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.id}
          variant={index % 2 === 0 ? "left" : "right"}
          review={review}
          actionMenu={null}
        />
      ))}
    </div>
  );
}

export function ReviewListSkeleton() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      <ReviewCardSkeleton variant="left" />
      <ReviewCardSkeleton variant="right" />
      <ReviewCardSkeleton variant="left" />
    </div>
  );
}
