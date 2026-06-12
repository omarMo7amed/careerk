"use client";
import { Button } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  ChangePasswordFormData,
  ChangePasswordFormField,
  ChangePasswordSchema,
  useChangePassword,
} from "..";

interface ChangePasswordFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export function ChangePasswordForm({
  onSuccess,
  onCancel,
}: ChangePasswordFormProps) {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { mutate, isPending } = useChangePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(ChangePasswordSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ChangePasswordFormData) => {
    mutate(
      { currentPassword: data.currentPassword, newPassword: data.newPassword },
      {
      onSuccess: (response) => {
        onSuccess();
        toast.success(response.message || "Password changed successfully");
      },
      onError: (error) => {
        toast.error(
          error.message || "Failed to change password. Please try again.",
        );
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <ChangePasswordFormField
        id="currentPassword"
        label="Current Password"
        show={showCurrent}
        toggleShow={() => setShowCurrent(!showCurrent)}
        register={register("currentPassword")}
        error={errors.currentPassword?.message}
      />

      {/* New Password */}
      <ChangePasswordFormField
        id="newPassword"
        label="New Password"
        show={showNew}
        toggleShow={() => setShowNew(!showNew)}
        register={register("newPassword")}
        error={errors.newPassword?.message}
      />

      {/* Confirm Password */}
      <ChangePasswordFormField
        id="confirmPassword"
        label="Confirm New Password"
        show={showConfirm}
        toggleShow={() => setShowConfirm(!showConfirm)}
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button variant="outline" onClick={onCancel} disabled={isPending}>
          Cancel
        </Button>
        <Button disabled={isPending} type="submit">
          {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
          {isPending ? "Changing..." : "Change Password"}
        </Button>
      </div>
    </form>
  );
}
