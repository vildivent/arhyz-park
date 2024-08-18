import Logo from "~/components/Logo";
import Navbar from "~/widgets/Navbar";
import Sidebar from "~/widgets/Sidebar";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-2 z-50 flex w-full">
        <div className="flex-1" />
        <Navbar />
        <div className="flex flex-1 justify-end pr-2">
          <Sidebar />
        </div>
      </div>
      <Logo
        variant="coloredWithText"
        className="absolute -left-8 -top-8 z-50 scale-50 sm:left-0 sm:top-0 sm:scale-90"
      />
      {children}
    </>
  );
}
