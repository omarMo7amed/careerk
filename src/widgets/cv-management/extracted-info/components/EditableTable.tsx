/* eslint-disable @typescript-eslint/no-explicit-any */
import { FIELD_META } from "@/entities/cv";

import { EditableRow } from "./EditableRow";
import { EditableMobileCard } from "./EditableMobileCard";
import { useTableHook } from "../model/useTableHook";
import { JobSeekerProfile, useUpdateProfile } from "@/entities/job-seeker";

// import { useAuth } from "@/features/auth";
interface EditableTableProps {
  confirmed: boolean;
  personalInfo: JobSeekerProfile & "firstName" & "lastName";
  hasProfile: boolean;
  tableRef?: React.Ref<{ getEditedData: () => Record<string, any> }>;
}

export function EditableTable({
  confirmed,
  personalInfo,
  hasProfile,
}: EditableTableProps) {
  // const {token}=useAuth()
  const { handleChange } = useTableHook(personalInfo);
  const { updateProfile } = useUpdateProfile({ token: "", hasProfile });
  const handleFieldBlur = (fieldKey: string, value: string) => {
    updateProfile({ [fieldKey]: value });
  };

  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl border border-border shadow-lg overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {FIELD_META.map(({ key, label, Icon, isLink }, index) => (
              <EditableRow
                key={key}
                label={label}
                fieldKey={key}
                Icon={Icon}
                isLink={isLink}
                handleChange={handleChange}
                onBlur={handleFieldBlur}
                confirmed={confirmed}
                value={
                  personalInfo[
                    key as keyof JobSeekerProfile & "firstName" & "lastName"
                  ] ?? ""
                }
                isEven={index % 2 === 0}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <EditableMobileCard
        confirmed={confirmed}
        personalInfo={personalInfo}
        handleChange={handleChange}
        handleFieldBlur={handleFieldBlur}
      />
    </>
  );
}
