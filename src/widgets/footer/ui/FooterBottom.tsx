import Link from "next/link";
import { COPYRIGHT_TEXT, FOOTER_BOTTOM_LINKS } from "../lib/constants";

export function FooterBottom() {
  return (
    <div className="flex justify-between items-center py-8 px-10 flex-wrap gap-5 border-t border-[#374151]">
      <div className="text-[#6b7280] text-sm">{COPYRIGHT_TEXT}</div>
      <div className="flex gap-8 flex-wrap">
        {FOOTER_BOTTOM_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#9ca3af] no-underline text-sm transition-colors duration-300 hover:text-[#4186f6]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
