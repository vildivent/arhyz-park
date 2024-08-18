import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { adminCheckAPI } from "~/shared/utils/adminCheck";
import { deleteFile } from "~/shared/utils/deleteFile";
import shuffle from "~/shared/utils/shuffle";

const ZInstructorCreate = z.object({
  name: z
    .string()
    .min(3, "Имя слишком короткое")
    .max(30, "Имя слишком длинное"),
  surname: z
    .string()
    .min(3, "Фимилия слишком короткая")
    .max(30, "Фимилия слишком длинная"),
  description: z.string().min(1, "Заполните описание"),
  link: z
    .string()
    .startsWith("https://", "Ссылка должна ничинаться с https://"),
  imageId: z.string().cuid().nullish(),
});
const ZInstructorDelete = z.object({ id: z.string().cuid() });
const ZInstructorUpdate = ZInstructorCreate.merge(ZInstructorDelete);

export const instructorRouter = createTRPCRouter({
  create: protectedProcedure
    .input(ZInstructorCreate)
    .mutation(async ({ ctx, input }) => {
      adminCheckAPI(ctx.session);

      await ctx.db.instructor.create({
        data: {
          name: input.name,
          surname: input.surname,
          description: input.description,
          link: input.link,
          image: { connect: input.imageId ? { id: input.imageId } : undefined },
        },
      });
    }),

  get: publicProcedure.query(async ({ ctx }) => {
    const instructorsWithImage = await ctx.db.instructor.findMany({
      where: { imageId: { not: null } },
      include: { image: true },
    });
    const instructorsWithoutImage = await ctx.db.instructor.findMany({
      where: { imageId: null },
      include: { image: true },
    });
    shuffle(instructorsWithImage);
    shuffle(instructorsWithoutImage);
    return [...instructorsWithImage, ...instructorsWithoutImage];
  }),

  update: protectedProcedure
    .input(ZInstructorUpdate)
    .mutation(async ({ ctx, input }) => {
      adminCheckAPI(ctx.session);

      await ctx.db.$transaction(async (tx) => {
        const instructor = await tx.instructor.findUniqueOrThrow({
          where: { id: input.id },
          select: { image: { select: { id: true, url: true } } },
        });

        let oldImageUrl = "";

        //Удалить картинку
        if (
          input.imageId !== undefined &&
          instructor.image &&
          input.imageId !== instructor.image.id
        ) {
          oldImageUrl = instructor.image.url;
          await tx.instructor.update({
            where: { id: input.id },
            data: { image: { delete: true } },
          });
        }

        //Добавить кртинку
        if (input.imageId) {
          await tx.instructor.update({
            where: { id: input.id },
            data: { image: { connect: { id: input.imageId } } },
          });
        }

        await tx.instructor.update({
          where: { id: input.id },
          data: {
            name: input.name,
            surname: input.surname,
            description: input.description,
            link: input.link,
          },
        });

        //Удаление файла картинки
        if (oldImageUrl) {
          const { success } = await deleteFile(oldImageUrl);
          if (!success)
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to delete image file",
            });
        }
      });
    }),

  delete: protectedProcedure
    .input(ZInstructorDelete)
    .mutation(async ({ ctx, input }) => {
      adminCheckAPI(ctx.session);

      await ctx.db.$transaction(async (tx) => {
        const instructor = await tx.instructor.findUniqueOrThrow({
          where: { id: input.id },
          select: { image: { select: { url: true } } },
        });

        await ctx.db.instructor.delete({
          where: { id: input.id },
        });

        //Удаление файла картинки
        if (instructor.image?.url) {
          const { success } = await deleteFile(instructor.image.url);
          if (!success)
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to delete image file",
            });
        }
      });
    }),
});
