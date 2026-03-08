import { NavItem } from "../constant/navItems";
import { SideBarNavItem } from "./SideBarNavItem";

type Props = {
  navItems: NavItem[];
  open: boolean;
  close: () => void;
};

export function SideBarNavigation({ navItems, open, close }: Props) {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <SideBarNavItem
            key={item.name}
            href={item.href}
            variant="primary"
            onClick={close}
          >
            <Icon className="w-4 h-4 shrink-0" />

            <span className="hidden lg:inline-block whitespace-nowrap">
              {item.name}
            </span>

            <span
              className="lg:hidden whitespace-nowrap overflow-hidden"
              style={{
                opacity: open ? 1 : 0,
                width: open ? "auto" : 0,
                transition: "opacity 150ms ease, width 300ms ease",
              }}
            >
              {item.name}
            </span>
          </SideBarNavItem>
        );
      })}
    </nav>
  );
}
