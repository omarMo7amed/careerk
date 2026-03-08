export type CVStorageStatus = "pending" | "uploaded";

export interface StoredCV {
  name: string;
  type: string;
  size: number;
  data: string;
  status: CVStorageStatus;
  savedAt: string;
}
