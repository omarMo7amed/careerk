import { StoredCV } from "./cvLocalStorage";
import { CVUploadState } from "./uploadCVReducer";

export type CVDropZoneContextType = {
  isDragging: boolean;
  isModalOpen: boolean;
  state: CVUploadState;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseModal: () => void;
  pendingCV: StoredCV | null;
  isPendingUploading: boolean;
  pendingUploadError: string | null;
  discard: () => void;
  uploadToServer: (onSuccess?: () => void) => Promise<void>;
};
