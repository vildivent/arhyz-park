import Image from "next/image";
import { cn } from "~/shared/utils/cn";

const InstructorImage = ({
  imageURL,
  acpectRatio,
  className,
}: {
  imageURL?: string | null;
  acpectRatio?: number | null;
  className?: string;
}) => {
  if (!imageURL) return null;

  const defaultAcpectRatio = 0.75;
  return (
    <div className={cn("relative h-80 w-60 shrink-0", className)}>
      <Image
        className="select-none rounded-3xl object-cover"
        src={imageURL}
        alt="Фото инструктора"
        fill
        sizes={(acpectRatio ?? defaultAcpectRatio) * 20 + "rem"}
        quality={100}
        draggable={false}
      />
    </div>
  );
};

export default InstructorImage;
