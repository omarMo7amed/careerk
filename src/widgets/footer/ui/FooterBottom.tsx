import Link from "next/link";
import { COPYRIGHT_TEXT, FOOTER_BOTTOM_LINKS } from "../lib/constants";

export function FooterBottom() {
  return (
    <div className="flex justify-center md:justify-between items-center py-8 px-10 flex-wrap gap-5 border-t border-border">
      <div className="text-text-muted text-sm text-center">
        {COPYRIGHT_TEXT}
      </div>
      <div className="flex gap-8 flex-wrap">
        {FOOTER_BOTTOM_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text-muted no-underline text-sm transition-colors duration-300 hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
