import Image from "next/image";
import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";

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
