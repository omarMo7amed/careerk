import React from "react";
import {
  Briefcase,
  Users,
  LayoutDashboard,
  BarChart3,
  Building2,
  BookOpen,
  Github,
} from "lucide-react";

export type NavItem = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export const companyNavItems: NavItem[] = [
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

export const jobseekerNavItems: NavItem[] = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard/jobseeker/overview",
  },
  {
    name: "CV Management",
    icon: Briefcase,
    href: "/dashboard/jobseeker/cv-management",
  },
  {
    name: "Recommended Jobs",
    icon: Briefcase,
    href: "/dashboard/jobseeker/recommended-jobs",
  },
  {
    name: "Interview Prep",
    icon: BookOpen,
    href: "/dashboard/jobseeker/interview-preparation",
  },
  {
    name: "GitHub Projects",
    icon: Github,
    href: "/dashboard/jobseeker/github-projects",
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
