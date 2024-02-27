export default function Heading({
  children,
  actionMenu,
}: {
  children: React.ReactNode;
  actionMenu?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col-reverse gap-2 md:flex-row">
      <div className="flex items-center gap-2">{children}</div>
      <div className="ml-auto md:-mr-5 md:-mt-5">{actionMenu}</div>
    </div>
  );
}
