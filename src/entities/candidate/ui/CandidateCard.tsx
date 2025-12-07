/**
 * CandidateCard Component
 *
 * Displays candidate profile information.
 * Used by companies to view applicants and potential hires.
 */

import Image from "next/image";

interface CandidateCardProps {
  name: string;
  title: string;
  location: string;
  skills?: string[];
  experience?: string;
  avatarUrl?: string;
}

export function CandidateCard({
  name,
  title,
  location,
  skills = [],
  experience,
  avatarUrl,
}: CandidateCardProps) {
  return (
    <div className="candidate-card">
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt={name}
          className="avatar"
          width={64}
          height={64}
        />
      )}
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="location">{location}</p>
      {experience && <p className="experience">{experience}</p>}
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
