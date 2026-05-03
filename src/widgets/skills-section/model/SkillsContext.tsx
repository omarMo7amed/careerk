"use client";
import { createContext, useContext } from "react";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode } from "../components/EditingMode";
import { useSkillsModel } from "./useSkillsModel";
import { SkillHeader } from "../components/SkillHeader";

export type SkillsContextValue = ReturnType<typeof useSkillsModel>;

const SkillsContext = createContext<SkillsContextValue | null>(null);

export function SkillsProvider({
  isOwner = false,
  children,
  skills,
}: {
  isOwner?: boolean;
  children: React.ReactNode;
  skills?: SkillsContextValue["skills"];
}) {
  const model = useSkillsModel({ isOwner });
  const visibleSkills = model.editing ? model.skills : skills ?? model.skills;

  return (
    <SkillsContext.Provider value={{ ...model, skills: visibleSkills }}>
      <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
        {children}
      </section>
    </SkillsContext.Provider>
  );
}

export function useSkillsContext(): SkillsContextValue {
  const ctx = useContext(SkillsContext);
  if (!ctx)
    throw new Error("useSkillsContext must be used inside <SkillsProvider>");
  return ctx;
}

function Header() {
  return <SkillHeader />;
}

function Display() {
  const { editing } = useSkillsContext();
  if (editing) return null;
  return <DisplayMode />;
}

function Editing() {
  const { editing } = useSkillsContext();
  if (!editing) return null;
  return <EditingMode />;
}

export const SkillsComponents = {
  Header,
  Display,
  Editing,
};
