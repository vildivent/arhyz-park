import Image from "next/image";

export default function NoBgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative h-60 w-full 2xl:h-80">
        <Image
          className="select-none object-cover"
          src="/page-heading.jpg"
          alt="Фон"
          fill
          sizes="(max-width: 768px) 200vw, (max-width: 1200px) 150vw, 100vw"
          quality={100}
          priority
        />
      </div>
      <div className="flex w-full flex-1 flex-col bg-gradient-to-b from-[#fafafa] to-[#e0e0e0]">
        {children}
      </div>
    </>
  );
}
