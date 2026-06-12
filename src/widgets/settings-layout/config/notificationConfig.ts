import type { LucideIcon } from "lucide-react";
import { Briefcase, FileText, Users, Bell } from "lucide-react";

export interface NotificationConfig {
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  defaultEnabled: boolean;
  preferenceKey: string;
}

// ✅ Job Seeker notifications
export const jobSeekerNotifications: NotificationConfig[] = [
  {
    id: "job-match",
    label: "Job Matches",
    description: "Get notified when new jobs match your profile",
    icon: Briefcase,
    defaultEnabled: true,
    preferenceKey: "jobMatchNotificationsEnabled",
  },
  {
    id: "application-status",
    label: "Application Updates",
    description: "Receive updates on your job applications",
    icon: FileText,
    defaultEnabled: true,
    preferenceKey: "applicationStatusNotificationsEnabled",
  },
];

// ✅ Company notifications (mock data — no external API)
export const companyNotifications: NotificationConfig[] = [
  {
    id: "new-applications",
    label: "New Applications",
    description: "Get notified when someone applies to your job listing",
    icon: Users,
    defaultEnabled: true,
    preferenceKey: "newApplicationsNotificationsEnabled",
  },
  {
    id: "candidate-matches",
    label: "Candidate Matches",
    description: "Receive alerts when candidates match your job requirements",
    icon: Briefcase,
    defaultEnabled: true,
    preferenceKey: "candidateMatchNotificationsEnabled",
  },
  {
    id: "application-updates",
    label: "Application Updates",
    description: "Get notified when an application status changes",
    icon: FileText,
    defaultEnabled: false,
    preferenceKey: "applicationUpdateNotificationsEnabled",
  },
  {
    id: "general-updates",
    label: "General Announcements",
    description: "Receive platform updates and announcements",
    icon: Bell,
    defaultEnabled: true,
    preferenceKey: "generalAnnouncementsEnabled",
  },
];

export function getNotificationsByRole(
  role: "jobseeker" | "company",
): NotificationConfig[] {
  return role === "jobseeker" ? jobSeekerNotifications : companyNotifications;
}
