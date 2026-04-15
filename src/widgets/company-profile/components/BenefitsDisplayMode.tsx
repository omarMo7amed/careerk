import { Pencil, Sparkles } from "lucide-react";
import { BenefitsDisplayModeProps } from "../types/componentsTypes";

export function BenefitsDisplayMode({
  benefits,
  isOwner,
  onEdit,
}: BenefitsDisplayModeProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-base font-semibold">Benefits</h2>
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
        {benefits || (
          <span className="text-text-muted italic">No benefits yet.</span>
        )}
      </p>
    </>
  );
}
