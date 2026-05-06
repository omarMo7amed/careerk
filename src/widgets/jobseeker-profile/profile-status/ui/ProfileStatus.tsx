"use client";

import {
  ProfileStatusComponents,
  ProfileStatusProvider,
} from "../model/ProfileStatusContext";
import { ProfileStatusProps } from "../types/profileStatus";

export function ProfileStatus({ isOwner, profileStatus }: ProfileStatusProps) {
  return (
    <ProfileStatusProvider profileStatus={profileStatus} isOwner={isOwner}>
      <ProfileStatusComponents.Header />
      <ProfileStatusComponents.Display />
      <ProfileStatusComponents.EditingMode />
    </ProfileStatusProvider>
  );
}
