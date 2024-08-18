import { z } from "zod";
import { telParse } from "~/shared/utils/tel";
import type { UserSubmit } from "~/trpc/shared";

const ZUserSubmit = z.object({
  name: z.string(),
  surname: z.string(),
  tel: z.string(),
});

export default function formParse(data: Record<string, FormDataEntryValue>) {
  const result = ZUserSubmit.safeParse(data);
  if (!result.success) return { errors: result.error.flatten().fieldErrors };

  const toBackend: UserSubmit = {
    name: result.data.name,
    surname: null,
    tel: null,
  };
  if (result.data.surname) toBackend.surname = result.data.surname;
  if (result.data.tel) toBackend.tel = telParse(result.data.tel);

  return { data: toBackend };
}
