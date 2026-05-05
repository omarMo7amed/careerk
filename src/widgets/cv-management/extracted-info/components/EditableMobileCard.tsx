/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { FIELD_META } from "@/entities/cv";
import { JobSeekerProfile } from "@/entities/job-seeker";

interface EditableMobileCardProps {
  confirmed: boolean;
  personalInfo: JobSeekerProfile & "firstName" & "lastName";
  handleChange: (fieldKey: string, value: string) => void;
  handleFieldBlur: (fieldKey: string, value: string) => void;
}

export function EditableMobileCard({
  confirmed,
  personalInfo,
  handleChange,
  handleFieldBlur,
}: EditableMobileCardProps) {
  return (
    <div className="md:hidden space-y-3">
      {FIELD_META.map(({ key, label, Icon, isLink }) => {
        const value =
          personalInfo[
            key as keyof JobSeekerProfile & "firstName" & "lastName"
          ] ?? "";

        return (
          <div
            key={key}
            className="rounded-lg border border-border bg-bg-surface p-4 shadow"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-primary">{<Icon size={18} />}</span>
              <span className="font-medium text-text-secondary">{label}</span>
              {key === "yearsOfExperience" && (
                <span className="text-xs bg-warning text-background px-2 py-1 rounded font-normal">
                  Read-only
                </span>
              )}
              {key === "cvEmail" && (
                <span className="text-xs bg-primary text-background px-2 py-1 rounded font-normal">
                  Important
                </span>
              )}
            </div>
            <div>
              {confirmed ? (
                value ? (
                  isLink ? (
                    <Link
                      href={value as string}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline break-all block"
                    >
                      {value}
                    </Link>
                  ) : (
                    <span className="text-foreground break-all">
                      {typeof value === "number" ? `+${value}` : value}
                    </span>
                  )
                ) : (
                  <span className="text-text-muted italic">—</span>
                )
              ) : (
                <input
                  type="text"
                  disabled={confirmed || typeof value === "number"}
                  defaultValue={
                    typeof value === "number" ? `+${value}` : (value ?? "")
                  }
                  onChange={(e) => handleChange(key, e.target.value)}
                  onBlur={(e) => handleFieldBlur(key, e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-text-muted focus:bg-primary/5 rounded px-1.5 py-1 transition-colors border border-transparent focus:border-primary/30"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
