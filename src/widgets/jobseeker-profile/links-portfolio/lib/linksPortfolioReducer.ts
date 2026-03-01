import type { Action, State } from "../types/linksPortfolioReducer";

export const INITIAL_STATE: State = { status: "idle" };

export function linksPortfolioReducer(state: State, action: Action): State {
  switch (action.type) {
    case "START_EDIT":
      return {
        status: "editing",
        linkedin: action.data.linkedinUrl ?? "",
        github: action.data.githubUrl ?? "",
        portfolio: action.data.portfolioUrl ?? "",
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
