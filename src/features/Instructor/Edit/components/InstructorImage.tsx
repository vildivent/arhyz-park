"use client";

import Image from "next/image";
import { type Dispatch, type SetStateAction } from "react";
import {
  Button,
  DropZone,
  FileTrigger,
  type FileDropItem,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { ImageIcon } from "~/shared/ui/icons";
import type { InstructorImage } from "../lib/hooks/useFormEdit";

const acceptedFileTypes = ["image/png", "image/jpeg", "image/webp"];

type ProfileImageEditProps = {
  image: InstructorImage;
  setImage: Dispatch<SetStateAction<InstructorImage>>;
};
export default function InstructorImage({
  image,
  setImage,
}: ProfileImageEditProps) {
  return (
    <DropZone
      className="relative h-80 w-60 rounded-3xl bg-primary-main outline-none"
      onDrop={async (e) => {
        const files = e.items.filter(
          (item) => item.kind === "file",
        ) as FileDropItem[];
        const firstFile = await files.at(0)?.getFile();
        if (!firstFile) return;

        setImage({
          id: null,
          file: firstFile,
          url: URL.createObjectURL(firstFile),
        });
      }}
    >
      <FileTrigger
        acceptedFileTypes={acceptedFileTypes}
        onSelect={(e) => {
          const file = e?.item(0);
          if (!file) return;
          setImage({ id: null, file: file, url: URL.createObjectURL(file) });
        }}
      >
        <Button
          className={({ isFocusVisible }) =>
            twMerge(
              "relative flex h-full w-full items-center justify-center rounded-3xl outline-none",
              isFocusVisible && "outline-2 outline-white",
            )
          }
        >
          {image?.url && (
            <Image
              src={image.url}
              alt="Фото инструктора"
              fill
              className="rounded-3xl object-cover"
              sizes="15rem"
            />
          )}
          <div className="z-10 flex flex-col items-center gap-2 opacity-50">
            <ImageIcon />
            <span className="px-5 text-xs">
              Нажмите или перетащите изображение
            </span>
          </div>
        </Button>
      </FileTrigger>
    </DropZone>
  );
}
