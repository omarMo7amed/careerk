import { Button } from "@/shared";
import { Plus } from "lucide-react";
import { useEducationContext } from "../model/EducationContext";
import { AddEducationForm } from "./AddEducationForm";

export function AddEducationSection() {
  const { isFormVisible, editingIndex, openForm } = useEducationContext();

  if (editingIndex !== null) return null;

  return isFormVisible ? (
    <AddEducationForm />
  ) : (
    <Button onClick={openForm} variant="outline">
      <Plus className="w-4 h-4" />
      Add Education
    </Button>
  );
}
