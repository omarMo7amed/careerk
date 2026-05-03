"use client";

import { createContext, useContext } from "react";
import { useLinksPortfolioModel } from "./useLinksPortfolioModel";
import { LinksPortfolioHeader } from "../components/LinksPortfolioHeader";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode as EditMode } from "../components/EditingMode";
import { useProfileDetails } from "@/entities/job-seeker";

export type LinksPortfolioContextValue = ReturnType<
  typeof useLinksPortfolioModel
>;

const LinksPortfolioContext = createContext<LinksPortfolioContextValue | null>(
  null,
);

export function LinksPortfolioProvider({
  isOwner = false,
  children,
}: {
  children: React.ReactNode;
  isOwner?: boolean;
}) {
  const {
    jobSeekerDetails: { linkedinUrl, githubUrl, portfolioUrl },
  } = useProfileDetails({ token: "" });

  const model = useLinksPortfolioModel({
    socialContacts: { linkedinUrl, githubUrl, portfolioUrl },
    isOwner,
  });

  if (!model.isVisible) return null;

  return (
    <LinksPortfolioContext.Provider value={model}>
      <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
        {children}
      </section>
    </LinksPortfolioContext.Provider>
  );
}

export function useLinksPortfolioContext(): LinksPortfolioContextValue {
  const ctx = useContext(LinksPortfolioContext);
  if (!ctx)
    throw new Error(
      "useLinksPortfolioContext must be used inside <LinksPortfolioProvider>",
    );
  return ctx;
}

function Header() {
  return <LinksPortfolioHeader />;
}

function Display() {
  const { editing } = useLinksPortfolioContext();
  if (editing) return null;
  return <DisplayMode />;
}

function EditingMode() {
  const { editing } = useLinksPortfolioContext();
  if (!editing) return null;

  return <EditMode />;
}

export const LinksPortfolioComponents = {
  Header,
  Display,
  EditingMode,
};
