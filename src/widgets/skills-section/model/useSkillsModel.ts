"use client";
import { useReducer } from "react";
import { toast } from "react-hot-toast";
import { useAddSkills, useDeleteSkill } from "@/entities/skill";
import { useSkills } from "@/entities/job-seeker";
import { skillsReducer, INITIAL_SKILLS_STATE } from "../lib/skillsReducer";
import { useCVInfo } from "@/entities/cv";
// import {useAuth} from "@/features/auth";

export function useSkillsModel({ isOwner }: { isOwner: boolean }) {
  const { hasProfile, isUpdatePending } = useCVInfo();
  const { skills: fetchedSkills = [] } = useSkills();
  const { addSkills, isPending } = useAddSkills({
    hasProfile,
    token: "",
  });
  const { deleteSkill } = useDeleteSkill({ hasProfile, token: "" });
  const [state, dispatch] = useReducer(skillsReducer, INITIAL_SKILLS_STATE);

  const skills =
    state.status === "adding" || state.status === "deleting"
      ? state.skills
      : fetchedSkills;

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

  function removeSkill(skillId: string) {
    dispatch({ type: "REMOVE_SKILL", skillId });
  }

  function handleSave() {
    if (state.status !== "adding" && state.status !== "deleting") return;
    if (state.AddedSkill.length !== 0) {
      addSkills(
        state.AddedSkill.map((skill) => skill.name),
        {
          onSuccess: () => {
            toast.success("Skills Added successfully!");
            dispatch({ type: "SAVE_SUCCESS" });
          },
          onError: () => toast.error("Failed to save skills."),
        },
      );
    }

    if (state.RemovedSkill.length !== 0) {
      deleteSkill(state.RemovedSkill, {
        onSuccess: () => {
          toast.success("Skills removed successfully!");
          dispatch({ type: "SAVE_SUCCESS" });
        },
        onError: () => toast.error("Failed to remove skills."),
      });
    }
  }

  return {
    skills,
    isOwner,
    editing: state.status === "adding" || state.status === "deleting",
    input:
      state.status === "adding" || state.status === "deleting"
        ? state.input
        : "",
    isPending,
    startEdit,
    cancelEdit,
    setInput,
    addSkill,
    removeSkill,
    handleSave,
  };
}
