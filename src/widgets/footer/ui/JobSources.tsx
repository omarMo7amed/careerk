import Link from "next/link";
import { JOB_SOURCES } from "../lib/constants";

export function JobSources() {
  return (
    <div className="bg-[#4186f6]/5 border border-[#374151] rounded-xl px-8 py-6 mb-10 text-center">
      <div className="text-sm text-[#9ca3af] mb-3 uppercase tracking-wide font-semibold">
        Job Aggregation Sources
      </div>
      <div className="flex justify-center items-center flex-wrap gap-2 text-base">
        <span className="text-[#9ca3af]">
          We scrape and aggregate jobs from
        </span>
        {JOB_SOURCES.map((source, index) => (
          <span key={source.name} className="inline-flex items-center gap-2">
            <Link
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4186f6] no-underline font-semibold transition-colors duration-300 hover:text-[#6ba3f8] hover:underline"
            >
              {source.name}
            </Link>
            {index < JOB_SOURCES.length - 1 && (
              <span className="text-[#9ca3af]">•</span>
            )}
          </span>
        ))}
        <span className="text-[#9ca3af]">and with our site</span>
      </div>
    </div>
  );
}
