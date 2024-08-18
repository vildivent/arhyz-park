import Image from "next/image";
import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";
import SocialLink from "~/shared/ui/SocialLink";
import ARASIALogo from "./components/ARASIALogo";
import NRLILogo from "./components/NRLILogo";

export default function Courses() {
  return (
    <Section reverse>
      <Frame>
        <p>Инструкторы школы прошли обучение на профессиональных курсах:</p>
        <ul className="ml-5 list-disc">
          <li>Национальной лиги инструкторов (НЛИ),</li>
          <li>
            Учебного центра Федерации горнолыжного спорта и сноубординга России
            (УЦ ФГССР),
          </li>
          <li>Всероссийской Ассоциации Горнолыжных Инструкторов (ВАГИ),</li>
          <li>
            Учебного центра Федерации Спортивного Туризма Карачаево-Черкесской
            Республики (УЦ «Цель» ФСТ КЧР),
          </li>
          <li>
            Finnish National Association of Ski Instruktors (SHORy – Финляндия),
          </li>
          <li> Альянса инструкторов по снежным видам спорта (АСИ)</li>
        </ul>
        <div className="flex justify-between gap-2 md:mx-5">
          <SocialLink href="https://isia.ski">
            <Image
              className="shrink-0 select-none rounded-3xl object-cover"
              src="/isia-logo.png"
              alt="ISIA"
              width={135}
              height={108}
            />
            <span className="sr-only">isia</span>
          </SocialLink>
          <SocialLink href="https://isiarussia.ru">
            <NRLILogo />
            <span className="sr-only">isiarussia</span>
          </SocialLink>
          <SocialLink href="https://arasia.ru">
            <ARASIALogo />
            <span className="sr-only">arasia</span>
          </SocialLink>
          <SocialLink href="https://rus-sia.ru">
            <Image
              className="shrink-0 select-none rounded-3xl object-cover"
              src="/rus-sia-logo.jpg"
              alt="RUS-SIA"
              width={100}
              height={100}
            />
            <span className="sr-only">rus-sia</span>
          </SocialLink>
        </div>
      </Frame>
      <Image
        className="shrink-0 select-none rounded-3xl object-cover shadow-lg"
        src="/sport.jpg"
        alt="Инструктор на соревнованиях"
        width={471}
        height={316}
      />
    </Section>
  );
}
