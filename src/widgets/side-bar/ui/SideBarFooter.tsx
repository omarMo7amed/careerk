import { LogOut } from "lucide-react";
import { SideBarNavItem } from "./SideBarNavItem";

type Props = {
  open: boolean;
};

export function SideBarFooter({ open }: Props) {
  return (
    <div className="p-4 border-t border-border">
      <SideBarNavItem href="/" variant="ghost">
        <LogOut className="w-4 h-4 shrink-0" />

        <span className="hidden lg:inline-block whitespace-nowrap">Logout</span>

        <span
          className="lg:hidden whitespace-nowrap overflow-hidden"
          style={{
            opacity: open ? 1 : 0,
            width: open ? "auto" : 0,
            transition: "opacity 150ms ease, width 300ms ease",
          }}
        >
          Logout
        </span>
      </SideBarNavItem>
    </div>
  );
}
