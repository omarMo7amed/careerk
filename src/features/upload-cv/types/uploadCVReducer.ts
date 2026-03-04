import { StoredCV } from "./cvLocalStorage";

export type CVFileStatus = "idle" | "selected" | "error";

export interface CVUploadState {
  file: File | null;
  status: CVFileStatus;
  error: string | null;
  previewUrl: string | null;
}

export interface CVUploadReducerState {
  isDragging: boolean;
  isModalOpen: boolean;
  file: File | null;
  fileStatus: CVFileStatus;
  fileError: string | null;
  previewUrl: string | null;
  pendingCV: StoredCV | null;
  isPendingUploading: boolean;
  pendingUploadError: string | null;
}

export type CVUploadAction =
  | { type: "DRAG_OVER" }
  | { type: "DRAG_LEAVE" }
  | { type: "SELECT_FILE"; payload: { file: File; previewUrl: string } }
  | { type: "FILE_VALIDATION_ERROR"; payload: { error: string } }
  | { type: "CLOSE_MODAL" }
  | { type: "SET_PENDING_CV"; payload: { pendingCV: StoredCV | null } }
  | { type: "DISCARD_PENDING" }
  | { type: "PENDING_UPLOAD_START" }
  | { type: "PENDING_UPLOAD_SUCCESS" }
  | { type: "PENDING_UPLOAD_FAILURE"; payload: { error: string } };
