"use client";

import { useState } from "react";
import { cn } from "@/shared";
import { companyNavItems, jobseekerNavItems } from "../constant/navItems";
import { SideBarBackdrop } from "./SideBarBackdrop";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarNavigation } from "./SideBarNavigation";
import { SideBarFooter } from "./SideBarFooter";

type SideBarLayoutProps = {
  role: "company" | "jobseeker";
};

export function SideBarLayout({ role }: SideBarLayoutProps) {
  const [open, setOpen] = useState(false);
  const navItems = role === "company" ? companyNavItems : jobseekerNavItems;

  return (
    <>
      {/* Backdrop — only on md and below, only when open */}
      <SideBarBackdrop open={open} onClose={() => setOpen(false)} />

      <aside
        className={cn(
          "h-screen flex flex-col bg-bg-surface border-r border-border overflow-hidden",
          "transition-[width] duration-300 ease-in-out]",

          // Desktop (lg+): always full width
          "lg:relative lg:w-64",

          // Below lg: fixed overlay, icon rail by default, full width when open
          "fixed inset-y-0 left-0 z-50",
          open ? "w-full sm:w-64 shadow-2xl" : "w-16",
        )}
      >
        <div className="p-2 lg:p-4 flex-1 overflow-y-auto overflow-x-hidden">
          <SideBarHeader open={open} toggle={() => setOpen((prev) => !prev)} />

          <SideBarNavigation
            navItems={navItems}
            open={open}
            close={() => setOpen(false)}
          />
        </div>

        {/* Logout */}
        <SideBarFooter open={open} />
      </aside>

      <div className="w-16 shrink-0 lg:hidden" />
    </>
  );
}
