import { CVUploadAction, CVUploadReducerState } from "../types/uploadCVReducer";

export function cvUploadReducer(
  state: CVUploadReducerState,
  action: CVUploadAction,
): CVUploadReducerState {
  switch (action.type) {
    case "DRAG_OVER":
      return { ...state, isDragging: true };

    case "DRAG_LEAVE":
      return { ...state, isDragging: false };

    case "SELECT_FILE":
      return {
        ...state,
        isDragging: false,
        isModalOpen: true,
        file: action.payload.file,
        previewUrl: action.payload.previewUrl,
        fileStatus: "selected",
        fileError: null,
      };

    case "FILE_VALIDATION_ERROR":
      return {
        ...state,
        file: null,
        previewUrl: null,
        fileStatus: "error",
        fileError: action.payload.error,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        file: null,
        previewUrl: null,
        fileStatus: "idle",
        fileError: null,
      };

    case "SET_PENDING_CV":
      return { ...state, pendingCV: action.payload.pendingCV };

    case "DISCARD_PENDING":
      return { ...state, pendingCV: null, pendingUploadError: null };

    case "PENDING_UPLOAD_START":
      return { ...state, isPendingUploading: true, pendingUploadError: null };

    case "PENDING_UPLOAD_SUCCESS":
      return {
        ...state,
        isPendingUploading: false,
        pendingCV: null,
        pendingUploadError: null,
      };

    case "PENDING_UPLOAD_FAILURE":
      return {
        ...state,
        isPendingUploading: false,
        pendingUploadError: action.payload.error,
      };

    default:
      return state;
  }
}
