import Image from "next/image";
import ParalaxBg from "~/shared/ui/ParalaxBg";

export default function WithParalaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-1 flex-col">
      <ParalaxBg
        image={
          <div className="relative h-[2273px] w-full">
            <Image
              className="select-none object-cover"
              src="/bg-elevator.jpg"
              alt="Фон"
              fill
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        }
        outputRange={["0px", "-1400px"]}
      >
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
        {children}
      </ParalaxBg>
    </div>
  );
}
