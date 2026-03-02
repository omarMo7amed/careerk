"use client";

import {
  Briefcase,
  Users,
  LogOut,
  LayoutDashboard,
  BarChart3,
  Building2,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SideBarNavItem } from "./SideBarNavItem";
import { useState } from "react";
import { Button, cn } from "@/shared";

const companyNavItems = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard/company/overview",
  },
  {
    name: "Job Listings",
    icon: Briefcase,
    href: "/dashboard/company/job-listings",
  },
  { name: "Candidates", icon: Users, href: "/dashboard/company/candidates" },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/company/analytics" },
  { name: "Profile", icon: Building2, href: "/dashboard/company/profile" },
  { name: "Settings", icon: Building2, href: "/dashboard/company/settings" },
];

const jobseekerNavItems = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard/jobseeker/overview",
  },
  {
    name: "Recommended Jobs",
    icon: Briefcase,
    href: "/dashboard/jobseeker/recommended-jobs",
  },
  { name: "Find Jobs", icon: Users, href: "/dashboard/jobseeker/find-jobs" },
  {
    name: "Applications",
    icon: BarChart3,
    href: "/dashboard/jobseeker/applications",
  },
  { name: "Profile", icon: Building2, href: "/dashboard/jobseeker/profile" },
  { name: "Settings", icon: Building2, href: "/dashboard/jobseeker/settings" },
];

type SideBarLayoutProps = {
  role: "company" | "jobseeker";
};

export function SideBarLayout({ role }: SideBarLayoutProps) {
  const [open, setOpen] = useState(false);
  const navItems = role === "company" ? companyNavItems : jobseekerNavItems;

  return (
    <>
      {/* Backdrop — only on md and below, only when open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

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
          <div
            className={`flex items-center justify-between sm:justify-center lg:justify-start mb-6 px-2 py-5 border-b border-border`}
          >
            <Link
              href="/"
              className={`flex items-center overflow-hidden  ${open && "w-auto"}`}
            >
              <Image
                src="/logo-light.svg"
                alt="Careerk Logo"
                width={160}
                height={40}
                priority
              />
            </Link>

            {/* Toggle — only below lg */}
            <div className="cursor-pointer lg:hidden">
              <Button onClick={() => setOpen((prev) => !prev)} variant="ghost">
                <ChevronLeft
                  className="w-4 h-4 text-text-secondary transition-transform duration-300"
                  style={{
                    transform: open ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <SideBarNavItem
                  key={item.name}
                  href={item.href}
                  variant="primary"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {/* Always show label on lg; show only when open on smaller */}
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
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <SideBarNavItem href="/" variant="ghost">
            <LogOut className="w-4 h-4 shrink-0" />
            <span className="hidden lg:inline-block whitespace-nowrap">
              Logout
            </span>
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
      </aside>

      {/* In-flow spacer on md and below so content doesn't go under the fixed sidebar */}
      <div className="w-16 shrink-0 lg:hidden" />
    </>
  );
}
