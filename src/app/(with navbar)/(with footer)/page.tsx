import { type Metadata } from "next";
import Image from "next/image";
import ParalaxBg from "~/shared/ui/ParalaxBg";
import Intro from "./widgets//Intro";
import AboutIntro from "./widgets/AboutIntro";
import ChildrensSchool from "./widgets/ChildrensSchool";
import Courses from "./widgets/Courses";
import FriendlyTeam from "./widgets/FriendlyTeam";
import Group from "./widgets/Group";
import Hero from "./widgets/Hero";
import Personal from "./widgets/Personal";

const title =
  "АрхызПарк | Школа горнолыжного спорта, сноубординга и всесезонного туризма";
const description =
  "АрхызПарк занимается организацией и проведением индивидуальных и групповых занятий по горным лыжам и сноуборду, проводит туристические горные походы. " +
  "У нас вы можете воспользоваться услугами по обучению безопасному и техничному катанию на горных лыжах и сноуборде. " +
  "Сертифицированные инструкторы с международным опытом работы.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://arhyzpark.ru",
  },
};

export default function Home() {
  return (
    <main className="flex w-full flex-col overflow-x-hidden">
      <Hero />
      <Intro />
      <ParalaxBg
        image={
          <Image
            className="select-none object-cover object-top"
            src="/resort.jpg"
            alt="Курорт"
            fill
            sizes="(max-width: 768px) 200vw, (max-width: 1200px) 150vw, 100vw"
            quality={100}
          />
        }
        outputRange={["0px", "-800px"]}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-[50lvh] px-5 py-[40lvh]">
          <AboutIntro />
          <FriendlyTeam />
          <Courses />
          <Personal />
          <Group />
          <ChildrensSchool />
        </div>
      </ParalaxBg>
    </main>
  );
}
