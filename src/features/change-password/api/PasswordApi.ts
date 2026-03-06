import { ChangePasswordRequest, ChangePasswordResponse } from "..";

export async function changePassword(
  request: ChangePasswordRequest,
): Promise<ChangePasswordResponse> {
  console.log(" Password changed successfully");

  return {
    success: true,
    message: "Password changed successfully",
  };
}
