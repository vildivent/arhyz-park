import { env } from "~/env";
import RecordButton from "~/features/Instructor/RecordButton";
import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";

export default function Personal() {
  return (
    <Section
      heading={
        <h2 className="text-stroke text-center text-3xl md:text-5xl">
          Индивидуальные занятия
        </h2>
      }
    >
      <video
        className="w-[450px] shrink-0 select-none overflow-hidden rounded-3xl object-cover shadow-lg"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/ap-personal.webm" type="video/webm" />
        Видео не поддерживается
      </video>
      <Frame>
        <p>
          Персональные тренировки с инструктором, где вам уделяется 100%
          внимания.
        </p>
        <p>
          Ваш текущий уровень катания не имеет значения — инструктор подстроит
          программу обучения под вас.
        </p>
        <p>
          Если вы начинаете обучение горным лыжам или сноуборду с нуля,
          инструктор пошагово проведёт вас по всем этапам обучения, включая
          технику правильного падения и пользования подъёмником. Это позволит
          вам освоить снаряд в разы быстрее, чем самостоятельно или с помощью
          друзей. 
        </p>
        <p>
          Если вы прогрессирующий райдер, инструктор поможет вам отточить
          технику трассового и внетрассового катания, фристайла, а также
          осознать и исправить закатанные ошибки с помощью специальных
          упражнений.
        </p>
        <RecordButton className="mx-auto mt-3" href={env.RECORD_LINK}>
          Записаться
        </RecordButton>
      </Frame>
    </Section>
  );
}
