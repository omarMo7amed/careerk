"use client";
import { createContext, useContext } from "react";
import { useEducationModel } from "./useEducationModel";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode } from "../components/EditingMode";
import { EducationHeader } from "../components/EducationHeader";

export type EducationContextValue = ReturnType<typeof useEducationModel>;

const EducationContext = createContext<EducationContextValue | null>(null);

export function EducationProvider({
  isOwner = false,
  children,
  educations,
}: {
  isOwner?: boolean;
  children: React.ReactNode;
  educations?: EducationContextValue["educations"];
}) {
  const model = useEducationModel({ isOwner });

  return (
    <EducationContext.Provider
      value={{ ...model, educations: educations ?? model.educations }}
    >
      <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
        {children}
      </section>
    </EducationContext.Provider>
  );
}

export function useEducationContext(): EducationContextValue {
  const ctx = useContext(EducationContext);
  if (!ctx)
    throw new Error(
      "useEducationContext must be used inside <EducationProvider>",
    );
  return ctx;
}

function Header() {
  return <EducationHeader />;
}

function Display() {
  const { editing } = useEducationContext();
  if (editing) return null;
  return <DisplayMode />;
}

function Editing() {
  const { editing } = useEducationContext();
  if (!editing) return null;
  return <EditingMode />;
}

export const EducationComponents = {
  Header,
  Display,
  Editing,
};
