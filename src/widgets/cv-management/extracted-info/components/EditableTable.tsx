import { FIELD_META, PersonalInfo } from "@/entities/cv";

import { EditableRow } from "./EditableRow";
import { useTableHook } from "../model/useTableHook";

interface EditableTableProps {
  confirmed: boolean;
  personalInfo: PersonalInfo;
  title: string;
}

export function EditableTable({
  confirmed,
  personalInfo,
  title,
}: EditableTableProps) {
  const { handleChange } = useTableHook();
  return (
    <div className="rounded-xl border border-border shadow-lg overflow-hidden">
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
              confirmed={confirmed}
              value={personalInfo[key as keyof PersonalInfo] ?? title}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
