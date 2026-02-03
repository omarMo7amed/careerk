import { JobCardCompanyProps } from "../types/jobCardCompany";

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
