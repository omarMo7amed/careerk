"use client";

import { createContext, useContext } from "react";

import { useProfileStatusModel } from "./useProfileStatusModel";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode as EditMode } from "../components/EditingMode";

import {
  ProfileStatusContextValue,
  ProfileStatusProviderProps,
} from "../types/profileStatusContext";
import { ProfileStatusHeader } from "../components/ProfileStatusHeader";
import { useProfileDetails } from "@/entities/job-seeker/model/useProfile";

// import {useAuth} from "@/feature/auth";

const ProfileStatusContext = createContext<ProfileStatusContextValue | null>(
  null,
);

export function ProfileStatusProvider({
  isOwner = false,
  children,
}: ProfileStatusProviderProps) {
  // const {token} = useAuth();
  const {
    jobSeekerDetails: {
      availabilityStatus,
      workPreference,
      preferredJobTypes,
      expectedSalary,
      noticePeriod,
    },
  } = useProfileDetails({ token: "" });

  const model = useProfileStatusModel({
    profileStatus: {
      availabilityStatus,
      workPreference,
      preferredJobTypes,
      expectedSalary,
      noticePeriod,
    },
    isOwner,
  });

  return (
    <ProfileStatusContext.Provider value={model}>
      <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
        {children}
      </section>
    </ProfileStatusContext.Provider>
  );
}

export function useProfileStatusContext(): ProfileStatusContextValue {
  const ctx = useContext(ProfileStatusContext);
  if (!ctx)
    throw new Error(
      "useProfileStatusContext must be used inside <ProfileStatusProvider>",
    );
  return ctx;
}

function Header() {
  return <ProfileStatusHeader />;
}

function Display() {
  const { editing } = useProfileStatusContext();
  if (editing) return null;
  return <DisplayMode />;
}

function EditingMode() {
  const { editing } = useProfileStatusContext();
  if (!editing) return null;
  return <EditMode />;
}

export const ProfileStatusComponents = {
  Header,
  Display,
  EditingMode,
};
