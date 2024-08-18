import NavSwitchMenu from "~/components/NavSwitchMenu";
import { navLinksAdmin } from "./data";

export default function AdminNavbar() {
  return <NavSwitchMenu navLinks={navLinksAdmin} />;
}
