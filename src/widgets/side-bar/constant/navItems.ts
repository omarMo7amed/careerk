import {
  Briefcase,
  Users,
  LayoutDashboard,
  BarChart3,
  Building2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};
export const companyNavItems = [
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

export const jobseekerNavItems = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard/jobseeker/overview",
  },
  {
    name: "CV Management",
    icon: LayoutDashboard,
    href: "/dashboard/jobseeker/cv-management",
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
