import { env } from "~/env";

export const deleteFile = async (fileUrl: string) => {
  const res = await fetch(fileUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ secret: env.IMAGES_SECRET }),
  });
  if (res.ok) {
    console.log(new Date().toDateString(), " - Файл удалён.");
    return { success: true };
  }
  console.log(
    `${new Date().toDateString()} - Не удалось удалить файл. Код ошибки: (${
      res.status
    }) ${res.statusText}`,
  );
  return { success: false };
};
