import { EditableFieldProps } from "../types/editableFieldProps";

export function EditableField({
  label,
  icon,
  type = "text",
  value,
  set,
  placeholder = "",
  disabled = false,
}: EditableFieldProps) {
  return (
    <div key={label} className="flex items-center gap-3">
      <span className="text-primary shrink-0">{icon}</span>
      <span className="text-text-muted w-28 shrink-0 text-sm">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => set(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
      />
    </div>
  );
}
