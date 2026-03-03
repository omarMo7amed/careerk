import { CandidatesLayout } from "@/widgets/company-candidates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidates",
  description:
    "Browse and manage job applicants. Review candidate profiles, track applications, and streamline your hiring process.",
};

export default function CandidatesPage() {
  return (
    <div>
      <CandidatesLayout />
    </div>
  );
}
