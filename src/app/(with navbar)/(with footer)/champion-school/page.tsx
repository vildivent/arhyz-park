import { type Metadata } from "next";
import Image from "next/image";
import ParalaxBg from "~/shared/ui/ParalaxBg";
import ActionLink from "./components/ActionLink";
import Advantages from "./widgets/Advantages";
import GroupCards from "./widgets/GroupCards";
import GroupsHeading from "./widgets/GroupsHeading";
import GroupsInfo from "./widgets/GroupsInfo";
import Hero from "./widgets/Hero";
import Intro from "./widgets/Intro";
import Schedule from "./widgets/Schedule";
import ShortInfo from "./widgets/ShortInfo";

const title = "АрхызПарк | Детская «Школа чемпионов»";
const description = "Детские горнолыжные развивающие кэмпы по расписанию";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru/champion-school",
  },
};

export default function ChampionSchool() {
  return (
    <main className="flex w-full flex-col overflow-x-hidden">
      <Hero />
      <ParalaxBg
        image={
          <Image
            className="select-none object-cover object-top"
            src="/champions-school-bg.jpg"
            alt="Курорт"
            fill
            sizes="100vw"
            quality={80}
          />
        }
        outputRange={["0px", "-800px"]}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-[60svh] px-5 py-[40svh]">
          <Intro />
          <Advantages />
          <ShortInfo />
          <section className="flex flex-col items-center gap-10">
            <GroupsHeading />
            <GroupCards />
            <GroupsInfo />
            <Schedule />
            <ActionLink />
          </section>
        </div>
      </ParalaxBg>
    </main>
  );
}
