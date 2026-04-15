import {
  Building2,
  Calendar,
  List,
  LucideIcon,
  MapPin,
  Users,
  X,
} from "lucide-react";
import { CompanySize, companySizeLabels } from "@/entities/company";
import { KeyInformationEditingModeProps } from "../types/componentsTypes";

export function KeyInformationEditingMode({
  value,
  isPending,
  onChange,
  onSave,
  onCancel,
}: KeyInformationEditingModeProps) {
  const field = (
    label: string,
    Icon: LucideIcon,
    children: React.ReactNode,
  ) => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-primary shrink-0" />
        <label className="text-sm text-text-muted">{label}</label>
      </div>
      {children}
    </div>
  );

  const inputClass =
    "w-full rounded-lg border border-border bg-bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-primary" />
          <h2 className="text-base font-semibold">Key Information</h2>
        </div>
        <button
          onClick={onCancel}
          className="ml-auto text-text-muted hover:text-destructive transition-colors"
          aria-label="Cancel edit"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {field(
          "Industry",
          Building2,
          <input
            className={inputClass}
            value={value.industry}
            onChange={(e) => onChange({ ...value, industry: e.target.value })}
            placeholder="e.g. Software, Healthcare…"
          />,
        )}

        {field(
          "Company Size",
          Users,
          <select
            className={inputClass}
            value={value.size}
            onChange={(e) =>
              onChange({ ...value, size: e.target.value as CompanySize })
            }
          >
            <option value="">Select size…</option>
            {Object.entries(companySizeLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>,
        )}

        {field(
          "Headquarters",
          MapPin,
          <input
            className={inputClass}
            value={value.headquarters}
            onChange={(e) =>
              onChange({ ...value, headquarters: e.target.value })
            }
            placeholder="e.g. New York, USA"
          />,
        )}

        {field(
          "Founded Year",
          Calendar,
          <input
            className={inputClass}
            type="number"
            min={1800}
            max={new Date().getFullYear()}
            value={value.foundedYear}
            onChange={(e) =>
              onChange({ ...value, foundedYear: e.target.value })
            }
            placeholder="e.g. 2015"
          />,
        )}

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
            {isPending ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </>
  );
}
