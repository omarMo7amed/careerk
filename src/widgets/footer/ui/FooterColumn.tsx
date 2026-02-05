import Link from "next/link";
import type { FooterColumn as FooterColumnType } from "../model/types";

interface FooterColumnProps {
  column: FooterColumnType;
}

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h3 className="text-base font-bold mb-5 text-[#f9fafb] uppercase tracking-wide">
        {column.title}
      </h3>
      <ul className="list-none">
        {column.links.map((link) => (
          <li key={link.href} className="mb-3">
            <Link
              href={link.href}
              className="text-[#9ca3af] no-underline text-[15px] transition-all duration-300 inline-block hover:text-[#4186f6] hover:translate-x-1"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
