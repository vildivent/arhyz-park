import Image from "next/image";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 z-0 h-svh w-[150%] sm:w-full">
        <Image
          src="/not-found-bg.jpg"
          alt="Фон"
          className="select-none object-cover"
          sizes="(max-width: 640px) 150vw, 100vw"
          draggable={false}
          quality={100}
          fill
          priority
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-1">
        {children}
      </div>
    </>
  );
}
