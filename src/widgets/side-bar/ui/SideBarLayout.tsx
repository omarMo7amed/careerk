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
import { Button } from "@/shared";

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
  {
    name: "Analytics",
    icon: BarChart3,
    href: "/dashboard/company/analytics",
  },
  { name: "Profile", icon: Building2, href: "/dashboard/company/profile" },
  { name: "Settings", icon: Building2, href: "/dashboard/company/settings" },
];
// jobseeker icons will change
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
  const [collapsed, setCollapsed] = useState(false);
  const navItems = role === "company" ? companyNavItems : jobseekerNavItems;

  return (
    <aside
      style={{
        width: collapsed ? "80px" : "256px",
        transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className="border-r border-border h-screen flex flex-col bg-bg-surface overfl,ow-y-auto"
    >
      <div className="p-4 flex-1">
        {/* Logo */}
        <div
          style={{ justifyContent: collapsed ? "center" : "space-between" }}
          className="flex items-center mb-6 py-5 border-b ,border-border"
        >
          {!collapsed && (
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-light.svg"
                alt="Careerk Logo"
                width={160}
                height={40}
                priority
              />
            </Link>
          )}

          {/* Collapse toggle */}
          <Button
            onClick={() => setCollapsed((prev) => !prev)}
            variant="ghost"
            className="cursor-pointer"
          >
            <ChevronLeft
              className="w-4 h-4 transition-transform duration-300 text-text-secondary"
              style={{
                transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Button>
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
                <span
                  className={`${collapsed ? "hidden" : "flex items-center"} `}
                >
                  {item.name}
                </span>
              </SideBarNavItem>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-border ">
        <SideBarNavItem href="/" variant="ghost">
          <LogOut className="w-4 h-4" />
          <span className={`${collapsed ? "hidden" : "flex items-center"} `}>
            Logout
          </span>
        </SideBarNavItem>
      </div>
    </aside>
  );
}
