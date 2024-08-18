import { Montserrat_Alternates, Russo_One } from "next/font/google";

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat-alternates",
  weight: ["400", "500", "600", "700"],
  preload: true,
});
export const russoOne = Russo_One({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-russo-one",
  weight: "400",
  preload: true,
});
