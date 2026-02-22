import { Skill } from "@/entities/skill";

export default function JobSkills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {skills?.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
}
