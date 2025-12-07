import React from "react";
import Link from "next/link";

export const navigationItems = [
  { label: "Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Candidates", href: "/candidates" },
  { label: "Sign In", href: "/auth" },
];

export function NavigationItems() {
  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
