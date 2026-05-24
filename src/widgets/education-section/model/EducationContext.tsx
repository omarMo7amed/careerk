"use client";
import { createContext, useContext } from "react";
import { useEducationModel } from "./useEducationModel";
import { EducationManage } from "../components/EducationManage";
import { Education } from "@/entities/education";
import { GraduationCap } from "lucide-react";

export type EducationContextValue = ReturnType<typeof useEducationModel>;

const EducationContext = createContext<EducationContextValue | null>(null);

export function EducationProvider({
  isOwner = false,
  children,
  educations,
}: {
  isOwner?: boolean;
  children: React.ReactNode;
  educations?: Education[];
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
  return (
    <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-5">
      <GraduationCap className="w-4 h-4 text-primary" />
      Education
    </h2>
  );
}

function Content() {
  return <EducationManage />;
}

export const EducationComponents = {
  Header,
  Content,
};
