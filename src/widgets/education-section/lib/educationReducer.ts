import type { EducationState, EducationAction } from "../types/educationTypes";
import { EMPTY_EDUCATION_FORM, educationToForm } from "../types/educationTypes";

export function educationReducer(
  state: EducationState,
  action: EducationAction,
): EducationState {
  switch (action.type) {
    case "SET_ADDING_FORM_FIELD":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };

    case "OPEN_ADDING_FORM":
      return { ...state, isAddingVisible: true };

    case "CLOSE_ADDING_FORM":
      return { ...state, isAddingVisible: false, form: EMPTY_EDUCATION_FORM };

    case "SUBMIT_ADDING_FORM": {
      return {
        ...state,
        form: EMPTY_EDUCATION_FORM,
        isAddingVisible: false,
      };
    }

    case "START_UPDATING_ENTRY": {
      return {
        ...state,
        form: EMPTY_EDUCATION_FORM,
        isAddingVisible: false,
        updatingIndex: action.index,
        updatingId: action.education.id ?? null,
        updateForm: educationToForm(action.education),
      };
    }

    case "SET_UPDATING_FORM_FIELD":
      return {
        ...state,
        updateForm: { ...state.updateForm, [action.field]: action.value },
      };

    case "SUBMIT_UPDATING_FORM": {
      return {
        ...state,
        updatingIndex: null,
        updatingId: null,
        updateForm: EMPTY_EDUCATION_FORM,
      };
    }

    case "CANCEL_UPDATING_ENTRY":
      return {
        ...state,
        updatingIndex: null,
        updatingId: null,
        updateForm: EMPTY_EDUCATION_FORM,
      };
    default:
      return state;
  }
}
