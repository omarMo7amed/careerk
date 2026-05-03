"use client";

import {
  ProfileStatusComponents,
  ProfileStatusProvider,
} from "../model/ProfileStatusContext";
import { ProfileStatusProps } from "../types/profileStatus";

export function ProfileStatus({ isOwner }: ProfileStatusProps) {
  return (
    <ProfileStatusProvider isOwner={isOwner}>
      <ProfileStatusComponents.Header />
      <ProfileStatusComponents.Display />
      <ProfileStatusComponents.EditingMode />
    </ProfileStatusProvider>
  );
}
