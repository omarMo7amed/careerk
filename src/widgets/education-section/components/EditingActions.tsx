import { Button } from "@/shared";
import { useEducationContext } from "../model/EducationContext";

export function EditingActions() {
  const { cancelEdit, handleSave, isPending } = useEducationContext();

  return (
    <div className="flex gap-2 justify-end mt-1">
      <Button variant="outline" onClick={cancelEdit} disabled={isPending}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSave} disabled={isPending}>
        {isPending ? "Saving…" : "Save"}
      </Button>
    </div>
  );
}
