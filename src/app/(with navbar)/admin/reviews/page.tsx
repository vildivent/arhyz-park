import { Suspense } from "react";
import { adminCheck } from "~/shared/utils/adminCheck";
import {
  ReviewListAdmin,
  ReviewListAdminSkeleton,
} from "~/widgets/ReviewList/Admin";

export default async function Reviews() {
  await adminCheck("/admin/reviews");
  return (
    <Suspense fallback={<ReviewListAdminSkeleton />}>
      <ReviewListAdmin />
    </Suspense>
  );
}
