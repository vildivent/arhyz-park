import { env } from "~/env";
import RecordButton from "~/features/Instructor/RecordButton";
import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";

export default function Group() {
  return (
    <Section
      reverse
      heading={
        <h2 className="text-stroke text-center text-3xl md:text-5xl">
          Групповые занятия
        </h2>
      }
    >
      <Frame>
        <p>Групповые тренировки для семьи и друзей.</p>
        <p>Желателен одинаковый уровень катания всех участников группы. </p>
        <p>
          В процессе группового занятия вы смотрите со стороны на других
          участников группы, учитесь замечать ошибки и исправлять их. Это
          положительно сказывается и на вашем катании.
        </p>
        <p>
          Бывает сложно запомнить всю информацию, которую инструктор даёт на
          занятии — когда вас несколько, это куда проще. Поддержка и командный
          дух помогут вам в сложные моменты.
        </p>
        <RecordButton className="mx-auto mt-3" href={env.RECORD_LINK}>
          Записаться
        </RecordButton>
      </Frame>
      <video
        className="w-[450px] shrink-0 select-none overflow-hidden rounded-3xl object-cover shadow-lg"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/ap-group.webm" type="video/webm" />
        Видео не поддерживается
      </video>
    </Section>
  );
}
