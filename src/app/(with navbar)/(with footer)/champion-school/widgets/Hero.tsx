import Frame from "~/shared/ui/Frame";
import ActionLink from "../components/ActionLink";

export default function Hero() {
  return (
    <section className="relative">
      <video
        className="z-0 h-svh w-screen select-none overflow-hidden object-cover"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/champion-school-hero.webm" type="video/webm" />
        Видео не поддерживается
      </video>

      <div className="absolute right-0 top-0 z-10 h-svh w-full px-2 py-20 lg:ml-auto lg:w-1/2">
        <Template
          heading={
            <h1 className="text-stroke text-center text-3xl md:text-[4vw] md:leading-[4vw]">
              Детская
              <br />
              «Школа&nbsp;чемпионов»
            </h1>
          }
        >
          <div className="@container flex w-full justify-center">
            <Frame
              variant="mainShort"
              className="@2xl:flex-row flex flex-col justify-center gap-x-1 gap-y-0"
            >
              <span className="truncate">Детские&nbsp;горнолыжные</span>

              <div className="@[24.5rem]:flex-row flex flex-col justify-center gap-x-1">
                <span>развивающие&nbsp;кэмпы</span>
                <span>по&nbsp;расписанию</span>
              </div>
            </Frame>
          </div>
          <ActionLink />
        </Template>
      </div>
    </section>
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
    <div className="flex h-full flex-col items-center gap-5 lg:justify-center lg:gap-10">
      {heading}
      <div className="flex w-full grow flex-col items-center justify-between gap-5 lg:grow-0 lg:justify-normal lg:gap-10">
        {children}
      </div>
    </div>
  );
}
