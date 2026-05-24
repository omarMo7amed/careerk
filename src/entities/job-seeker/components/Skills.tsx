import { JobSeekerSkill, Skill } from "@/entities/skill";

export default function Skills({
  skills,
}: {
  skills: JobSeekerSkill[] | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {skills?.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
