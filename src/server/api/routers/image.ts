import { TRPCError } from "@trpc/server";
import { addMinutes } from "date-fns";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { adminCheckAPI } from "~/shared/utils/adminCheck";
import { deleteFile } from "~/shared/utils/deleteFile";

const ZImageDelete = z.object({ id: z.string().min(1) });

export const imageRouter = createTRPCRouter({
  getToken: protectedProcedure.query(async ({ ctx }) => {
    let currentToken = await ctx.db.imageToken.findUnique({
      where: { userId: ctx.session.user.id },
    });

    if (currentToken && currentToken.expires < new Date())
      await ctx.db.imageToken.delete({
        where: { userId: ctx.session.user.id },
      });

    if (!currentToken) {
      currentToken = await ctx.db.imageToken.create({
        data: {
          expires: addMinutes(new Date(), 30),
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }
    return currentToken.id;
  }),

  delete: protectedProcedure
    .input(ZImageDelete)
    .mutation(async ({ ctx, input }) => {
      const image = await ctx.db.image.findUnique({
        where: { id: input.id },
      });
      if (!image) throw new TRPCError({ code: "BAD_REQUEST" });
      if (ctx.session.user.id !== image.createdById) adminCheckAPI(ctx.session);

      const { success } = await deleteFile(image.url);
      if (success) await ctx.db.image.delete({ where: { id: image.id } });
      else
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete image file",
        });
    }),
});
