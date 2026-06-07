import { LogOut } from "lucide-react";
import { useLogout } from "@/features/auth";

type Props = {
  open: boolean;
};

export function SideBarFooter({ open }: Props) {
  const { logout } = useLogout();
  return (
    <div className="p-4 border-t border-border">
      <button
        onClick={() => logout()}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-foreground hover:bg-bg-muted transition-all duration-200"
      >
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
      </button>
    </div>
  );
}
