"use client";
import { useReducer } from "react";
import { toast } from "react-hot-toast";
import { useEducationsQuery, useSaveEducations } from "@/entities/education";
import { educationReducer } from "../lib/educationReducer";
import { EducationForm } from "../types/educationTypes";

export function useEducationModel({ isOwner }: { isOwner: boolean }) {
  const { data: fetchedEducations = [] } = useEducationsQuery();
  const { saveEducations, isPending } = useSaveEducations();
  const [state, dispatch] = useReducer(educationReducer, { status: "idle" });

  const educations =
    state.status === "editing" ? state.educations : fetchedEducations;

  function startEdit() {
    dispatch({ type: "START_EDIT", educations: fetchedEducations });
  }

  function cancelEdit() {
    dispatch({ type: "CANCEL" });
  }

  function setFormField<K extends keyof EducationForm>(
    field: K,
    value: EducationForm[K],
  ) {
    dispatch({
      type: "SET_FORM_FIELD",
      field,
      value: value as string | boolean | null,
    });
  }

  function openForm() {
    dispatch({ type: "OPEN_FORM" });
  }

  function closeForm() {
    dispatch({ type: "CLOSE_FORM" });
  }

  function submitForm() {
    dispatch({ type: "SUBMIT_FORM" });
  }

  function removeEducation(index: number) {
    dispatch({ type: "REMOVE", index });
  }

  function startEditEntry(index: number) {
    dispatch({ type: "START_EDIT_ENTRY", index });
  }

  function cancelEditEntry() {
    dispatch({ type: "CANCEL_EDIT_ENTRY" });
  }

  function setEditFormField<K extends keyof EducationForm>(
    field: K,
    value: EducationForm[K],
  ) {
    dispatch({
      type: "SET_EDIT_FORM_FIELD",
      field,
      value: value as string | boolean | null,
    });
  }

  function submitEditForm() {
    dispatch({ type: "SUBMIT_EDIT_FORM" });
  }

  function handleSave() {
    if (state.status !== "editing") return;
    saveEducations(state.educations, {
      onSuccess: () => {
        toast.success("Education saved!");
        dispatch({ type: "SAVE_SUCCESS" });
      },
      onError: () => toast.error("Failed to save educations."),
    });
  }

  return {
    educations,
    isOwner,
    editing: state.status === "editing",
    isFormVisible: state.status === "editing" && state.isFormVisible,
    form: state.status === "editing" ? state.form : null,
    editingIndex: state.status === "editing" ? state.editingIndex : null,
    editForm: state.status === "editing" ? state.editForm : null,
    isPending,
    startEdit,
    cancelEdit,
    setFormField,
    openForm,
    closeForm,
    submitForm,
    removeEducation,
    startEditEntry,
    cancelEditEntry,
    setEditFormField,
    submitEditForm,
    handleSave,
  };
}
