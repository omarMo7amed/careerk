"use client";
import { createContext, useContext } from "react";
import { ContactButton, DownloadButton } from "@/entities/job-seeker";
import { Banner } from "@/shared";
import type { ProfileHeaderContextValue } from "../types/profileHeaderContextValue";
import { useProfileHeaderModel } from "./useProfileHeaderModel";
import { ProfileImage } from "../components/ProfileImage";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode } from "../components/EditingMode";
import { ProfileHeaderInfo } from "../types/profileHeader";

export const ProfileHeaderContext =
  createContext<ProfileHeaderContextValue | null>(null);

export function ProfileHeaderProvider({
  profileHeader,
  isOwner = false,
  children,
}: {
  profileHeader: ProfileHeaderInfo;
  isOwner?: boolean;
  children: React.ReactNode;
}) {
  const model = useProfileHeaderModel({ profileHeader, isOwner });

  return (
    <ProfileHeaderContext.Provider value={model}>
      <div className="rounded-b-lg overflow-hidden shadow-sm border border-border">
        {children}
      </div>
    </ProfileHeaderContext.Provider>
  );
}

export function useProfileHeaderContext(): ProfileHeaderContextValue {
  const ctx = useContext(ProfileHeaderContext);
  if (!ctx)
    throw new Error(
      "useProfileHeaderContext must be used inside <ProfileHeaderProvider>",
    );
  return ctx;
}

function BannerSection() {
  return <Banner />;
}

function ImageSection() {
  const { profileHeader, isOwner, fullName } = useProfileHeaderContext();
  return (
    <ProfileImage
      id={profileHeader.jobSeekerId}
      fullName={fullName}
      profileImageUrl={profileHeader.avatarUrl}
      isOwner={isOwner}
    />
  );
}

function InfoSection() {
  const { editing } = useProfileHeaderContext();
  return editing ? <EditingMode /> : <DisplayMode />;
}

function ActionsSection() {
  const { profileHeader, isOwner } = useProfileHeaderContext();
  if (isOwner) return null;
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <ContactButton />
      <DownloadButton href={profileHeader.cvUrl ?? "#"} />
    </div>
  );
}

export const ProfileHeaderComponents = {
  Banner: BannerSection,
  Image: ImageSection,
  Info: InfoSection,
  Actions: ActionsSection,
};
