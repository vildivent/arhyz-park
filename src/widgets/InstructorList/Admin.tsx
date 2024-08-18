import {
  InstructorCard,
  InstructorCardSkeleton,
} from "~/entities/instructor/ui/InstructorCard";
import InstructorDelete from "~/features/Instructor/Delete";
import InstructorEdit from "~/features/Instructor/Edit";
import RecordButton from "~/features/Instructor/RecordButton";
import { api } from "~/trpc/server";

export async function InstructorListAdmin() {
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
          actionMenu={
            <div className="flex gap-2">
              <InstructorEdit instructor={instructor} />
              <InstructorDelete instructor={instructor} />
            </div>
          }
        />
      ))}
    </div>
  );
}

export function InstructorListAdminSkeleton() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10">
      <InstructorCardSkeleton actionMenu />
      <InstructorCardSkeleton actionMenu />
      <InstructorCardSkeleton actionMenu />
    </div>
  );
}
