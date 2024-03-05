import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";
import ImagesCouple from "../components/ImagesCouple";

export default function Advantages() {
  return (
    <Section reverse>
      <ImagesCouple
        images={[
          {
            src: "/cs-3.jpg",
            alt: "Группа детей",
            width: 302,
            height: 402,
            className: "z-10",
          },
          {
            src: "/cs-4.jpg",
            alt: "Группа детей",
            width: 330,
            height: 440,
            className: "z-0",
          },
        ]}
      />

      <Frame>
        <p>
          Обучение детей в кэмпах эффективнее, чем индивидуальное или в сборных
          группах.
        </p>
        <ul className="ml-5 list-disc">
          <li>соревнования и взаимная поддержка</li>
          <li>веселье и активность</li>
          <li>новые друзья</li>
          <li>дисциплина </li>
        </ul>
      </Frame>
    </Section>
  );
}
