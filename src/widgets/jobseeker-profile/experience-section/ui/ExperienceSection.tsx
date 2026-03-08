import { Briefcase } from "lucide-react";
import { ExperienceCard, WorkExperience } from "@/entities/experience";

export function ExperienceSection({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  if (!workExperiences.length) return null;

  return (
    <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
      <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-5">
        <Briefcase className="w-4 h-4 text-primary" />
        Work Experience
      </h2>

      <div className="relative">
        {/* Timeline */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="flex flex-col gap-6">
          {workExperiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              experience={exp}
              isMostRecent={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
