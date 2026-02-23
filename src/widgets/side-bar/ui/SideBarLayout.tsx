import {
  Briefcase,
  Users,
  LogOut,
  LayoutDashboard,
  BarChart3,
  Building2,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { SideBarNavItem } from "./SideBarNavItem";

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
  const navItems = role === "company" ? companyNavItems : jobseekerNavItems;

  return (
    <aside className="w-64 border-r border-border bg-card/30 h-screen flex flex-col bg-bg-surface overflow-y-auto">
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
