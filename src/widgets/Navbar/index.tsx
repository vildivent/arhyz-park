import NavSwitchMenu from "~/components/NavSwitchMenu";
import { navLinks } from "./data";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex">
      <NavSwitchMenu navLinks={navLinks} />
    </nav>
  );
}
