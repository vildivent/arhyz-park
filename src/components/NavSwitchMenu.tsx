import { type NavLink } from "~/shared/types";
import NavSwitchButton from "~/shared/ui/NavSwitchButton";
import { cn } from "~/shared/utils/cn";

export default function NavSwitchMenu({
  navLinks,
  className,
}: {
  navLinks: NavLink[];
  className?: string;
}) {
  return (
    <div className={cn("flex rounded-full shadow-md", className)}>
      {navLinks.map((navLink, index) => {
        let variant: "middle" | "start" | "end" = "middle";
        if (index === 0) variant = "start";
        if (index === navLinks.length - 1) variant = "end";
        return (
          <NavSwitchButton
            key={navLink.href}
            variant={variant}
            href={navLink.href}
          >
            {navLink.label}
          </NavSwitchButton>
        );
      })}
    </div>
  );
}
