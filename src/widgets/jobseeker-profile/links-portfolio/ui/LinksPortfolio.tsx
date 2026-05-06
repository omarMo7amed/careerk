"use client";

import {
  LinksPortfolioComponents,
  LinksPortfolioProvider,
} from "../model/LinksPortfolioContext";

export function LinksPortfolio({
  socialContacts,
  isOwner = false,
}: {
  socialContacts: {
    linkedinUrl?: string;
    githubUrl?: string;
    portfolioUrl?: string;
  };
  isOwner?: boolean;
}) {
  return (
    <LinksPortfolioProvider socialContacts={socialContacts} isOwner={isOwner}>
      <LinksPortfolioComponents.Header />
      <LinksPortfolioComponents.Display />
      <LinksPortfolioComponents.EditingMode />
    </LinksPortfolioProvider>
  );
}
