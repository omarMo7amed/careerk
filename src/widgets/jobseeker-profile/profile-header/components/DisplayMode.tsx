import { MapPin, Briefcase, Pencil } from "lucide-react";
import { useProfileHeaderContext } from "../model/ProfileHeaderContext";

export function DisplayMode() {
  const { fullName, profileHeader, isOwner, startEdit } =
    useProfileHeaderContext();

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-bold text-foreground">{fullName}</h1>

        {isOwner && (
          <button
            onClick={startEdit}
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="Edit header info"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>

      <p className="text-text-secondary text-sm mt-0.5">
        {profileHeader.title}
      </p>

      <div className="flex flex-wrap gap-4 mt-2 text-text-muted text-sm">
        {profileHeader.location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {profileHeader.location}
          </span>
        )}

        {profileHeader.yearsOfExperience > 0 && (
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {profileHeader.yearsOfExperience}{" "}
            {profileHeader.yearsOfExperience === 1 ? "year" : "years"} of
            experience
          </span>
        )}
      </div>
    </>
  );
}
