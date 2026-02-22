"use client";

import { TableOfOperation } from "@/features/filter";
import { Button } from "@/shared";
import { X } from "lucide-react";

interface FilterSideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSideModal({ isOpen, onClose }: FilterSideModalProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-bg-surface border-l border-border shadow-xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Filters</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="p-1.5 rounded-md hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter panels */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <TableOfOperation
            title="Job Type"
            options={["Full-time", "Part-time", "Contract"]}
            asDropdown={false}
          />
          <TableOfOperation
            title="Experience Level"
            options={["Entry Level", "Mid Level", "Senior Level"]}
            asDropdown={false}
          />
          <TableOfOperation
            title="Location"
            options={["Remote", "On-site", "Hybrid"]}
            asDropdown={false}
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={onClose}>
            Apply
          </Button>
        </div>
      </aside>
    </>
  );
}
