import DisplayName from "~/shared/ui/DisplayName";
import Expand from "~/shared/ui/Expand";
import Md from "~/shared/ui/Md";
import UserAvatar from "~/shared/ui/UserAvatar";
import { cn } from "~/shared/utils/cn";
import { type Review } from "../../types";
import Card from "./components/Card";
import Heading from "./components/Heading";

export default function ReviewCard({
  review,
  variant,
  actionMenu,
}: {
  review: Review;
  variant: "left" | "right";
  actionMenu: React.ReactNode | null;
}) {
  return (
    <div
      className={cn("flex gap-5", variant === "right" && "flex-row-reverse")}
    >
      <UserAvatar
        src={review?.image}
        size="6rem"
        sizes="12rem"
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
        <Expand square={700 * 164}>
          <Md className="gap-5">{review.text}</Md>
        </Expand>
      </Card>
    </div>
  );
}
