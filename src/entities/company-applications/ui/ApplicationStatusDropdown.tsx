"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { ApplicationStatus } from "@/entities/application";

const STATUS_CONFIG: Record<
  ApplicationStatus,
  { label: string; color: string; bg: string }
> = {
  PENDING: { label: "Pending", color: "text-yellow-600", bg: "bg-yellow-50" },
  REVIEWED: { label: "Reviewed", color: "text-blue-600", bg: "bg-blue-50" },
  SHORTLISTED: {
    label: "Shortlisted",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  INTERVIEW_SCHEDULED: {
    label: "Interview Scheduled",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  REJECTED: { label: "Rejected", color: "text-red-600", bg: "bg-red-50" },
  HIRED: { label: "Hired", color: "text-green-600", bg: "bg-green-50" },
  WITHDRAWN: { label: "Withdrawn", color: "text-gray-500", bg: "bg-gray-100" },
};

interface Props {
  status: ApplicationStatus;
  onChange: (status: ApplicationStatus) => void;
}

export function ApplicationStatusDropdown({ status, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const cfg = STATUS_CONFIG[status];

  return (
    <div className="relative shrink-0 flex justify-end">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`
          flex items-center h-fit gap-2 px-3 py-1 rounded-full text-sm font-medium
          border border-border transition-all
          ${cfg.bg} ${cfg.color}
        `}
      >
        {cfg.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-8 z-20 w-48 rounded-lg border border-border bg-bg-surface shadow-lg overflow-hidden">
            {(Object.keys(STATUS_CONFIG) as ApplicationStatus[]).map((s) => {
              const c = STATUS_CONFIG[s];
              return (
                <button
                  key={s}
                  onClick={() => {
                    onChange(s);
                    setOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 text-sm
                    transition-colors text-left hover:bg-bg-muted
                    ${s === status ? "font-medium" : ""}
                  `}
                >
                  <span className={c.color}>{c.label}</span>
                  {s === status && <Check className={`w-4 h-4 ${c.color}`} />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
