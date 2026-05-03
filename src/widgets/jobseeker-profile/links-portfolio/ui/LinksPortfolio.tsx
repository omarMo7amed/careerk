"use client";

import {
  LinksPortfolioComponents,
  LinksPortfolioProvider,
} from "../model/LinksPortfolioContext";

export function LinksPortfolio({ isOwner = false }: { isOwner?: boolean }) {
  return (
    <LinksPortfolioProvider isOwner={isOwner}>
      <LinksPortfolioComponents.Header />
      <LinksPortfolioComponents.Display />
      <LinksPortfolioComponents.EditingMode />
    </LinksPortfolioProvider>
  );
}
