import { Action, State } from "../types/useTableHook";

export const INITIAL_STATE: State = { status: "idle" };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START_EDITING":
      return { ...state, status: "editing" };
    case "SET_FIELD":
      return {
        ...state,
        status: "editing",
        [action.field]: action.value,
      };
    default:
      return state;
  }
}
