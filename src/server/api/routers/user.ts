import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { telLength } from "~/shared/constants";
import { deleteFile } from "~/shared/utils/deleteFile";

const ZNameUpdate = z
  .string()
  .min(3, "Имя слишком короткое")
  .max(30, "Имя слишком длинное");

const ZSurameUpdate = z
  .string()
  .min(3, "Имя слишком короткое")
  .max(30, "Имя слишком длинное")
  .nullable();

const ZTelUpdate = z
  .string()
  .min(telLength, "Некорректный номер телефона")
  .max(telLength, "Некорректный номер телефона")
  .nullable();

const ZImageUpdate = z.string().cuid().nullish();

const ZUserSubmit = z.object({
  name: ZNameUpdate,
  surname: ZSurameUpdate,
  tel: ZTelUpdate,
  imageId: ZImageUpdate,
});

export const userRouter = createTRPCRouter({
  registration: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        name: true,
        surname: true,
        tel: true,
        image: true,
      },
    });
  }),

  submit: protectedProcedure
    .input(ZUserSubmit)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.$transaction(async (tx) => {
        const user = await tx.user.findUniqueOrThrow({
          where: { id: ctx.session.user.id },
          select: { avatar: { select: { id: true, url: true } } },
        });

        let oldImageUrl = "";

        //Удалить картинку
        if (
          input.imageId === null ||
          (input.imageId && user.avatar && input.imageId !== user.avatar.id)
        ) {
          if (user.avatar) {
            oldImageUrl = user.avatar.url;
            await tx.user.update({
              where: { id: ctx.session.user.id },
              data: { image: null, avatar: { delete: true } },
            });
          } else
            await tx.user.update({
              where: { id: ctx.session.user.id },
              data: { image: null },
            });
        }

        //Добавить кртинку
        if (input.imageId) {
          const newImage = await tx.image.findUniqueOrThrow({
            where: { id: input.imageId },
          });
          await tx.user.update({
            where: { id: ctx.session.user.id },
            data: {
              image: newImage.url,
              avatar: { connect: { id: input.imageId } },
            },
          });
        }

        await tx.user.update({
          where: { id: ctx.session.user.id },
          data: {
            name: input.name,
            surname: input.surname,
            tel: input.tel,
            registered: new Date(),
            role: ctx.session.user.role === "guest" ? "user" : undefined,
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

  delete: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.user.delete({
      where: { id: ctx.session.user.id },
    });
  }),

  nameUpdate: protectedProcedure
    .input(ZNameUpdate)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { name: input },
      });
    }),

  surnameUpdate: protectedProcedure
    .input(ZSurameUpdate)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { surname: input },
      });
    }),

  telUpdate: protectedProcedure
    .input(ZTelUpdate)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { tel: input },
      });
    }),

  imageUpdate: protectedProcedure
    .input(ZImageUpdate)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.$transaction(async (tx) => {
        const user = await tx.user.findUniqueOrThrow({
          where: { id: ctx.session.user.id },
          select: { avatar: { select: { id: true, url: true } } },
        });

        let oldImageUrl = "";

        //Удалить картинку
        if (
          input === null ||
          (input && user.avatar && input !== user.avatar.id)
        ) {
          if (user.avatar) {
            oldImageUrl = user.avatar.url;
            await tx.user.update({
              where: { id: ctx.session.user.id },
              data: { image: null, avatar: { delete: true } },
            });
          } else
            await tx.user.update({
              where: { id: ctx.session.user.id },
              data: { image: null },
            });
        }

        //Добавить кртинку
        if (input) {
          const newImage = await tx.image.findUniqueOrThrow({
            where: { id: input },
          });
          await tx.user.update({
            where: { id: ctx.session.user.id },
            data: {
              image: newImage.url,
              avatar: { connect: { id: input } },
            },
          });
        }

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
});
