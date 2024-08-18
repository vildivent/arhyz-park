import Image from "next/image";

export default function NotFound() {
  return (
    <main className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 z-0 h-svh w-[150%] sm:w-full">
        <Image
          src="/not-found-bg.jpg"
          alt="Страница не найдена (фон)"
          className="select-none object-cover"
          sizes="(max-width: 640px) 150vw, 100vw"
          draggable={false}
          quality={100}
          fill
          priority
        />
      </div>
      <div className="absolute top-[52svh] z-10 flex w-full flex-col items-center justify-center gap-5 md:translate-x-32 md:flex-row lg:translate-x-40 xl:translate-x-60">
        <span className="translate-x-10 font-h text-5xl text-primary-main sm:translate-x-0">
          404
        </span>
        <h2 className="text-stroke text-3xl sm:text-4xl lg:text-5xl">
          Страница не найдена
        </h2>
      </div>
    </main>
  );
}
