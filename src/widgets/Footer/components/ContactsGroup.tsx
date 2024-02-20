import GradientTel from "~/components/GradientTel";
import SocialLink from "~/components/SocialLink";
import { TelegramIcon, WhatsappIcon } from "~/shared/ui/icons";
import { telFormat } from "~/shared/utils/tel";

export default function ContactsGroup({
  title,
  tel,
  telFormatted,
}: {
  title: string;
  tel: string;
  telFormatted?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-center">{title}</span>
      <GradientTel href={"tel:" + tel}>
        {telFormatted ?? telFormat(tel)}
      </GradientTel>
      <div className="flex items-center gap-2">
        <SocialLink href={"https://wa.me/" + tel}>
          <WhatsappIcon width={40} height={40} />
          <span className="sr-only">{"WhatsApp" + " " + title}</span>
        </SocialLink>
        <SocialLink href={"https://t.me/" + tel}>
          <TelegramIcon width={40} height={40} />
          <span className="sr-only">{"Telegram" + " " + title}</span>
        </SocialLink>
      </div>
    </div>
  );
}
