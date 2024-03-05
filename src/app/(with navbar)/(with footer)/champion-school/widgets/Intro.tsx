import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";
import ImagesCouple from "../components/ImagesCouple";

export default function Intro() {
  return (
    <Section>
      <Frame>
        <p>
          Обучение детей горным лыжам сильно отличается от занятий со взрослыми.
        </p>
        <p>Нас часто спрашивают:</p>
        <ul className="ml-5 list-disc">
          <li>
            что делать, если ребёнок не разделяет любовь родителей к лыжам?
          </li>
          <li>
            как найти инструктора, который сможет заинтересовать и научить
            ребёнка?
          </li>
          <li>почему ребёнок отказывается прогрессировать?</li>
        </ul>
        <p>
          Ответ на все эти вопросы один – ребёнок хочет{" "}
          <em className="not-italic text-accent-main">играть!</em>
        </p>
        <p>
          Специально для ваших детей мы создали «Школу&nbsp;чемпионов» – место,
          где инструкторы не разучились играть.
        </p>
      </Frame>

      <ImagesCouple
        images={[
          {
            src: "/cs-1.jpg",
            alt: "Пример работы инструктора",
            width: 257,
            height: 343,
          },
          {
            src: "/cs-2.jpg",
            alt: "Пример работы инструктора",
            width: 290,
            height: 387,
          },
        ]}
      />
    </Section>
  );
}
