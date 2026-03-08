import type { SkillsState, SkillsAction } from "../types/skillsTypes";

export const INITIAL_SKILLS_STATE: SkillsState = { status: "idle" };

export function skillsReducer(
  state: SkillsState,
  action: SkillsAction,
): SkillsState {
  switch (action.type) {
    case "START_EDIT":
      return { status: "editing", skills: action.skills, input: "" };

    case "SET_INPUT":
      if (state.status !== "editing") return state;
      return { ...state, input: action.value };

    case "ADD_SKILL": {
      if (state.status !== "editing") return state;
      const name = state.input.trim();
      if (!name || state.skills.some((s) => s.name === name)) return state;
      return {
        ...state,
        skills: [...state.skills, { name, verified: false }],
        input: "",
      };
    }

    case "REMOVE_SKILL":
      if (state.status !== "editing") return state;
      return {
        ...state,
        skills: state.skills.filter((s) => s.name !== action.name),
      };

    case "CANCEL":
    case "SAVE_SUCCESS":
      return { status: "idle" };

    default:
      return state;
  }
}
