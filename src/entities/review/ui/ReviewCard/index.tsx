import DisplayName from "~/shared/ui/DisplayName";
import Expand from "~/shared/ui/Expand";
import Md from "~/shared/ui/Md";
import UserAvatar from "~/shared/ui/UserAvatar";
import { cn } from "~/shared/utils/cn";
import { type Review } from "../../types";
import Card from "./components/Card";
import Heading from "./components/Heading";

export function ReviewCard({
  review,
  variant,
  actionMenu,
}: {
  review: Review;
  variant: "left" | "right";
  actionMenu: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex w-full gap-5",
        variant === "right" && "flex-row-reverse",
      )}
    >
      <UserAvatar
        src={review?.image}
        size="6rem"
        sizes="10rem"
        className="hidden md:block"
      />
      <Card>
        <Heading actionMenu={actionMenu}>
          <UserAvatar
            src={review?.image}
            size="3rem"
            sizes="6rem"
            className="md:hidden"
          />
          <DisplayName displayName={review.username} />
        </Heading>
        <Expand square={700 * 170}>
          <Md className="gap-5">{review.text}</Md>
        </Expand>
      </Card>
    </div>
  );
}

export function ReviewCardSkeleton({
  variant,
  actionMenu,
}: {
  variant: "left" | "right";
  actionMenu?: boolean;
}) {
  return (
    <div
      role="status"
      className={cn(
        "flex w-full gap-5",
        variant === "right" && "flex-row-reverse",
      )}
    >
      <UserAvatar size="6rem" className="hidden animate-pulse md:block" />
      <Card>
        <Heading
          actionMenu={
            actionMenu && (
              <div className="h-10 w-24 shrink-0 animate-pulse rounded-full bg-primary-main" />
            )
          }
        >
          <UserAvatar size="3rem" className="animate-pulse md:hidden" />
          <div className="h-[2ch] w-52 animate-pulse rounded-full bg-primary-main" />
        </Heading>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="h-[1ch] w-80 animate-pulse rounded-full bg-primary-main" />
            <div className="h-[1ch] w-40 animate-pulse rounded-full bg-primary-main" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[1ch] w-80 animate-pulse rounded-full bg-primary-main" />
            <div className="h-[1ch] w-40 animate-pulse rounded-full bg-primary-main" />
            <div className="h-[1ch] w-64 animate-pulse rounded-full bg-primary-main" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[1ch] w-40 animate-pulse rounded-full bg-primary-main" />
            <div className="h-[1ch] w-80 animate-pulse rounded-full bg-primary-main" />
            <div className="h-[1ch] w-60 animate-pulse rounded-full bg-primary-main" />
          </div>
        </div>
      </Card>
      <div className="sr-only">Loading...</div>
    </div>
  );
}
