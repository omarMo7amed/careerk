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
import { uploadCVToServer } from "@/entities/cv";

export function useCVUpload() {
  const [state, dispatch] = useReducer(cvUploadReducer, initialCVUploadState);

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

  function discard() {
    clearCVFromLocalStorage();
    dispatch({ type: "DISCARD_PENDING" });
  }

  async function uploadToServer(onSuccess?: () => void) {
    if (!state.pendingCV) return;
    dispatch({ type: "PENDING_UPLOAD_START" });
    try {
      const file = storedCVToFile(state.pendingCV);
      await uploadCVToServer(file);
      clearCVFromLocalStorage();
      dispatch({ type: "PENDING_UPLOAD_SUCCESS" });
      onSuccess?.();
    } catch {
      dispatch({
        type: "PENDING_UPLOAD_FAILURE",
        payload: { error: "Upload failed. Please try again." },
      });
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
  };
}
