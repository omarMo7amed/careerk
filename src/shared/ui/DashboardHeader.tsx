import { ChevronRight, Home } from "lucide-react";
import { cn } from "../lib/cn";
import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  className?: string;
}

export function DashboardHeader({
  title,
  subtitle,
  breadcrumbs = [],
  className,
}: DashboardHeaderProps) {
  return (
    <header
      className={cn(
        "relative overflow-hidden bg-gradient-to-br  px-6 py-7 sm:px-9 sm:py-9 ",
        className,
      )}
    >
      <div className="relative">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-3 flex items-center gap-1.5 text-xs font-medium"
          >
            <Home className="h-3.5 w-3.5" />
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                {c.href && i < breadcrumbs.length - 1 ? (
                  <Link
                    href={c.href}
                    className="transition-colors  hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      i === breadcrumbs.length - 1 &&
                        "text-primary font-semibold",
                    )}
                  >
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-8 w-1.5 rounded-sm bg-gradient-to-b from-primary to-primary/40"
          />
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h1>
        </div>

        {subtitle && (
          <p className="mt-2 max-w-2xl pl-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
