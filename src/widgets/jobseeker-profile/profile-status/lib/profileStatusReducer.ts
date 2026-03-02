import { Action, State } from "../types/profileStatusReducer";

export const INITIAL_STATE: State = { status: "idle" };

export function profileStatusReducer(state: State, action: Action): State {
  switch (action.type) {
    case "START_EDIT":
      const p = action.profileStatus;
      return {
        status: "editing",
        availabilityStatus: p.availabilityStatus || "",
        workPreference: p.workPreference || "",
        preferredJobTypes: p.preferredJobTypes || [],
        expectedSalary: p.expectedSalary,
        noticePeriod: p.noticePeriod || "",
      };

    case "SET_FIELD":
      if (state.status !== "editing") return state;
      return { ...state, [action.field]: action.value };

    case "CANCEL":
    case "SAVE_SUCCESS":
      return { status: "idle" };

    default:
      return state;
  }
}
