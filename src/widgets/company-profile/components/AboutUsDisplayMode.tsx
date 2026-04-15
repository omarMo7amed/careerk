import { FileText, Pencil } from "lucide-react";
import { AboutUsDisplayModeProps } from "../types/componentsTypes";

export function AboutUsDisplayMode({
  description,
  isOwner,
  onEdit,
}: AboutUsDisplayModeProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-base font-semibold">About Us</h2>
        </div>
        {isOwner && (
          <button
            onClick={onEdit}
            className="text-text-muted hover:text-primary transition-colors"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>

      <p className="text-sm text-text-muted">
        {description || (
          <span className="text-text-muted italic">No description yet.</span>
        )}
      </p>
    </>
  );
}
