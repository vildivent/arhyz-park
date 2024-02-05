import { getServerAuthSession } from "~/server/auth";
import SidebarModal from "./components/SidebarModal";

export default async function Sidebar() {
  const session = await getServerAuthSession();
  return <SidebarModal session={session} />;
}
