import AdminNavbar from "~/widgets/AdminNavbar";
import NoBgLayout from "../(with footer)/(no bg)/layout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NoBgLayout>
      <main className="relative flex w-full flex-1 flex-col items-center gap-5 p-2">
        <h1 className="text-3xl text-primary-main lg:text-4xl">
          Администрирование
        </h1>
        <AdminNavbar />
        {children}
      </main>
    </NoBgLayout>
  );
}
