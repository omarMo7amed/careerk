import type { FilterItemProps } from "../types/filterItem";

export function FilterItem({ opt, checked, onToggle }: FilterItemProps) {
  return (
    <li className="flex items-center justify-between gap-2 min-w-0">
      <label className="flex items-center gap-3 cursor-pointer w-full min-w-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(opt.value)}
          className="h-4 w-4 rounded text-primary border-border"
        />
        <span className="text-sm text-foreground/90 truncate">{opt.label}</span>
      </label>

      {typeof opt.count === "number" && (
        <span className="text-xs text-foreground/60 tabular-nums shrink-0 ml-2">
          {opt.count}
        </span>
      )}
    </li>
  );
}
