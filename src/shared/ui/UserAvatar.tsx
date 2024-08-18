import Image, { type StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { User } from "~/shared/ui/skeleton";

type UserAvatarProps = {
  className?: string;
  src?: string | StaticImageData | null;
  alt?: string | null;
  size?: number | string;
  sizes?: string;
};

export default function UserAvatar({
  className,
  src,
  alt,
  size = "2.5rem",
  sizes,
}: UserAvatarProps) {
  if (!src) return <User width={size} height={size} className={className} />;
  return (
    <div
      className={twMerge("relative shrink-0 rounded-full", className)}
      style={{ height: size, width: size }}
    >
      <Image
        className="rounded-full object-cover"
        src={src}
        alt={alt ?? "Изображение профиля"}
        fill
        sizes={sizes ?? (typeof size === "string" ? size : size + "px")}
        priority
        quality={100}
      />
    </div>
  );
}
