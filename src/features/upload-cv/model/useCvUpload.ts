"use client";

import { useReducer, useCallback, useEffect } from "react";
import { validateCVFile } from "../lib/validation";
import {
  saveCVToLocalStorage,
  clearCVFromLocalStorage,
  getCVFromLocalStorage,
  storedCVToFile,
} from "../lib/cvLocalStorage";
import { cvUploadReducer } from "../lib/uploadCVReducer";
import type { CVUploadState } from "../types/uploadCVReducer";
import { initialCVUploadState } from "../config/config";
import { useCV } from "@/entities/cv/model/useCv";
import { toast } from "react-hot-toast";

export function useCVUpload() {
  const [state, dispatch] = useReducer(cvUploadReducer, initialCVUploadState);
  const { uploadCVToServer, isPending } = useCV();

  useEffect(() => {
    dispatch({
      type: "SET_PENDING_CV",
      payload: { pendingCV: getCVFromLocalStorage() },
    });
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch({ type: "DRAG_OVER" });
  }, []);

  const handleDragLeave = useCallback(() => {
    dispatch({ type: "DRAG_LEAVE" });
  }, []);

  function selectFile(file: File) {
    const error = validateCVFile(file);
    if (error) {
      dispatch({ type: "FILE_VALIDATION_ERROR", payload: { error } });
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    dispatch({ type: "SELECT_FILE", payload: { file, previewUrl } });
    saveCVToLocalStorage(file).catch(() => {});
  }

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch({ type: "DRAG_LEAVE" });
    const { files } = e.dataTransfer;
    if (files.length > 0) selectFile(files[0]);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (files && files.length > 0) selectFile(files[0]);
      e.target.value = "";
    },
    [],
  );

  function handleCloseModal() {
    if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
    dispatch({ type: "CLOSE_MODAL" });
    dispatch({
      type: "SET_PENDING_CV",
      payload: { pendingCV: getCVFromLocalStorage() },
    });
  }

  function openPreviewPendingCV() {
    if (!state.pendingCV) return;
    const file = storedCVToFile(state.pendingCV);
    const previewUrl = state.pendingCV.data;
    dispatch({
      type: "SELECT_FILE",
      payload: { file, previewUrl },
    });
  }

  function discard() {
    clearCVFromLocalStorage();
    dispatch({ type: "DISCARD_PENDING" });
  }

  async function uploadToServer(onSuccess?: () => void) {
    // We can upload either the active state file or the pendingCV file
    const fileToUpload =
      state.file || (state.pendingCV ? storedCVToFile(state.pendingCV) : null);
    if (!fileToUpload) return toast.error("No CV file to upload.");

    dispatch({ type: "PENDING_UPLOAD_START" });
    try {
      await uploadCVToServer(fileToUpload);
      clearCVFromLocalStorage();
      dispatch({ type: "PENDING_UPLOAD_SUCCESS" });

      toast.success("CV uploaded and analyzed successfully!");

      // Close the modal upon success
      handleCloseModal();
      onSuccess?.();
    } catch {
      dispatch({
        type: "PENDING_UPLOAD_FAILURE",
        payload: { error: "Upload failed. Please try again." },
      });
      toast.error("Failed to upload CV. Please try again.");
    }
  }

  const fileState: CVUploadState = {
    file: state.file,
    status: state.fileStatus,
    error: state.fileError,
    previewUrl: state.previewUrl,
  };

  return {
    isDragging: state.isDragging,
    isModalOpen: state.isModalOpen,
    handleDragOver,
    handleDragLeave,
    handleFileDrop,
    handleFileSelect,
    state: fileState,
    handleCloseModal,
    pendingCV: state.pendingCV,
    isPendingUploading: state.isPendingUploading,
    pendingUploadError: state.pendingUploadError,
    discard,
    uploadToServer,
    isUploadingToServer: isPending,
    openPreviewPendingCV,
  };
}
