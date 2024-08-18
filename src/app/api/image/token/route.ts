import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "~/env";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    const parsedBody = tokenAPIReqSchema.parse(await req.json());
    const token = await db.imageToken.findUnique({
      where: { id: parsedBody.token },
    });

    if (token) await db.imageToken.delete({ where: { id: token.id } });
    else
      return NextResponse.json(
        { success: false, message: "WRONG_TOKEN" },
        { status: 400 },
      );
    if (token.expires < new Date())
      return NextResponse.json(
        { success: false, message: "TOKEN_EXPIRED" },
        { status: 401 },
      );

    return NextResponse.json({ success: true, userId: token.userId });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "SERVER_ERROR" },
      { status: 500 },
    );
  }
}

const tokenAPIReqSchema = z.object({
  secret: z.literal(env.IMAGES_SECRET),
  token: z.string().cuid(),
});
