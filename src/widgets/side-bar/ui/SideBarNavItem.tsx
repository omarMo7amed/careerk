"use client";

import { cn } from "@/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarNavItemProps {
  variant?: "primary" | "ghost";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function SideBarNavItem({
  variant = "primary",
  href = "/",
  onClick,
  children,
}: SideBarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  const baseStyles =
    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-text-secondary";
  const primaryStyle = `hover:text-white hover:bg-primary ${isActive && "text-white bg-primary"}`;
  const ghostStyle = `hover:text-foreground hover:bg-bg-muted transition-all duration-200`;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        baseStyles,
        variant == "primary" ? primaryStyle : ghostStyle,
      )}
    >
      {children}
    </Link>
  );
}
