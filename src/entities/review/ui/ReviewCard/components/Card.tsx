export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="gradient flex w-full flex-col gap-5 rounded-3xl p-5 shadow-lg md:p-10">
      {children}
    </div>
  );
}
