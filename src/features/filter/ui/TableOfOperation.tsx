"use client";

import { useState } from "react";
import { useTableOfOperation } from "../model/useTableOfOperation";
import { FilterList } from "../components/FilterList";
import { MobileModal } from "../components/MobileModal";

import { TableOfOperationProps } from "../types/tableOfOperation";

import { ControlPanel } from "../components/ControlPanel";

export function TableOfOperation({
  title,
  options,
  selected: controlledSelected,
  onChange,
}: TableOfOperationProps) {
  const { normalized, selected, toggle, clearAll, selectAll } =
    useTableOfOperation({
      options,
      selected: controlledSelected,
      onChange,
    });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside>
      <div className="p-2 md:p-4 bg-bg-surface border border-border rounded-xl">
        <ControlPanel
          title={title}
          clearAll={clearAll}
          selectAll={selectAll}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* desktop list */}
        <div className="hidden md:block">
          <FilterList
            options={normalized}
            selected={selected}
            onToggle={toggle}
          />
        </div>

        {/* mobile modal */}
        {isOpen && (
          <MobileModal
            title={title}
            options={normalized}
            selected={selected}
            onToggle={toggle}
            onClear={clearAll}
            onClose={() => setIsOpen(false)}
            onSelectAll={selectAll}
          />
        )}
      </div>
    </aside>
  );
}
