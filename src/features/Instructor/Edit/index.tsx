import { type Instructor } from "~/trpc/shared";
import EditModal from "./components/EditModal";

export default function InstructorEdit({
  instructor,
}: {
  instructor: Instructor;
}) {
  return <EditModal instructor={instructor} />;
}
