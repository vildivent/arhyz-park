import DisplayName from "~/shared/ui/DisplayName";
import Expand from "~/shared/ui/Expand";
import Md from "~/shared/ui/Md";
import { type Instructor } from "../../types";
import Card from "./components/Card";
import Heading from "./components/Heading";
import InstructorImage from "./components/InstructorImage";

export function InstructorCard({
  instructor,
  actionButton,
  actionMenu,
}: {
  instructor: Instructor;
  actionButton: React.ReactNode;
  actionMenu: React.ReactNode | null;
}) {
  const displayName = instructor.name + " " + instructor.surname;
  return (
    <Card>
      <Heading className="md:hidden" actionMenu={actionMenu}>
        <DisplayName displayName={displayName} />
      </Heading>
      <InstructorImage
        imageURL={instructor.image?.url}
        acpectRatio={instructor.image?.aspectRatio}
      />
      <div className="flex w-full flex-col items-center gap-5 md:items-start">
        <Heading className="hidden md:flex" actionMenu={actionMenu}>
          <DisplayName displayName={displayName} />
        </Heading>
        <Expand toggleBarContent={actionButton} square={576 * 210}>
          <Md>{instructor.description}</Md>
        </Expand>
      </div>
    </Card>
  );
}

export function InstructorCardSkeleton({
  actionMenu,
}: {
  actionMenu?: boolean;
}) {
  return (
    <Card role="status">
      <Heading
        className="md:hidden"
        actionMenu={
          actionMenu && (
            <div className="ml-auto h-10 w-24 shrink-0 animate-pulse rounded-full bg-primary-main" />
          )
        }
      >
        <div className="h-[2ch] w-52 animate-pulse rounded-full bg-primary-main" />
      </Heading>

      <div className="h-80 w-60 shrink-0 animate-pulse rounded-3xl bg-primary-main" />

      <div className="flex w-full flex-col items-center gap-5 md:items-start">
        <Heading
          className="hidden md:flex"
          actionMenu={
            actionMenu && (
              <div className="ml-auto h-10 w-24 shrink-0 animate-pulse rounded-full bg-primary-main" />
            )
          }
        >
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
        <div className="h-12 w-40 animate-pulse rounded-full bg-primary-main" />
      </div>

      <div className="sr-only">Loading...</div>
    </Card>
  );
}
