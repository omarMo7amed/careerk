import { LucideIcon, Send, Calendar, X, Check, RefreshCw } from "lucide-react";

export const IconMap: Record<string, LucideIcon> = {
  APPLICATION_SUBMITTED: Send,
  INTERVIEW_SCHEDULED: Calendar,
  APPLICATION_WITHDRAWN: X,
  APPLICATION_REJECTED: X,
  APPLICATION_ACCEPTED: Check,
  STATUS_CHANGED: RefreshCw,
  default: Send,
};

export const activityColorMap: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  APPLICATION_SUBMITTED: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  INTERVIEW_SCHEDULED: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  APPLICATION_WITHDRAWN: {
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
  },
  APPLICATION_REJECTED: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-200",
  },
  APPLICATION_ACCEPTED: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  STATUS_CHANGED: {
    bg: "bg-yellow-50",
    text: "text-yellow-600",
    border: "border-yellow-200",
  },
  default: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
};
