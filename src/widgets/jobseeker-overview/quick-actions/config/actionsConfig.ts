import { FileText, Search, Briefcase, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export const quickActions: QuickAction[] = [
  {
    id: "1",
    label: "Update Resume",
    icon: FileText,
    href: "dashboard/jobseeker/cv",
    color: "text-red-500",
  },
  {
    id: "2",
    label: "Browse Jobs",
    icon: Search,
    href: "/dashboard/jobseeker/find-jobs",
    color: "text-blue-500",
  },
  {
    id: "3",
    label: "View Applications",
    icon: Briefcase,
    href: "/dashboard/jobseeker/applications",
    color: "text-purple-500",
  },
  {
    id: "4",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/jobseeker/settings",
    color: "text-gray-500",
  },
];
