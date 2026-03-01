"use client";
import Image from "next/image";
import { Camera, Loader2 } from "lucide-react";
import { useRef } from "react";
import { getInitialsFromFullName, getProfileColor } from "@/shared";
import { handleFileChange } from "../lib/handleFileChange";

import { useUpdateProfilePhoto } from "@/entities/job-seeker";

import { ACCEPTED_IMAGE_TYPES } from "@/shared";
import { ProfileImageProps } from "../types/profileImage";

export function ProfileImage({
  id,
  fullName,
  profileImageUrl,
  isOwner,
}: ProfileImageProps) {
  const initials = getInitialsFromFullName(fullName);
  const color = getProfileColor(id);
  const inputRef = useRef<HTMLInputElement>(null);
  const { upload, isPending, isError, error } = useUpdateProfilePhoto();

  return (
    <div className="-mt-14 shrink-0">
      {isOwner && (
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_IMAGE_TYPES.join(",")}
          className="hidden"
          onChange={(e) => handleFileChange(e, upload)}
          aria-label="Upload profile photo"
        />
      )}

      <div className="relative w-24 h-24 rounded-full ring-4 ring-bg-surface overflow-hidden group">
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt={fullName}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-2xl font-bold text-white select-none"
            style={{ background: color.solid }}
          >
            {initials}
          </div>
        )}

        {isOwner && isPending && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Loader2 className="w-6 h-6 text-white animate-spin" />
          </div>
        )}

        {isOwner && !isPending && (
          <button
            onClick={() => inputRef.current?.click()}
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 cursor-pointer"
            aria-label="Change profile photo"
          >
            <Camera className="w-5 h-5 text-white" />
            <span className="text-white text-[10px] font-medium">Change</span>
          </button>
        )}
      </div>

      {isOwner && isError && (
        <p className="mt-1 text-xs text-error text-center max-w-24">
          {error ?? "Upload failed"}
        </p>
      )}
    </div>
  );
}
