export interface DeleteAccountSuccessResponse {
  success: true;
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

export interface DeleteAccountErrorResponse {
  success: false;
  error: {
    message: string;
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
  };
}

export type DeleteAccountResponse =
  | DeleteAccountSuccessResponse
  | DeleteAccountErrorResponse;
