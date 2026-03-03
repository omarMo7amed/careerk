"use client";

import { createContext, use, useContext } from "react";
import { useLinksPortfolioModel } from "./useLinksPortfolioModel";
import type { LinksPortfolioProps } from "../types/types";
import { LinksPortfolioHeader } from "../components/LinksPortfolioHeader";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode as EditMode } from "../components/EditingMode";

export type LinksPortfolioContextValue = ReturnType<
  typeof useLinksPortfolioModel
>;

const LinksPortfolioContext = createContext<LinksPortfolioContextValue | null>(
  null,
);

export function LinksPortfolioProvider({
  profile,
  isOwner = false,
  children,
}: LinksPortfolioProps & { children: React.ReactNode }) {
  const model = useLinksPortfolioModel({ profile, isOwner });

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
