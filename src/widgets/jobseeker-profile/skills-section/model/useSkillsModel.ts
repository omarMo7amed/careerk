"use client";
import { useReducer } from "react";
import { toast } from "react-hot-toast";
import { useSkillsQuery, useUpdateSkills } from "@/entities/skill";
import { skillsReducer, INITIAL_SKILLS_STATE } from "../lib/skillsReducer";

export function useSkillsModel({ isOwner }: { isOwner: boolean }) {
  const { data: fetchedSkills = [] } = useSkillsQuery();
  const { updateSkills, isPending } = useUpdateSkills();
  const [state, dispatch] = useReducer(skillsReducer, INITIAL_SKILLS_STATE);

  const skills = state.status === "editing" ? state.skills : fetchedSkills;

  function startEdit() {
    dispatch({ type: "START_EDIT", skills: fetchedSkills });
  }

  function cancelEdit() {
    dispatch({ type: "CANCEL" });
  }

  function setInput(value: string) {
    dispatch({ type: "SET_INPUT", value });
  }

  function addSkill() {
    dispatch({ type: "ADD_SKILL" });
  }

  function removeSkill(name: string) {
    dispatch({ type: "REMOVE_SKILL", name });
  }

  function handleSave() {
    if (state.status !== "editing") return;
    updateSkills(
      state.skills.map((skill) => skill.name),
      {
        onSuccess: () => {
          toast.success("Skills saved!");
          dispatch({ type: "SAVE_SUCCESS" });
        },
        onError: () => toast.error("Failed to save skills."),
      },
    );
  }

  return {
    skills,
    isOwner,
    editing: state.status === "editing",
    input: state.status === "editing" ? state.input : "",
    isPending,
    startEdit,
    cancelEdit,
    setInput,
    addSkill,
    removeSkill,
    handleSave,
  };
}
