export interface CandidateHeaderProps {
  id: string;
  name: string;
  title?: string | null;
  avatarUrl?: string | null;
  rank: number;
  availability_status: "Available" | "Not Available" | "Open to Offers";
}
