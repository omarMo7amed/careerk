"use client";
import { useReducer } from "react";
import { toast } from "react-hot-toast";
import { useUpdateProfile } from "@/entities/job-seeker";
import { headerReducer, INITIAL_HEADER_STATE } from "../lib/headerReducer";
import type { ProfileHeaderContextValue } from "../types/profileHeaderContextValue";
import { ProfileHeaderInfo } from "../types/profileHeader";
import { getChangedFields } from "@/shared";
// import { useAuth } from "@/features/auth";
interface UseProfileHeaderModelInput {
  profileHeader: ProfileHeaderInfo;
  isOwner: boolean;
}

export function useProfileHeaderModel({
  profileHeader,
  isOwner,
}: UseProfileHeaderModelInput): ProfileHeaderContextValue {
  const { firstName, lastName, title, location } = profileHeader;
  const fullName = `${firstName} ${lastName}`;
  // const token = useAuth()

  const [state, dispatch] = useReducer(headerReducer, INITIAL_HEADER_STATE);
  const { updateProfile, isPending } = useUpdateProfile({ token: "" });

  function startEdit() {
    dispatch({
      type: "START_EDIT",
      title: title ?? "",
      location: location ?? "",
      fullName,
    });
  }

  function cancelEdit() {
    dispatch({ type: "CANCEL" });
  }

  function setField(field: "fullName" | "title" | "location", value: string) {
    dispatch({ type: "SET_FIELD", field, value });
  }

  function handleSave() {
    if (state.status !== "editing") return;
    const [first, ...rest] = state.fullName.trim().split(" ");
    const last = rest.join(" ") || "";
    const patch = getChangedFields(
      { firstName, lastName, title, location },
      {
        firstName: first,
        lastName: last,
        title: state.title,
        location: state.location,
      },
    );

    // console.log("Changed fields:", patch);

    updateProfile(patch, {
      onSuccess: () => {
        toast.success("Profile updated!");
        dispatch({ type: "SAVE_SUCCESS" });
      },
      onError: () => toast.error("Failed to update profile."),
    });
  }

  return {
    profileHeader,
    isOwner,
    fullName,
    editing: state.status === "editing",
    editFullName: state.status === "editing" ? state.fullName : fullName,
    editTitle: state.status === "editing" ? state.title : (title ?? ""),
    editLocation:
      state.status === "editing" ? state.location : (location ?? ""),
    isPending,
    startEdit,
    cancelEdit,
    setField,
    handleSave,
  };
}
