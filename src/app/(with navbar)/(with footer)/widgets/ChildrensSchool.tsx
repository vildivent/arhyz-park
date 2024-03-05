import Frame from "~/shared/ui/Frame";
import Section from "~/shared/ui/Section";
import { Link } from "~/shared/ui/buttons";

export default function ChildrensSchool() {
  return (
    <Section
      heading={
        <h2 className="text-stroke text-center text-3xl md:text-5xl">
          Детская школа
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
        <source src="/ap-school.webm" type="video/webm" />
        Видео не поддерживается
      </video>
      <Frame>
        <p>
          Детский клуб «Школа Чемпионов» для детей от 5 до 12 лет, в группах от
          3 до 5 чел.
        </p>
        <p>Расписание: с 10:00 до 15:00, перерыв на обед 12:00-13:00</p>
        <ol className="flex list-inside list-decimal flex-col gap-2">
          <li>
            Ежедневные курсы по расписанию продолжительность 1 день - это 4 часа
            практических занятий в комфортных мини группах
          </li>
          <li>
            Горнолыжные развивающие Кэмпы по расписанию:
            <ul className="ml-5 list-disc">
              <li>3 дня (старт каждую среду и субботу)</li>
              <li>5 дней (старт каждую субботу).</li>
            </ul>
          </li>
        </ol>
        <Link className="mx-auto mt-3" href="/champion-school">
          Подробнее
        </Link>
      </Frame>
    </Section>
  );
}
