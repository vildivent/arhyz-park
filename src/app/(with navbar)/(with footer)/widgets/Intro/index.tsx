import Image from "next/image";
import Frame from "~/shared/ui/Frame";
import IntroAnimate from "./IntroAnimate";

export default function Intro() {
  return (
    <IntroAnimate
      image={
        <Image
          className="select-none object-cover object-top"
          src="/arhyz.jpg"
          alt="Архыз"
          fill
          sizes="(max-width: 768px) 200vw, (max-width: 1200px) 150vw, 110vw"
          quality={100}
          priority
        />
      }
    >
      <h2 className="text-stroke text-center text-5xl sm:text-7xl">
        Всё возможно!
      </h2>
      <Frame variant="mainShort">
        <p>История АрхызПарка началась именно здесь, в Архызе.</p>
      </Frame>
    </IntroAnimate>
  );
}
