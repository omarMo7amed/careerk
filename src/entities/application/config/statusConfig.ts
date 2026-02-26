import {
  CircleDot,
  Clock,
  CheckCircle,
  XCircle,
  UserCheck,
  Ban,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ApplicationStatus } from "@/entities/application";

export interface StatusConfig {
  label: string;
  color: string;
  bg: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  icon: LucideIcon;
}

export const statusConfig: Record<ApplicationStatus, StatusConfig> = {
  PENDING: {
    label: "Pending",
    color: "text-blue-700",
    bg: "bg-blue-50",
    borderColor: "border-l-blue-500",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    icon: Clock,
  },
  REVIEWED: {
    label: "Reviewed",
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    borderColor: "border-l-yellow-500",
    badgeBg: "bg-yellow-100",
    badgeText: "text-yellow-700",
    icon: CircleDot,
  },
  SHORTLISTED: {
    label: "Shortlisted",
    color: "text-purple-700",
    bg: "bg-purple-50",
    borderColor: "border-l-purple-500",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    icon: Star,
  },
  INTERVIEW_SCHEDULED: {
    label: "Interview Scheduled",
    color: "text-green-700",
    bg: "bg-green-50",
    borderColor: "border-l-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    icon: CheckCircle,
  },
  REJECTED: {
    label: "Rejected",
    color: "text-red-700",
    bg: "bg-red-50",
    borderColor: "border-l-red-500",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
    icon: XCircle,
  },
  HIRED: {
    label: "Hired",
    color: "text-green-700",
    bg: "bg-green-50",
    borderColor: "border-l-green-600",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    icon: UserCheck,
  },
  WITHDRAWN: {
    label: "Withdrawn",
    color: "text-gray-700",
    bg: "bg-gray-50",
    borderColor: "border-l-gray-400",
    badgeBg: "bg-gray-100",
    badgeText: "text-gray-700",
    icon: Ban,
  },
};
