import type { EducationState, EducationAction } from "../types/educationTypes";
import { EMPTY_EDUCATION_FORM, educationToForm } from "../types/educationTypes";
import type { Education } from "@/entities/education";

export function educationReducer(
  state: EducationState,
  action: EducationAction,
): EducationState {
  switch (action.type) {
    case "START_EDIT":
      return {
        status: "editing",
        educations: action.educations,
        form: EMPTY_EDUCATION_FORM,
        isFormVisible: false,
        editingIndex: null,
        editForm: EMPTY_EDUCATION_FORM,
      };

    case "SET_FORM_FIELD":
      if (state.status !== "editing") return state;
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };

    case "OPEN_FORM":
      if (state.status !== "editing") return state;
      return { ...state, isFormVisible: true };

    case "CLOSE_FORM":
      if (state.status !== "editing") return state;
      return { ...state, isFormVisible: false, form: EMPTY_EDUCATION_FORM };

    case "SUBMIT_FORM": {
      if (state.status !== "editing") return state;
      const { gpa, isCurrent, endDate, ...rest } = state.form;
      const newEntry: Education = {
        ...rest,
        gpa: gpa ? parseFloat(gpa) : null,
        isCurrent,
        endDate: isCurrent ? null : endDate || null,
      };
      return {
        ...state,
        educations: [...state.educations, newEntry],
        form: EMPTY_EDUCATION_FORM,
        isFormVisible: false,
      };
    }

    case "REMOVE":
      if (state.status !== "editing") return state;
      return {
        ...state,
        educations: state.educations.filter((_, i) => i !== action.index),
      };

    case "START_EDIT_ENTRY":
      if (state.status !== "editing") return state;
      return {
        ...state,
        editingIndex: action.index,
        editForm: educationToForm(state.educations[action.index]),
        isFormVisible: false,
      };

    case "SET_EDIT_FORM_FIELD":
      if (state.status !== "editing") return state;
      return {
        ...state,
        editForm: { ...state.editForm, [action.field]: action.value },
      };

    case "SUBMIT_EDIT_FORM": {
      if (state.status !== "editing" || state.editingIndex === null)
        return state;
      const { gpa, isCurrent, endDate, ...rest } = state.editForm;
      const updated: Education = {
        ...rest,
        gpa: gpa ? parseFloat(gpa) : null,
        isCurrent,
        endDate: isCurrent ? null : endDate || null,
      };
      const newEducations = state.educations.map((e, i) =>
        i === state.editingIndex ? updated : e,
      );
      return {
        ...state,
        educations: newEducations,
        editingIndex: null,
        editForm: EMPTY_EDUCATION_FORM,
      };
    }

    case "CANCEL_EDIT_ENTRY":
      if (state.status !== "editing") return state;
      return {
        ...state,
        editingIndex: null,
        editForm: EMPTY_EDUCATION_FORM,
      };

    case "CANCEL":
    case "SAVE_SUCCESS":
      return { status: "idle" };

    default:
      return state;
  }
}
