import { companyTypeLabels } from "@/entities/company";
import { X } from "lucide-react";
import { HeaderEditingModeProps } from "../types/componentsTypes";
import { HeaderFormValues } from "../types/componentsTypes";

export function HeaderEditingMode({
  value,
  isPending,
  onChange,
  onSave,
  onCancel,
}: HeaderEditingModeProps) {
  const inputClass =
    "w-full rounded-lg border border-border bg-bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end">
        <button
          onClick={onCancel}
          className="text-text-muted hover:text-destructive transition-colors"
          aria-label="Cancel edit"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <input
        className={inputClass}
        value={value.name}
        onChange={(e) => onChange({ ...value, name: e.target.value })}
        placeholder="Company name"
      />

      <select
        className={inputClass}
        value={value.type}
        onChange={(e) =>
          onChange({
            ...value,
            type: e.target.value as HeaderFormValues["type"],
          })
        }
      >
        <option value="">Select company type...</option>
        {Object.entries(companyTypeLabels).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <div className="flex gap-2 justify-end">
        <button
          onClick={onCancel}
          className="px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-bg-muted transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          disabled={isPending}
          className="px-3 py-1.5 text-sm rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {isPending ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}
