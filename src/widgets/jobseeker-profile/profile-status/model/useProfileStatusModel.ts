"use client";

import { useMemo, useReducer } from "react";
import { toast } from "react-hot-toast";
import { useUpdateProfile } from "@/entities/job-seeker";

import {
  INITIAL_STATE,
  profileStatusReducer,
} from "../lib/profileStatusReducer";
import type { State } from "../types/profileStatusReducer";
import type { ProfileStatusData } from "../types/profileStatus";
import { toggleJobType } from "../lib/toggleJobType";
import { WorkPreference } from "@/entities/company-job";
import { getChangedFields } from "@/shared";

export interface UseProfileStatusModelParams {
  profileStatus: ProfileStatusData | null;
  isOwner: boolean;
}

export function useProfileStatusModel({
  profileStatus,
  isOwner,
}: UseProfileStatusModelParams) {
  const [state, dispatch] = useReducer(profileStatusReducer, INITIAL_STATE);
  const { updateProfile, isPending } = useUpdateProfile({ token: "" });

  const viewProfileStatus: ProfileStatusData = useMemo(
    () => ({
      availabilityStatus: profileStatus?.availabilityStatus ?? "",
      workPreference: profileStatus?.workPreference ?? "",
      preferredJobTypes: profileStatus?.preferredJobTypes ?? [],
      expectedSalary: profileStatus?.expectedSalary ?? null,
      noticePeriod: profileStatus?.noticePeriod ?? "",
    }),
    [profileStatus],
  );

  const editing = state.status === "editing";

  function startEdit() {
    if (!isOwner) return;
    dispatch({ type: "START_EDIT", profileStatus: viewProfileStatus });
  }

  function cancelEdit() {
    dispatch({ type: "CANCEL" });
  }

  function setField<K extends keyof ProfileStatusData>(
    field: K,
    value: ProfileStatusData[K],
  ) {
    dispatch({ type: "SET_FIELD", field, value });
  }

  function onToggleJobType(
    type: ProfileStatusData["preferredJobTypes"][number],
  ) {
    toggleJobType(type, state as State, dispatch);
  }

  function handleSave() {
    if (!isOwner) return;
    if (state.status !== "editing") return;
    const patch = getChangedFields(viewProfileStatus, {
      availabilityStatus: state.availabilityStatus,
      workPreference: state.workPreference as WorkPreference | "",
      preferredJobTypes: state.preferredJobTypes,
      expectedSalary: state.expectedSalary,
      noticePeriod: state.noticePeriod,
    });

    if (Object.keys(patch).length === 0) {
      toast("No changes made.");
      dispatch({ type: "CANCEL" });
      return;
    }

    updateProfile(patch, {
      onSuccess: () => {
        toast.success("Status updated!");
        dispatch({ type: "SAVE_SUCCESS" });
      },
      onError: () => toast.error("Failed to update status."),
    });
  }

  return {
    isOwner,
    isPending,
    editing,
    startEdit,
    cancelEdit,
    handleSave,
    viewProfileStatus,
    state,
    setField,
    onToggleJobType,
  };
}
