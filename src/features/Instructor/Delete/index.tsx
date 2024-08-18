import { type Instructor } from "~/trpc/shared";
import DeleteModal from "./components/DeleteModal";

export default function InstructorDelete({
  instructor,
}: {
  instructor?: Instructor;
}) {
  return <DeleteModal id={instructor?.id ?? ""} />;
}
