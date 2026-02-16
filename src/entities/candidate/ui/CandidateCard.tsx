import Image from "next/image";
import { Candidate } from "../types/candidate";
import { getProfileColor, getInitialsFromFullName } from "@/shared";

export function CandidateCard({ candidate }: { candidate: Candidate }) {
  const {
    id,
    name,
    title,
    location,
    summary,
    availability_status,
    skills,
    avatarUrl,
  } = candidate;

  const initials = getInitialsFromFullName(name);

  const bg = getProfileColor(id);

  return (
    <div className="bg-foreground">
      <div className="flex items-start justify-between">
        <div className="flex">
          <div className="flex-1">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                className="avatar rounded-full"
                width={64}
                height={64}
              />
            ) : (
              <div
                className="avatar rounded-full w-16 h-16 flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: bg }}
                aria-hidden={true}
              >
                {initials}
              </div>
            )}
          </div>
          <div className="ml-4 shrink">
            <h4 className="text-text-primary text-lg">{name}</h4>
            <p className="text-text-secondary text-sm">{title}</p>
            <span
              className="rounded-lg inline-flex items-center gap-2 text-white px-2 py-1 text-xs mt-1"
              style={{
                backgroundColor: bg,
              }}
            >
              <span className="rounded-full w-2 h-2 bg-white" />

              {availability_status}
            </span>
          </div>
        </div>
        <div className="bg-amber-300 rounded-full w-8 h-8 flex items-center justify-center  text-sm">
          10
        </div>
      </div>

      <p className="text-text-secondary text-sm">{summary}</p>
      {skills.length > 0 && (
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
