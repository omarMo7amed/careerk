import type { FilterListProps } from "../types/filterList";
import { FilterItem } from "./FilterItem";

export function FilterList({
  options,
  selected,
  onToggle,
  className = "",
  maxHeightClass = "max-h-72",
}: FilterListProps) {
  return (
    <ul
      className={`flex flex-col gap-2 overflow-auto pr-2 ${maxHeightClass} ${className}`}
    >
      {options.length === 0 && (
        <li className="text-sm text-foreground/60">No options</li>
      )}
      {options.map((opt) => (
        <FilterItem
          key={opt.value}
          opt={opt}
          checked={selected.includes(opt.value)}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
