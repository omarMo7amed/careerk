"use client";
import { useMutation } from "@tanstack/react-query";
import { ChangePasswordRequest, changePassword } from "..";

export function useChangePassword() {
  return useMutation({
    mutationFn: (request: ChangePasswordRequest) => changePassword(request),
  });
}
