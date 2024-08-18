import { type Metadata } from "next";
import { adminCheck } from "~/shared/utils/adminCheck";

const title = "Администрирование | АрхызПарк";

export const metadata: Metadata = {
  title,
};

export default async function Admin() {
  await adminCheck("/admin");
  return <></>;
}
