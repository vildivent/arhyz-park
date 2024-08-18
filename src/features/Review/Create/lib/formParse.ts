import { ReviewRaiting } from "@prisma/client";
import { z } from "zod";

const ZReviewSubmit = z.object({
  type: z.enum([
    ReviewRaiting.positive,
    ReviewRaiting.neutral,
    ReviewRaiting.negative,
  ]),
  text: z
    .string()
    .min(3, "Отзыв слишком короткий")
    .max(2000, "Отзыв слишком длинный"),
});

export default function formParse(data: Record<string, FormDataEntryValue>) {
  const result = ZReviewSubmit.safeParse(data);
  if (!result.success) return { errors: result.error.flatten().fieldErrors };
  return { data: result.data };
}
