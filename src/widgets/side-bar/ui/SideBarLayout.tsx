import { LogOut } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { SideBarNavItem } from "./SideBarNavItem";
import type { NavItem } from "@/shared";

type SideBarLayoutProps = {
  navItems: NavItem[];
};

export function SideBarLayout({ navItems }: SideBarLayoutProps) {
  return (
    <aside className="bg-bg-surface w-64 border-r border-border bg-card/30 min-h-screen sticky top-0 flex flex-col">
      <div className="p-4 flex-1">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-light.svg"
              alt="Careerk Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <SideBarNavItem
                key={item.name}
                href={item.href}
                variant="primary"
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </SideBarNavItem>
            );
          })}
        </nav>
      </div>

      {/* Logout Button at Bottom of Sidebar */}
      <div className="p-4 border-t border-border ">
        <SideBarNavItem href="/" variant="ghost">
          <LogOut className="w-4 h-4" />
          Logout
        </SideBarNavItem>
      </div>
    </aside>
  );
}
