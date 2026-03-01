"use client";

import {
  LinksPortfolioComponents,
  LinksPortfolioProvider,
} from "../model/LinksPortfolioContext";

import type { LinksPortfolioProps } from "../types/types";

export function LinksPortfolio({
  profile,
  isOwner = false,
}: LinksPortfolioProps) {
  return (
    <LinksPortfolioProvider profile={profile} isOwner={isOwner}>
      <LinksPortfolioComponents.Header />
      <LinksPortfolioComponents.Display />
      <LinksPortfolioComponents.EditingMode />
    </LinksPortfolioProvider>
  );
}
