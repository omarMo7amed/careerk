"use client";
import { useReducer } from "react";
import { toast } from "react-hot-toast";
import {
  useCreateEducation,
  useUpdateEducation,
  useDeleteEducation,
  Education,
} from "@/entities/education";
import { educationReducer } from "../lib/educationReducer";
import { EducationForm, EMPTY_EDUCATION_FORM } from "../types/educationTypes";
import { useEducations, useProfileDetails } from "@/entities/job-seeker";
import { getChangedFields } from "@/shared";

export function useEducationModel({ isOwner }: { isOwner: boolean }) {
  const { hasProfile } = useProfileDetails();
  const { educations = [] } = useEducations();
  const { createEducation, isPending: isCreatePending } = useCreateEducation();

  const {
    updateEducation: updateEducationRequest,
    isPending: isUpdatePending,
  } = useUpdateEducation();

  const { deleteEducation, isPending: isDeletePending } = useDeleteEducation();

  const [state, dispatch] = useReducer(educationReducer, {
    form: EMPTY_EDUCATION_FORM,
    isAddingVisible: false,
    updatingIndex: null,
    updatingId: null,
    updateForm: EMPTY_EDUCATION_FORM,
  });

  function setFormField<K extends keyof EducationForm>(
    field: K,
    value: EducationForm[K],
  ) {
    dispatch({
      type: "SET_ADDING_FORM_FIELD",
      field,
      value: value as string | boolean | null,
    });
  }

  function openForm() {
    dispatch({ type: "OPEN_ADDING_FORM" });
  }

  function closeForm() {
    dispatch({ type: "CLOSE_ADDING_FORM" });
  }

  function addEducation() {
    const payload = {
      ...state.form,
      gpa: state.form.gpa ? parseFloat(state.form.gpa) : null,
      endDate: state.form.isCurrent ? null : state.form.endDate || null,
    };

    createEducation(payload, {
      onSuccess: () => {
        dispatch({ type: "SUBMIT_ADDING_FORM" });
        toast.success("Education added successfully!");
      },
      onError: () => toast.error("Failed to add education."),
    });
  }

  function updateEducation() {
    console.log(
      "Attempting to update education with form values:",
      typeof state.updatingId,
    );

    if (typeof state.updatingId === "number" && state.updatingId === 0) {
      // skip
    } else {
      if (!state.updatingId) return;
    }

    const updatingIndex = parseInt(state.updatingId);

    const original = educations.find(
      (education: Education, index: number) =>
        education.id === state.updatingId || index === updatingIndex,
    );

    console.log("Original education data:", original);

    if (!original) return;

    const nextValues = {
      ...state.updateForm,
      gpa: state.updateForm.gpa ? parseFloat(state.updateForm.gpa) : null,
      endDate: state.updateForm.isCurrent
        ? null
        : state.updateForm.endDate || null,
    };

    const patch: Partial<Education> = getChangedFields(original, nextValues);

    if (Object.keys(patch).length === 0) {
      toast("No changes to save.");
      return;
    }

    updateEducationRequest(
      { id: state.updatingId, patch },
      {
        onSuccess: () => {
          dispatch({ type: "SUBMIT_UPDATING_FORM" });
          toast.success("Education updated successfully!");
        },
        onError: () => toast.error("Failed to update education."),
      },
    );
  }

  function removeEducation(educationId: string) {
    deleteEducation(educationId, {
      onSuccess: () => toast.success("Education deleted successfully!"),
      onError: () => toast.error("Failed to delete education."),
    });
  }

  function startEditEntry(index: number, education: Education) {
    dispatch({ type: "START_UPDATING_ENTRY", index, education });
  }

  function cancelEditEntry() {
    dispatch({ type: "CANCEL_UPDATING_ENTRY" });
  }

  function setUpdateFormField<K extends keyof EducationForm>(
    field: K,
    value: EducationForm[K],
  ) {
    dispatch({
      type: "SET_UPDATING_FORM_FIELD",
      field,
      value: value as string | boolean | null,
    });
  }

  return {
    educations,
    isOwner,
    isAddingVisible: state.isAddingVisible,
    form: state.form,
    updatingIndex: state.updatingIndex,
    updateForm: state.updateForm,
    isPending: isCreatePending || isUpdatePending || isDeletePending,
    setFormField,
    openForm,
    closeForm,
    addEducation,
    updateEducation,
    removeEducation,
    startEditEntry,
    cancelEditEntry,
    setUpdateFormField,
  };
}
