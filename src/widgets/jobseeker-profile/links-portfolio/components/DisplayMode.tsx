import { Github, Linkedin, Globe } from "lucide-react";
import { useLinksPortfolioContext } from "../model/LinksPortfolioContext";
import { LinkRow } from "./LinkRow";

export function DisplayMode() {
  const { profile } = useLinksPortfolioContext();

  return (
    <div className="flex flex-col gap-2">
      <LinkRow
        icon={<Linkedin className="w-5 h-5" />}
        label="LinkedIn"
        url={profile.linkedinUrl}
        iconColor="text-[#0077B5]"
      />
      <LinkRow
        icon={<Github className="w-5 h-5" />}
        label="GitHub"
        url={profile.githubUrl}
        iconColor="text-foreground"
      />
      <LinkRow
        icon={<Globe className="w-5 h-5" />}
        label="Portfolio"
        url={profile.portfolioUrl}
      />
    </div>
  );
}
