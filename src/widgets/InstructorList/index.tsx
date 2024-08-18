import {
  InstructorCard,
  InstructorCardSkeleton,
} from "~/entities/instructor/ui/InstructorCard";
import RecordButton from "~/features/Instructor/RecordButton";
import { api } from "~/trpc/server";

export async function InstructorList() {
  const instructors = await api.instructor.get.query();
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor.id}
          instructor={instructor}
          actionButton={
            <RecordButton href={instructor.link}>Записаться</RecordButton>
          }
          actionMenu={null}
        />
      ))}
    </div>
  );
}

export function InstructorListSkeleton() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      <InstructorCardSkeleton />
      <InstructorCardSkeleton />
      <InstructorCardSkeleton />
    </div>
  );
}
