"use client";

import { cn } from "@/shared";
import { Props } from "../types/types";

export function LocalFilterBar({ tabs, active, onChange }: Props) {
  return (
    <div className="w-full overflow-x-auto border-b border-border mb-10">
      <div role="tablist" aria-label="Filter jobs" className="flex   px-5 pt-2">
        {tabs.map(({ key, label, count }) => (
          <button
            key={key}
            role="tab"
            type="button"
            aria-selected={active === key}
            onClick={() => onChange(key)}
            className={cn(
              "relative flex items-center gap-1.5 px-4 py-2.5",
              "transition-colors cursor-pointer shrink-0 border-b-2 -mb-px",
              "text-lg font-medium whitespace-nowrap",
              active === key
                ? "text-primary border-primary"
                : "text-text-secondary border-transparent hover:text-foreground",
            )}
          >
            {label}
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-full px-1.5 py-0.5",
                "text-sm font-semibold min-w-[18px]",
                active === key
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-text-secondary",
              )}
            >
              {count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
