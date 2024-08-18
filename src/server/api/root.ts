import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { imageRouter } from "./routers/image";
import { reviewRouter } from "./routers/review";
import { instructorRouter } from "./routers/instructor";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  image: imageRouter,
  review: reviewRouter,
  instructor: instructorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
