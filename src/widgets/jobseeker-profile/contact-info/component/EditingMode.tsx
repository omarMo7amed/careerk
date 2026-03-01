import { Button } from "@/shared";
import { useContactInfoContext } from "../model/ContactInfoContext";
import { CONTACT_INFO_FIELDS } from "../constant/contactInfoFields";
import { EditableField } from "./EditableField";

export function EditingMode() {
  const { state, setField, isPending, handleSave, cancelEdit } =
    useContactInfoContext();

  return (
    <div className="flex flex-col gap-3">
      {CONTACT_INFO_FIELDS.map(
        ({ key, label, Icon, type, placeholder, disabled }) => (
          <EditableField
            key={key}
            icon={<Icon className="w-4 h-4" />}
            label={label}
            value={state[key]}
            set={(v) => setField(key, v)}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
          />
        ),
      )}

      <div className="flex gap-2 justify-end mt-1">
        <Button onClick={cancelEdit} variant="outline">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={isPending}>
          {isPending ? "Saving…" : "Save"}
        </Button>
      </div>
    </div>
  );
}
