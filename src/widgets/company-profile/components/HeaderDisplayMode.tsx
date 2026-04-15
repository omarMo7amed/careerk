import { CompanyType, companyTypeLabels } from "@/entities/company";
import { Pencil } from "lucide-react";
import { HeaderDisplayModeProps } from "../types/componentsTypes";

export function HeaderDisplayMode({
  name,
  type,
  isOwner,
  onEdit,
}: HeaderDisplayModeProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">{name || "Company Name"}</span>
        {isOwner && (
          <button
            onClick={onEdit}
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="Edit header"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>
      <p className="text-text-secondary text-sm">
        {type ? companyTypeLabels[type as CompanyType] : "Company Type"}
      </p>
    </>
  );
}
