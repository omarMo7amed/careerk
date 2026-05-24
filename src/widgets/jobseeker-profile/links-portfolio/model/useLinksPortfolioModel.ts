"use client";

import { useReducer } from "react";
import { toast } from "react-hot-toast";
import { useUpdateProfile } from "@/entities/job-seeker";
import type { LinksPortfolioData } from "../types/types";
import {
  INITIAL_STATE,
  linksPortfolioReducer,
} from "../lib/linksPortfolioReducer";
import { getChangedFields } from "@/shared";

export interface UseLinksPortfolioModelParams {
  socialContacts: LinksPortfolioData;
  isOwner: boolean;
}

export function useLinksPortfolioModel({
  socialContacts,
  isOwner,
}: UseLinksPortfolioModelParams) {
  const [state, dispatch] = useReducer(linksPortfolioReducer, INITIAL_STATE);
  const { updateProfile, isPending } = useUpdateProfile({ token: "" });

  const isVisible =
    !!(
      socialContacts.linkedinUrl ||
      socialContacts.githubUrl ||
      socialContacts.portfolioUrl
    ) || isOwner;

  const editing = state.status === "editing";

  function startEdit() {
    dispatch({ type: "START_EDIT", data: socialContacts });
  }

  function cancelEdit() {
    dispatch({ type: "CANCEL" });
  }

  function setField(field: "linkedin" | "github" | "portfolio", value: string) {
    dispatch({ type: "SET_FIELD", field, value });
  }

  function handleSave() {
    if (state.status !== "editing") return;
    const patch = getChangedFields(
      {
        linkedinUrl: socialContacts.linkedinUrl || "",
        githubUrl: socialContacts.githubUrl || "",
        portfolioUrl: socialContacts.portfolioUrl || "",
      },
      {
        linkedinUrl: state.linkedin,
        githubUrl: state.github,
        portfolioUrl: state.portfolio,
      },
    );

    if (Object.keys(patch).length === 0) {
      toast("No changes made.");
      dispatch({ type: "CANCEL" });
      return;
    }

    updateProfile(patch, {
      onSuccess: () => {
        toast.success("Links updated!");
        dispatch({ type: "SAVE_SUCCESS" });
      },
      onError: () => toast.error("Failed to update links."),
    });
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
    socialContacts,
  };
}
