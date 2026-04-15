import { Building2, Users, MapPin, Calendar, Pencil, List } from "lucide-react";
import { companySizeLabels } from "@/entities/company-profile";
import { KeyInformationDisplayModeProps } from "../types/componentsTypes";

export function KeyInformationDisplayMode({
  industry,
  size,
  headquarters,
  foundedYear,
  isOwner,
  onEdit,
}: KeyInformationDisplayModeProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-primary" />
          <h2 className="text-base font-semibold">Key Information</h2>
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

      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <p className="text-sm text-text-muted">Industry</p>
          </div>
          <p className="font-bold text-sm">
            {industry || (
              <span className="italic font-normal text-text-muted">
                Not set
              </span>
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <p className="text-sm text-text-muted">Company Size</p>
          </div>
          <p className="font-bold text-sm">
            {size ? (
              companySizeLabels[size]
            ) : (
              <span className="italic font-normal text-text-muted">
                Not set
              </span>
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-sm text-text-muted">Headquarters</p>
          </div>
          <p className="font-bold text-sm">
            {headquarters || (
              <span className="italic font-normal text-text-muted">
                Not set
              </span>
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <p className="text-sm text-text-muted">Founded</p>
          </div>
          <p className="font-bold text-sm">
            {foundedYear || (
              <span className="italic font-normal text-text-muted">
                Not set
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
