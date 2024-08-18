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
      <div className="absolute right-0 top-0 z-10 h-svh w-full px-2 py-20 lg:ml-auto lg:w-1/2">
        <Template
          heading={
            <h1 className="text-stroke text-center text-5xl md:text-[6vw] md:leading-[6vw]">
              Архыз Парк
            </h1>
          }
        >
          <div className="@container flex w-full justify-center">
            <Frame
              variant="mainShort"
              className="@[45rem]:flex-row flex justify-center gap-x-1 gap-y-0"
            >
              <div className="@[21rem]:flex-row flex flex-col justify-center gap-x-1">
                <span>Школа</span>
                <span className="truncate">горнолыжного&nbsp;спорта,</span>
              </div>
              <div className="@[26.5rem]:flex-row flex flex-col gap-x-1">
                <span>сноубординга&nbsp;и</span>
                <span className="truncate">всесезонного&nbsp;туризма</span>
              </div>
            </Frame>
          </div>

          <RecordButton triggerType="big" href={env.RECORD_LINK}>
            Забронировать занятие
          </RecordButton>
        </Template>
      </div>
    </HeroAnimate>
  );
}

function Template({
  heading,
  children,
}: {
  heading: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center gap-5 lg:justify-between lg:gap-10">
      {heading}
      <div className="flex w-full grow flex-col items-center justify-between gap-5 lg:grow-0 lg:justify-normal lg:gap-10">
        {children}
      </div>
      <div className="hidden lg:block" />
    </div>
  );
}
