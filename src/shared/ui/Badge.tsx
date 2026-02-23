import React from "react";
import { cn } from "@/shared/lib/cn";

interface BadgeProps {
  variant?:
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "active"
    | "pause"
    | "skill";
  size?: "sm" | "md" | "lg" | "default";
  children: React.ReactNode;
  className?: string;
  animate?: boolean; // ADDED: Option to enable shimmer animation
}

export function Badge({
  variant = "default",
  children,
  className = "",
  size = "default",
  animate = false, // ADDED: Default to false
}: BadgeProps) {
  const baseStyles =
    "min-w-[80px] w-fit inline-flex items-center justify-center gap-3 border border-primary/20 rounded-full text-sm font-bold shadow-lg text-center";
  const sizes = {
    default: "px-2 py-1 text-sm",
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    active: "bg-success/10 text-success border-success/20",
    pause: "bg-bg-muted text-text-secondary",
    skill: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizes[size],
        animate && "pill-badge",
        className,
      )}
    >
      {children}
    </span>
  );
}
