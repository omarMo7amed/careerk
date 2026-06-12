export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  success: boolean;
  data: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImageUrl: string | null;
    isActive: boolean;
    isVerified: boolean;
    lastLoginAt: string;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
  meta: {
    timestamp: string;
    path: string;
    method: string;
  };
}
