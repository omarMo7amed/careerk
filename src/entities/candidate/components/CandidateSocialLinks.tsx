import Link from "next/link";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import type { CandidateSocialLinksProps } from "../types/candidateSocialLinks";

export function CandidateSocialLinks({
  linkedin_url,
  portfolio_url,
  github_url,
}: CandidateSocialLinksProps) {
  return (
    <div className="social-media flex items-center justify-between flex-wrap gap-4 mt-4">
      {linkedin_url && (
        <div className="text-text-secondary flex-1 items-center justify-center flex hover:text-text-primary bg-bg-muted rounded-md">
          <Link href={linkedin_url} className="p-2" aria-label="linked-in link">
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      )}

      {portfolio_url && (
        <div className="flex-1 items-center justify-center flex text-text-secondary hover:text-text-primary bg-bg-muted rounded-md">
          <Link
            href={portfolio_url || "#"}
            className="p-2"
            aria-label="portfolio link"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      )}

      {github_url && (
        <div className="flex-1 items-center justify-center flex text-text-secondary hover:text-text-primary bg-bg-muted rounded-md">
          <Link
            href={github_url || "#"}
            className="p-2"
            aria-label="github link"
          >
            <Github className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
