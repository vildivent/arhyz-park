import { type Metadata } from "next";
import { Suspense } from "react";
import InstructorCreate from "~/features/Instructor/Create";
import { adminCheck } from "~/shared/utils/adminCheck";
import {
  InstructorListAdmin,
  InstructorListAdminSkeleton,
} from "~/widgets/InstructorList/Admin";

export const metadata: Metadata = {
  title: "Инструкторы (Администрирование) | АрхызПарк",
};

export default async function Instructors() {
  await adminCheck("/admin/instructors");
  return (
    <>
      <InstructorCreate />
      <Suspense fallback={<InstructorListAdminSkeleton />}>
        <InstructorListAdmin />
      </Suspense>
    </>
  );
}
