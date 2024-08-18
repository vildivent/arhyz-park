import { z } from "zod";
import { env } from "~/env";

type Entity = "review" | "instructor" | "user";

const uploadImage = async (file: File, token: string, entity?: Entity) => {
  const uploadURL = env.NEXT_PUBLIC_FILE_UPLOADER_URL;
  const formData = new FormData();
  formData.append("image", file, encodeURI(file.name));
  formData.append("token", token);
  if (entity) formData.append("entity", entity);
  try {
    const body: unknown = await fetch(uploadURL, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    const parsedBody = uploadResSchema.safeParse(body);
    return parsedBody;
  } catch (error) {
    return { success: false as const, message: "uploadImage error" };
  }
};
export default uploadImage;

const uploadSuccess = z.object({
  success: z.literal(true),
  imageId: z.string().cuid(),
});
const uploadError = z.object({
  success: z.literal(false),
  message: z.string(),
});
const uploadResSchema = z.union([uploadSuccess, uploadError]);
