import { JobSeekerSkill, Skill } from "@/entities/skill";
import { useSkillsContext } from "../model/SkillsContext";

export function DisplayMode() {
  const { skills } = useSkillsContext();

  if (!skills.length)
    return <p className="text-text-muted text-sm">No skills added yet.</p>;

  const verified = skills.filter((s: JobSeekerSkill) => s.verified);
  const other = skills.filter((s: JobSeekerSkill) => !s.verified);

  return (
    <>
      {verified.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-text-muted font-medium mb-2">Verified</p>
          <div className="flex flex-wrap gap-2">
            {verified.map((s: JobSeekerSkill, index: number) => (
              <Skill key={s.skillId || index} skill={s} index={index} />
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div>
          <p className="text-xs text-text-muted font-medium mb-2">Other</p>
          <div className="flex flex-wrap gap-2">
            {other.map((s: JobSeekerSkill, index: number) => (
              <Skill key={s.skillId || index} skill={s} index={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
