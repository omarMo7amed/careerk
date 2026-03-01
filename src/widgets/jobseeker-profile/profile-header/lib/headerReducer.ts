import { HeaderAction, HeaderState } from "../types/headerReducerType";

export const INITIAL_HEADER_STATE: HeaderState = { status: "idle" };

export function headerReducer(
  state: HeaderState,
  action: HeaderAction,
): HeaderState {
  switch (action.type) {
    case "START_EDIT":
      return {
        status: "editing",
        title: action.title,
        location: action.location,
        fullName: action.fullName,
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
