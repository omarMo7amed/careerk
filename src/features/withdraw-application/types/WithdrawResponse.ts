import type { ApplicationListItem } from "@/entities/application";

// Success Response
export interface WithdrawApplicationSuccessResponse {
  success: true;
  data: ApplicationListItem;
  message: string;
}

// Error Response
export interface WithdrawApplicationErrorResponse {
  success: false;
  error: {
    message: string;
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
  };
}

export type WithdrawApplicationResponse =
  | WithdrawApplicationSuccessResponse
  | WithdrawApplicationErrorResponse;
