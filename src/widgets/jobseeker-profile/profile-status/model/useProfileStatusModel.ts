"use client";

import { useMemo, useReducer } from "react";
import { toast } from "react-hot-toast";
import { WorkPreference, useUpdateProfile } from "@/entities/job-seeker";

import {
  INITIAL_STATE,
  profileStatusReducer,
} from "../lib/profileStatusReducer";
import type { State } from "../types/profileStatusReducer";
import type { ProfileStatusData } from "../types/profileStatus";
import { toggleJobType } from "../lib/toggleJobType";

export interface UseProfileStatusModelParams {
  profileStatus: ProfileStatusData | null;
  isOwner: boolean;
}

export function useProfileStatusModel({
  profileStatus,
  isOwner,
}: UseProfileStatusModelParams) {
  const [state, dispatch] = useReducer(profileStatusReducer, INITIAL_STATE);
  const { updateProfile, isPending } = useUpdateProfile();

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

    updateProfile(
      {
        availabilityStatus: state.availabilityStatus || null,
        workPreference: (state.workPreference as WorkPreference) || null,
        preferredJobTypes: state.preferredJobTypes,
        expectedSalary: state.expectedSalary,
        noticePeriod: state.noticePeriod || null,
      },
      {
        onSuccess: () => {
          toast.success("Status updated!");
          dispatch({ type: "SAVE_SUCCESS" });
        },
        onError: () => toast.error("Failed to update status."),
      },
    );
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
