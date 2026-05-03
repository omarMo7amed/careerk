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

export type EducationState = {
  form: EducationForm;
  isAddingVisible: boolean;
  updatingIndex: number | null;
  updatingId: string | null;
  updateForm: EducationForm;
};

export type EducationAction =
  | {
      type: "SET_ADDING_FORM_FIELD";
      field: keyof EducationForm;
      value: string | boolean | null;
    }
  | { type: "OPEN_ADDING_FORM" }
  | { type: "CLOSE_ADDING_FORM" }
  | { type: "SUBMIT_ADDING_FORM" }
  | { type: "START_UPDATING_ENTRY"; index: number; education: Education }
  | {
      type: "SET_UPDATING_FORM_FIELD";
      field: keyof EducationForm;
      value: string | boolean | null;
    }
  | { type: "SUBMIT_UPDATING_FORM" }
  | { type: "CANCEL_UPDATING_ENTRY" };

export interface EducationSectionProps {
  isOwner?: boolean;
}
