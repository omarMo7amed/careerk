import { CVUploadReducerState } from "../types/uploadCVReducer";

export const FILE_SIZE_LIMIT = 3 * 1024 * 1024;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const initialCVUploadState: CVUploadReducerState = {
  isDragging: false,
  isModalOpen: false,
  file: null,
  fileStatus: "idle",
  fileError: null,
  previewUrl: null,
  pendingCV: null,
  isPendingUploading: false,
  pendingUploadError: null,
};
