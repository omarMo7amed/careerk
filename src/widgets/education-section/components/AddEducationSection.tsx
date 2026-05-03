import { Button } from "@/shared";
import { Plus } from "lucide-react";
import { useEducationContext } from "../model/EducationContext";
import { AddEducationForm } from "./AddEducationForm";

export function AddEducationSection() {
  const { isAddingVisible, openForm } = useEducationContext();

  return isAddingVisible ? (
    <AddEducationForm />
  ) : (
    <Button onClick={openForm} variant="outline">
      <Plus className="w-4 h-4" />
      Add Education
    </Button>
  );
}
