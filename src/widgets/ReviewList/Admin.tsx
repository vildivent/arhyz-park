import {
  ReviewCard,
  ReviewCardSkeleton,
} from "~/entities/review/ui/ReviewCard";
import ReviewCheck from "~/features/Review/Check";
import ReviewDelete from "~/features/Review/Delete";
import { api } from "~/trpc/server";

export async function ReviewListAdmin() {
  const reviews = await api.review.getAdmin.query();
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.id}
          variant={index % 2 === 0 ? "left" : "right"}
          review={review}
          actionMenu={
            <div className="flex gap-2">
              <ReviewCheck id={review.id} checked={review.checked} />
              <ReviewDelete id={review.id} />
            </div>
          }
        />
      ))}
    </div>
  );
}

export function ReviewListAdminSkeleton() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      <ReviewCardSkeleton variant="left" actionMenu />
      <ReviewCardSkeleton variant="right" actionMenu />
      <ReviewCardSkeleton variant="left" actionMenu />
    </div>
  );
}
