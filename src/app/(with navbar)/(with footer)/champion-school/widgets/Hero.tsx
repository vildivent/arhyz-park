import Frame from "~/shared/ui/Frame";
import ActionLink from "../components/ActionLink";

export default function Hero() {
  return (
    <section className="relative">
      <video
        className="z-0 h-dvh w-screen select-none overflow-hidden object-cover"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/champion-school-hero.webm" type="video/webm" />
        Видео не поддерживается
      </video>

      <div className="absolute right-0 top-0 z-10 flex h-dvh w-full flex-col items-center justify-between gap-5 px-2 py-20 lg:ml-auto lg:w-1/2 lg:justify-center lg:gap-10">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-stroke text-center text-3xl md:text-[4vw] md:leading-[4vw]">
            Детская
            <br />
            «Школа&nbsp;чемпионов»
          </h1>
          <Frame variant="mainShort">
            <p>Детские горнолыжные развивающие кэмпы по расписанию</p>
          </Frame>
        </div>
        <ActionLink />
      </div>
    </section>
  );
}
