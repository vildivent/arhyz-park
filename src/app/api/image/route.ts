import { NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { env } from "~/env";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    const parsedBody = imageAPIReqSchema.parse(await req.json());
    const image = await db.image.create({
      data: {
        url: parsedBody.url,
        aspectRatio: parsedBody.aspectRatio,
        createdBy: { connect: { id: parsedBody.userId } },
      },
    });
    return NextResponse.json({ success: true, imageId: image.id });
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError)
      return NextResponse.json(
        { success: false, message: "BAD_REQUEST" },
        { status: 400 },
      );
    else {
      console.log(error);
      return NextResponse.json(
        { success: false, message: "SERVER_ERROR" },
        { status: 500 },
      );
    }
  }
}
const imageAPIReqSchema = z.object({
  secret: z.literal(env.IMAGES_SECRET),
  userId: z.string().cuid(),
  url: z.string().url(), //.startsWith("https://"),
  aspectRatio: z.number().positive(),
});
