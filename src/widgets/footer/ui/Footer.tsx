import Image from "next/image";
import { FOOTER_LOGO, FOOTER_COLUMNS } from "../lib/constants";
import { FooterColumn } from "./FooterColumn";
import { JobSources } from "./JobSources";
import { FooterBottom } from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#f9fafb] pt-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Logo */}
        <div className="mb-[50px]">
          <Image
            src="/logo-dark.svg"
            alt={FOOTER_LOGO}
            width={200}
            height={60}
            className="h-[60px] w-auto"
          />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[50px] mb-[50px]">
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} column={column} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#374151] my-10" />

        {/* Job Sources */}
        <JobSources />
      </div>

      {/* Footer Bottom */}
      <FooterBottom />
    </footer>
  );
}
