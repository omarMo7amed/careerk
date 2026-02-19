import { CompanyLogo } from "./CompanyLogo";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CompanyHeaderProps {
  logo?: string;
  name: string;
  website?: string;
}

export function CompanyHeader({ logo, name, website }: CompanyHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {/* Logo */}
      <CompanyLogo logo={logo} name={name} />

      {/* Name & Website */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
          {name}
        </h3>
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-primary flex items-center gap-1 mt-1 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Visit website</span>
          </Link>
        )}
      </div>
    </div>
  );
}
