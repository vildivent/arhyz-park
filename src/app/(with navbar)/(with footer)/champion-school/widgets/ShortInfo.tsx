import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";
import ImagesCouple from "../components/ImagesCouple";

export default function ShortInfo() {
  return (
    <Section>
      <Frame>
        <p>Обучение происходит в мини-группах от 3 до 5 человек.</p>
        <p>Продолжительность Кэмпов - 3 дня и 5 дней.</p>
        <p>Возраст: от 5 до 12 лет.</p>
      </Frame>

      <ImagesCouple
        images={[
          {
            src: "/cs-5.jpg",
            alt: "Дети",
            width: 286,
            height: 402,
          },
          {
            src: "/cs-6.jpg",
            alt: "Дети",
            width: 301,
            height: 402,
          },
        ]}
      />
    </Section>
  );
}
