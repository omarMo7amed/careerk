import { Skill } from "@/entities/skill";
import { useSkillsContext } from "../model/SkillsContext";

export function DisplayMode() {
  const { skills } = useSkillsContext();

  if (!skills.length)
    return <p className="text-text-muted text-sm">No skills added yet.</p>;

  const verified = skills.filter((s) => s.verified);
  const other = skills.filter((s) => !s.verified);

  return (
    <>
      {verified.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-text-muted font-medium mb-2">Verified</p>
          <div className="flex flex-wrap gap-2">
            {verified.map((s) => (
              <Skill key={s.name} skill={s} />
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div>
          <p className="text-xs text-text-muted font-medium mb-2">Other</p>
          <div className="flex flex-wrap gap-2">
            {other.map((s) => (
              <Skill key={s.name} skill={s} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
