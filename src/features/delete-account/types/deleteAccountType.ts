export interface DeleteAccountResponse {
  success: boolean;
  data: {
    id: string;
  };
  message: string;
  meta: {
    timestamp: string;
    path: string;
    method: string;
  };
}
