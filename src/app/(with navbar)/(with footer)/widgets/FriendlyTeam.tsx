import Image from "next/image";
import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";

export default function FriendlyTeam() {
  return (
    <Section>
      <Image
        className="shrink-0 select-none rounded-3xl object-cover shadow-lg"
        src="/friendly.jpg"
        alt="Дружная команда"
        width={310}
        height={412}
      />
      <Frame>
        <p>
          В этом, порой непростом, но очень интересном процессе, мы стали
          дружной, профессиональной и сильной командой.
        </p>
      </Frame>
    </Section>
  );
}
