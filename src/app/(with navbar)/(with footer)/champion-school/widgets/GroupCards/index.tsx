import Frame from "~/shared/ui/Frame";
import FoxIcon from "./FoxIcon";
import RaccoonIcon from "./RaccoonIcon";

export default function GroupCards() {
  return (
    <div className="grid w-full grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-1 md:gap-10">
      <Frame className="items-center gap-5">
        <h3 className="text-center font-p text-2xl">Еноты</h3>
        <RaccoonIcon />
        <ul className="flex flex-col items-center gap-2 text-center">
          <li>
            <em className="not-italic text-accent-main">зелёные</em> трассы
          </li>
          <li>торможение,</li>
          <li>повороты в плуге.</li>
        </ul>
      </Frame>

      <Frame className="items-center gap-5">
        <h3 className="text-center font-p text-2xl">Лисы</h3>
        <FoxIcon />
        <ul className="flex flex-col items-center gap-2 text-center">
          <li>
            <em className="not-italic text-accent-main">зелёные</em>
            {", "}
            <em className="not-italic text-[#56C6FF]">синие</em> трассы
          </li>
          <li>карвинг начального уровня,</li>
          <li>повороты на параллельных лыжах.</li>
        </ul>
      </Frame>
    </div>
  );
}
