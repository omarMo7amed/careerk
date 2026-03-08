import type { Education, DegreeType } from "@/entities/education";

export interface EducationForm {
  institutionName: string;
  fieldOfStudy: string;
  degreeType: DegreeType | null;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  gpa: string;
  description: string;
}

export const EMPTY_EDUCATION_FORM: EducationForm = {
  institutionName: "",
  fieldOfStudy: "",
  degreeType: null,
  startDate: "",
  endDate: "",
  isCurrent: false,
  gpa: "",
  description: "",
};

export function educationToForm(edu: Education): EducationForm {
  return {
    institutionName: edu.institutionName,
    fieldOfStudy: edu.fieldOfStudy,
    degreeType: edu.degreeType,
    startDate: edu.startDate,
    endDate: edu.endDate ?? "",
    isCurrent: edu.isCurrent,
    gpa: edu.gpa != null ? String(edu.gpa) : "",
    description: edu.description,
  };
}

export type EducationState =
  | { status: "idle" }
  | {
      status: "editing";
      educations: Education[];
      form: EducationForm;
      isFormVisible: boolean;
      editingIndex: number | null;
      editForm: EducationForm;
    };

export type EducationAction =
  | { type: "START_EDIT"; educations: Education[] }
  | {
      type: "SET_FORM_FIELD";
      field: keyof EducationForm;
      value: string | boolean | null;
    }
  | { type: "OPEN_FORM" }
  | { type: "CLOSE_FORM" }
  | { type: "SUBMIT_FORM" }
  | { type: "REMOVE"; index: number } // index but i will change to id later ya zmeeely
  | { type: "CANCEL" }
  | { type: "SAVE_SUCCESS" }
  | { type: "START_EDIT_ENTRY"; index: number }
  | {
      type: "SET_EDIT_FORM_FIELD";
      field: keyof EducationForm;
      value: string | boolean | null;
    }
  | { type: "SUBMIT_EDIT_FORM" }
  | { type: "CANCEL_EDIT_ENTRY" };

export interface EducationSectionProps {
  isOwner?: boolean;
}
