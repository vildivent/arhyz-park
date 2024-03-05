import Image from "next/image";
import { env } from "~/env";
import RecordButton from "~/features/Instructor/RecordButton";
import Frame from "~/shared/ui/Frame";
import HeroAnimate from "./HeroAnimate";

export default function Hero() {
  return (
    <HeroAnimate
      image={
        <Image
          className="select-none object-cover object-left"
          src="/hero-bg.jpg"
          alt="Фон"
          fill
          sizes="120vw"
          quality={100}
          priority
        />
      }
    >
      <div className="absolute right-0 top-0 z-10 flex h-dvh w-full flex-col items-center justify-between gap-5 px-2 py-20 lg:ml-auto lg:w-1/2 lg:justify-center lg:gap-10">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-stroke text-center text-5xl md:text-[6vw] md:leading-[6vw] lg:-translate-y-48">
            Архыз Парк
          </h1>
          <Frame variant="mainShort">
            <p>
              Школа горнолыжного&nbsp;спорта, сноубординга&nbsp;и
              всесезонного&nbsp;туризма
            </p>
          </Frame>
        </div>
        <RecordButton triggerType="big" href={env.RECORD_LINK}>
          Забронировать занятие
        </RecordButton>
      </div>
    </HeroAnimate>
  );
}
