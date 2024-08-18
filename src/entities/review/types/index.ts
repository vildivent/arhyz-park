import { type $Enums } from "@prisma/client";

export type Review = {
  id: string;
  createdAt: Date;
  username: string;
  image: string | null;
  text: string;
  raiting: $Enums.ReviewRaiting;
  checked?: boolean;
};
