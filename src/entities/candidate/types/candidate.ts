export interface Candidate {
  id: string;
  user_id: string;
  name: string;
  jobTitle: string;
  experienceLevel:
    | "Entry Level"
    | "Mid Level"
    | "Senior Level"
    | "Lead"
    | "Executive";
  skills: string[];
  title: string;
  email: string;
  phone: string | null;
  summary: string;
  location: string;
  avatarUrl?: string | null;
  /* This calculated on the backend 
  when the candidate upload their CV and it will be used to match them with the market
  */
  cv_score: number;
  /**
   * This is the percentage of how much the candidate CV matches with the job requirements
   */
  cv_match_percentage: number;

  /**
   * I will tell amr about it because i think it will be better if we use it as this instead of
  Enum availability_status_enum {
  immediately
  2_weeks
  1_month
  not_looking
}
   */
  availability_status: "Available" | "Not Available" | "Open to Offers";

  expected_salary: number | null;
  work_preference: "remote" | "on-site" | "hybrid" | "other";
  linkedin_url: string | null;
  portfolio_url: string | null;
  github_url: string | null;
  created_at: Date;
  updated_at: Date;
}
