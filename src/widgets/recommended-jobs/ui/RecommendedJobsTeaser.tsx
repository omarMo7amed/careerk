import Link from "next/link";
import { ArrowRight, Sparkles, Briefcase, Star } from "lucide-react";

export function RecommendedJobsTeaser() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary via-[#0466c8] to-[#4895ef] p-8">
      {/* decorative */}
      <span className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
      <span className="absolute bottom-0 left-1/3 w-28 h-28 rounded-full bg-white/5" />

      <div className="relative flex flex-wrap items-center justify-between gap-6">
        {/* left */}
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-extrabold text-white">
                Jobs Recommended for You
              </h3>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-md">
              Based on your CV analysis, we&apos;ve matched your skills and
              experience to the best open positions right now.
            </p>
            <div className="flex gap-4 mt-3">
              <Stat
                icon={<Briefcase className="w-3.5 h-3.5" />}
                label="Active Jobs"
              />
              <Stat
                icon={<Star className="w-3.5 h-3.5" />}
                label="Top Matches"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/dashboard/jobseeker/recommended-jobs"
          className="shrink-0 inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:bg-white/90 active:scale-95 transition-all whitespace-nowrap"
        >
          View All Recommended Jobs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-white/70 text-xs font-medium">
      {icon}
      {label}
    </span>
  );
}
