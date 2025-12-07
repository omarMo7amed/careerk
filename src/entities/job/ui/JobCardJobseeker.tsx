interface JobCardJobseekerProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  postedDate?: string;
}

export function JobCardJobseeker({
  title,
  company,
  location,
  type,
  salary,
  postedDate,
}: JobCardJobseekerProps) {
  return (
    <div className="job-card-jobseeker">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <div className="job-details">
        <span>{location}</span>
        <span>{type}</span>
        {salary && <span>{salary}</span>}
      </div>
      {postedDate && <span className="posted-date">{postedDate}</span>}
    </div>
  );
}
