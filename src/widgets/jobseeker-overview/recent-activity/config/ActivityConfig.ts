import {
  Bell,
  Calendar,
  LucideIcon,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

export const IconMap: Record<string, LucideIcon> = {
  application: Send,
  interview: Calendar,
  job: MapPin,
  recommendation: Sparkles,
  default: Bell,
};

export const activityColorMap: Record<
  string,
  {
    bg: string;
    text: string;
    border: string;
  }
> = {
  application: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  interview: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  job: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
  },
  recommendation: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
  },
  default: {
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
  },
};
