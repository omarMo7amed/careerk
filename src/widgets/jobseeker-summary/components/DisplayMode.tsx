import { AlignLeft, Pencil } from "lucide-react";
import { DisplayModeProps } from "../types/displayModeType";

export function DisplayMode({ summary, isOwner, onEdit }: DisplayModeProps) {
  return (
    <>
      <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
        <AlignLeft className="w-4 h-4 text-primary" />
        Summary
        {isOwner && onEdit && (
          <button
            onClick={onEdit}
            className="ml-auto text-text-muted hover:text-primary transition-colors"
            aria-label="Edit summary"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </h2>

      <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
        {summary || <span className="text-text-muted italic">No summary yet.</span>}
      </p>
    </>
  );
}
