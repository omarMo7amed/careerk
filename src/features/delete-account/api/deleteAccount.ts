import { DeleteAccountResponse } from "..";

export async function deleteAccount(): Promise<DeleteAccountResponse> {
  console.log("Account deleted successfully");
  return {
    success: true,
    data: {
      id: "example-id",
    },
    message: "Account deleted successfully",
    meta: {
      timestamp: new Date().toISOString(),
      path: "/delete-account",
      method: "DELETE",
    },
  };
}
