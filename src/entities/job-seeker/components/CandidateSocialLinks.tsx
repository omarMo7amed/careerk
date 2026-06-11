import Link from "next/link";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import type { CandidateSocialLinksProps } from "../types/candidateSocialLinks";

export function CandidateSocialLinks({
  linkedinUrl,
  portfolioUrl,
  githubUrl,
}: CandidateSocialLinksProps) {
  console.log("CandidateSocialLinks props:", {
    linkedinUrl,
    portfolioUrl,
    githubUrl,
  });
  return (
    <div className="social-media flex items-center justify-between flex-wrap gap-4 mt-4">
      {linkedinUrl && (
        <div className="text-text-secondary flex-1 items-center justify-center flex hover:text-text-primary bg-bg-muted rounded-md">
          <Link
            href={`https://${linkedinUrl}`}
            target="_blank"
            className="p-2"
            aria-label="linked-in link"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      )}

      {portfolioUrl && (
        <div className="flex-1 items-center justify-center flex text-text-secondary hover:text-text-primary bg-bg-muted rounded-md">
          <Link
            href={`https://${portfolioUrl}`}
            target="_blank"
            className="p-2"
            aria-label="portfolio link"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      )}

      {githubUrl && (
        <div className="flex-1 items-center justify-center flex text-text-secondary hover:text-text-primary bg-bg-muted rounded-md">
          <Link
            href={`https://${githubUrl}`}
            target="_blank"
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
