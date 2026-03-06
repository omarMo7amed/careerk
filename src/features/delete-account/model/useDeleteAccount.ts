"use client";
import { useMutation } from "@tanstack/react-query";
import { deleteAccount } from "..";
export function useDeleteAccount() {
  return useMutation({
    mutationFn: () => deleteAccount(),
  });
}
