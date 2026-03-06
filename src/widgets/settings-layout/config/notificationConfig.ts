import type { LucideIcon } from "lucide-react";
import { Mail, Briefcase, Calendar, FileText, Users } from "lucide-react";

export interface NotificationConfig {
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  defaultEnabled: boolean;
}

// ✅ Job Seeker notifications
export const jobSeekerNotifications: NotificationConfig[] = [
  {
    id: "job-match",
    label: "Job Matches",
    description: "Get notified when new jobs match your profile",
    icon: Briefcase,
    defaultEnabled: true,
  },
  {
    id: "application-status",
    label: "Application Updates",
    description: "Receive updates on your job applications",
    icon: FileText,
    defaultEnabled: true,
  },
  {
    id: "interview-scheduled",
    label: "Interview Reminders",
    description: "Get reminded about upcoming interviews",
    icon: Calendar,
    defaultEnabled: true,
  },
];

export const companyNotifications: NotificationConfig[] = [
  {
    id: "new-application",
    label: "Email on New Application",
    description: "Receive notifications when candidates apply to your jobs",
    icon: Mail,
    defaultEnabled: true,
  },
  {
    id: "candidate-match",
    label: "Email on Candidate Match",
    description: "Get notified when high-matching candidates are found",
    icon: Users,
    defaultEnabled: true,
  },
  {
    id: "job-expiring",
    label: "Email on Job Expiring",
    description: "Reminder when your job postings are about to expire",
    icon: Briefcase,
    defaultEnabled: true,
  },
];

export function getNotificationsByRole(
  role: "jobseeker" | "company",
): NotificationConfig[] {
  return role === "jobseeker" ? jobSeekerNotifications : companyNotifications;
}
