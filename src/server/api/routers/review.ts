import { ReviewRaiting } from "@prisma/client";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { adminCheckAPI } from "~/shared/utils/adminCheck";

const ZReviewCreate = z.object({
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
const ZReviewDelete = z.object({ id: z.string().cuid() });
const ZReviewCheck = z.object({ id: z.string().cuid(), checked: z.boolean() });

export const reviewRouter = createTRPCRouter({
  create: protectedProcedure
    .input(ZReviewCreate)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
      });
      await ctx.db.review.create({
        data: {
          username: user?.name ?? "Пользователь",
          raiting: input.type,
          text: input.text,
          createdBy: { connect: { id: ctx.session.user.id } },
          avatar: user?.avatarId ? { connect: { id: user.avatarId } } : {},
          image: user?.image,
        },
      });
    }),

  get: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.review.findMany({
      where: { checked: true },
      select: {
        id: true,
        createdAt: true,
        username: true,
        image: true,
        text: true,
        raiting: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  getAdmin: protectedProcedure.query(async ({ ctx }) => {
    adminCheckAPI(ctx.session);

    return await ctx.db.review.findMany({
      orderBy: [{ checked: "asc" }, { createdAt: "desc" }],
    });
  }),

  delete: protectedProcedure
    .input(ZReviewDelete)
    .mutation(async ({ ctx, input }) => {
      adminCheckAPI(ctx.session);

      await ctx.db.review.delete({
        where: { id: input.id },
      });
    }),

  check: protectedProcedure
    .input(ZReviewCheck)
    .mutation(async ({ ctx, input }) => {
      adminCheckAPI(ctx.session);

      await ctx.db.review.update({
        where: { id: input.id },
        data: { checked: input.checked },
      });
    }),
});
