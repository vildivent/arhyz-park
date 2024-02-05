import { navLinks } from "~/shared/data";
import NavButton from "./components/NavButton";

export default function Navbar() {
  return (
    <nav className="hidden rounded-full shadow-md lg:flex">
      {navLinks.map((navLink, index) => {
        let variant: "middle" | "start" | "end" = "middle";
        if (index === 0) variant = "start";
        if (index === navLinks.length - 1) variant = "end";
        return (
          <NavButton key={navLink.href} variant={variant} href={navLink.href}>
            {navLink.label}
          </NavButton>
        );
      })}
    </nav>
  );
}
