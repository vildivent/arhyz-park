import { z } from "zod";

const ZInstructorFormSubmit = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  description: z.string(),
  link: z.string(),
  imageId: z.string().nullish(),
});

export default function formParse(data: Record<string, FormDataEntryValue>) {
  const result = ZInstructorFormSubmit.safeParse(data);
  if (!result.success) return { errors: result.error.flatten().fieldErrors };

  return { data: result.data };
}
