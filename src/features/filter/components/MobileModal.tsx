import type { MobileModalProps } from "../types/mobileModal";
import ClearButton from "./ClearButton";
import { FilterList } from "./FilterList";

import { Button } from "@/shared";
import SelectAllButton from "./SelectAllButton";

export function MobileModal({
  title,
  options,
  selected,
  onToggle,
  onClear,
  onClose,
  onSelectAll,
}: MobileModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`filter-title-${title}`}
        className="relative z-10 w-full max-w-md mx-4 bg-bg-surface border border-border rounded-xl p-4 shadow-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <h5 id={`filter-title-${title}`} className="text-lg font-bold">
            {title}
          </h5>

          <div className="flex items-center gap-2">
            <ClearButton onClear={onClear} />

            <SelectAllButton onSelectAll={onSelectAll} />
          </div>
        </div>

        <div className="max-h-[60vh] overflow-auto pr-2">
          <FilterList
            options={options}
            selected={selected}
            onToggle={onToggle}
            maxHeightClass="max-h-[60vh]"
          />
        </div>

        <div className="mt-4 flex items-center justify-end gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            size="sm"
            aria-label="Close filters"
          >
            Close
          </Button>
          <Button variant="primary" onClick={onClose} size="sm">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}
