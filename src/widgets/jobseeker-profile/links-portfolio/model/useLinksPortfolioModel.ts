"use client";

import { useReducer } from "react";
import { toast } from "react-hot-toast";
import { useUpdateProfile } from "@/entities/job-seeker";
import type { LinksPortfolioData } from "../types/types";
import {
  INITIAL_STATE,
  linksPortfolioReducer,
} from "../lib/linksPortfolioReducer";

export interface UseLinksPortfolioModelParams {
  profile: LinksPortfolioData;
  isOwner: boolean;
}

export function useLinksPortfolioModel({
  profile,
  isOwner,
}: UseLinksPortfolioModelParams) {
  const [state, dispatch] = useReducer(linksPortfolioReducer, INITIAL_STATE);
  const { updateProfile, isPending } = useUpdateProfile();

  const isVisible =
    !!(profile.linkedinUrl || profile.githubUrl || profile.portfolioUrl) ||
    isOwner;

  const editing = state.status === "editing";

  function startEdit() {
    dispatch({ type: "START_EDIT", data: profile });
  }

  function cancelEdit() {
    dispatch({ type: "CANCEL" });
  }

  function setField(field: "linkedin" | "github" | "portfolio", value: string) {
    dispatch({ type: "SET_FIELD", field, value });
  }

  function handleSave() {
    if (state.status !== "editing") return;
    updateProfile(
      {
        linkedinUrl: state.linkedin || null,
        githubUrl: state.github || null,
        portfolioUrl: state.portfolio || null,
      },
      {
        onSuccess: () => {
          toast.success("Links updated!");
          dispatch({ type: "SAVE_SUCCESS" });
        },
        onError: () => toast.error("Failed to update links."),
      },
    );
  }

  return {
    isOwner,
    isVisible,
    editing,
    state,
    setField,
    isPending,
    startEdit,
    cancelEdit,
    handleSave,
    profile,
  };
}
