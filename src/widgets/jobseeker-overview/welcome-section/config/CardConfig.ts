import { Send, Star, Bookmark, Calendar } from "lucide-react";

export const iconMap = {
  send: Send,
  star: Star,
  bookmark: Bookmark,
  calendar: Calendar,
} as const;

export const colorMap = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
  },
} as const;
