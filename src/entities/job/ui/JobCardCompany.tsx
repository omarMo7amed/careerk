/**
 * JobCardCompany Component
 *
 * A card component displaying job information from the company's perspective.
 * Used for showing job listings with management actions.
 */

interface JobCardCompanyProps {
  title: string;
  location: string;
  type: string;
  applicants?: number;
  postedDate?: string;
}

export function JobCardCompany({
  title,
  location,
  type,
  applicants = 0,
  postedDate,
}: JobCardCompanyProps) {
  return (
    <div className="job-card-company">
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{type}</p>
      <div className="job-stats">
        <span>{applicants} applicants</span>
        {postedDate && <span>Posted: {postedDate}</span>}
      </div>
    </div>
  );
}
