"use client";
import {
  ProfileHeaderProvider,
  ProfileHeaderComponents,
} from "../model/ProfileHeaderContext";
import type { ProfileHeaderProps } from "../types/profileHeader";

export function ProfileHeader({ profileHeader, isOwner }: ProfileHeaderProps) {
  return (
    <ProfileHeaderProvider profileHeader={profileHeader} isOwner={isOwner}>
      <ProfileHeaderComponents.Banner />

      <div className="flex flex-col md:flex-row items-baseline bg-bg-surface px-6 pb-6 gap-6">
        <div className="flex-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <ProfileHeaderComponents.Image />

          <div className="flex-1 pt-2">
            <ProfileHeaderComponents.Info />
          </div>
        </div>

        <ProfileHeaderComponents.Actions />
      </div>
    </ProfileHeaderProvider>
  );
}
