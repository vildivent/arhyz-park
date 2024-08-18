"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { FileTrigger } from "react-aria-components";
import UserAvatar from "~/shared/ui/UserAvatar";
import DeleteButton from "~/components/DeleteButton";
import EditButton from "~/components/EditButton";

type ProfileImageEditProps = {
  setFile: Dispatch<SetStateAction<File | null>>;
  setDeleteFile: Dispatch<SetStateAction<boolean>>;
  currentImage?: string | null;
};
export default function ProfileImageEdit({
  setFile,
  setDeleteFile,
  currentImage,
}: ProfileImageEditProps) {
  const [image, setImage] = useState(currentImage);
  return (
    <div className="flex items-center justify-center gap-10">
      <FileTrigger
        acceptedFileTypes={["image/png", "image/jpeg", "image/webp"]}
        onSelect={(e) => {
          if (!e) return;
          const tmpFile = e.item(0);
          setFile(tmpFile);
          setImage(tmpFile ? URL.createObjectURL(tmpFile) : null);
        }}
      >
        <EditButton />
      </FileTrigger>

      <UserAvatar src={image} size="6rem" sizes="10rem" />

      <DeleteButton
        onPress={() => {
          setFile(null);
          setImage(null);
          setDeleteFile(true);
        }}
      />
    </div>
  );
}
