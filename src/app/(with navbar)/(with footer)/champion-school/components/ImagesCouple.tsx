import Image from "next/image";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "~/shared/utils/cn";

type ImageData = {
  src: string;
  alt: string;
  width: number | `${number}`;
  height: number | `${number}`;
  className?: string;
};

export default function ImagesCouple({
  images,
  className,
  ...props
}: {
  images: [ImageData, ImageData];
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "children"
>) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-col items-center sm:flex-row sm:items-start",
        className,
      )}
      {...props}
    >
      <Image
        className={cn(
          "-translate-x-5 select-none rounded-3xl object-cover shadow-lg sm:translate-x-10",
          images[0].className,
        )}
        src={images[0].src}
        alt={images[0].alt}
        width={images[0].width}
        height={images[0].height}
      />
      <Image
        className={cn(
          "-translate-y-10 translate-x-5 select-none rounded-3xl object-cover shadow-lg sm:-translate-x-10 sm:translate-y-[50%]",
          images[1].className,
        )}
        src={images[1].src}
        alt={images[1].alt}
        width={images[1].width}
        height={images[1].height}
      />
    </div>
  );
}
