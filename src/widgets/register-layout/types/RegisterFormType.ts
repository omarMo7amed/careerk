export type JobSeekerData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type JobSeekerErrors = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type CompanyData = {
  companyName: string;
  email: string;
  password: string;
  industry: string;
  size: string;
  type: string;
};

export type CompanyErrors = {
  companyName: string;
  email: string;
  password: string;
  industry: string;
};

export type PrepItemProps = { emoji: string; label: string; example: string };

export type ApplicantItemProps = {
  initials: string;
  title: string;
  details: string;
  score: string;
  color: "green" | "blue";
};
