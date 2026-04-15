import { LinkRow } from "@/widgets/jobseeker-profile/links-portfolio/components/LinkRow";
import { Facebook, Link2, Linkedin, Pencil, Twitter } from "lucide-react";
import { LinksDisplayModeProps } from "../types/componentsTypes";

export function LinksDisplayMode({
  links,
  isOwner,
  onEdit,
}: LinksDisplayModeProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Link2 className="w-5 h-5 text-primary" />

          <h2 className="text-base font-semibold">Links &amp; Portfolio</h2>
        </div>
        {isOwner && (
          <button
            onClick={onEdit}
            className="text-text-muted hover:text-primary transition-colors"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <LinkRow
          icon={<Linkedin className="w-5 h-5" />}
          label="LinkedIn"
          url={links.linkedIn}
        />
        <LinkRow
          icon={<Facebook className="w-5 h-5" />}
          label="Facebook"
          url={links.facebook}
        />
        <LinkRow
          icon={<Twitter className="w-5 h-5" />}
          label="Twitter"
          url={links.twitter}
        />
      </div>
    </>
  );
}
