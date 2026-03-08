import { AlignLeft, X } from "lucide-react";
import { EditingModeProps } from "../types/editingModeType";

export function EditingMode({
  value,
  isPending,
  onChange,
  onSave,
  onCancel,
}: EditingModeProps) {
  return (
    <>
      <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
        <AlignLeft className="w-4 h-4 text-primary" />
        Summary
        <button
          onClick={onCancel}
          className="ml-auto text-text-muted hover:text-destructive transition-colors"
          aria-label="Cancel edit"
        >
          <X className="w-4 h-4" />
        </button>
      </h2>

      <div className="flex flex-col gap-3">
        <textarea
          className="w-full min-h-[120px] rounded-lg border border-border bg-bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write a short professional summary…"
        />
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
