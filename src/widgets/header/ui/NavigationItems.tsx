import Link from "next/link";

export const navigationItems = [
  { label: "Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Candidates", href: "/candidates" },
];

export function NavigationItems() {
  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="nav-link text-text-secondary hover:text-primary font-semibold relative"
        >
          {item.label}
          <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full -translate-x-1/2 rounded-sm"></span>
        </Link>
      ))}
    </>
  );
}
