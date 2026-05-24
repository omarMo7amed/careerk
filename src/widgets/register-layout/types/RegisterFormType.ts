export type JobSeekerData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type CompanyData = {
  name: string;
  email: string;
  password: string;
  industry: string;
  size: string;
  type: string;
};

export type PrepItemProps = { emoji: string; label: string; example: string };

export type ApplicantItemProps = {
  initials: string;
  title: string;
  details: string;
  score: string;
  color: "green" | "blue";
};

export type RegisterState = {
  errors: {
    email?: string[];
    password?: string[];
    firstName?: string[];
    lastName?: string[];
    name?: string[];
    industry?: string[];
    size?: string[];
    type?: string[];
  };
  success: boolean;
};
