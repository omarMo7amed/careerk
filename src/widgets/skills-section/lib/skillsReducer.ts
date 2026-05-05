import type { SkillsState, SkillsAction } from "../types/skillsTypes";

export const INITIAL_SKILLS_STATE: SkillsState = { status: "idle" };

export function skillsReducer(
  state: SkillsState,
  action: SkillsAction,
): SkillsState {
  switch (action.type) {
    case "START_EDIT":
      return {
        status: "adding",
        skills: action.skills,
        input: "",
        AddedSkill: [],
        RemovedSkill: [],
      };

    case "SET_INPUT":
      if (state.status !== "adding" && state.status !== "deleting")
        return state;
      return { ...state, input: action.value };

    case "ADD_SKILL": {
      if (state.status !== "adding") return state;
      const name = state.input.trim();
      if (!name || state.skills.some((s) => s.name === name)) return state;
      return {
        ...state,
        skills: [
          ...state.skills,
          { skillId: Date.now().toString(), name, verified: false },
        ],
        AddedSkill: [
          ...state.AddedSkill,
          { skillId: Date.now().toString(), name, verified: false },
        ],
        input: "",
      };
    }

    case "REMOVE_SKILL":
      if (state.status !== "adding" && state.status !== "deleting")
        return state;
      return {
        ...state,
        skills: state.skills.filter(
          (s, index) =>
            s.skillId !== action.skillId && index.toString() !== action.skillId,
        ),
        RemovedSkill: [...state.RemovedSkill, action.skillId],
      };

    case "CANCEL":
    case "SAVE_SUCCESS":
      return { status: "idle" };

    default:
      return state;
  }
}
