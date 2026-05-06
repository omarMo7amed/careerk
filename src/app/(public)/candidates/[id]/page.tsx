import { getCandidateById } from "@/entities/job-seeker";
import { CandidateProfileLoader } from "./CandidateProfileLoader";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CandidateProfilePage({ params }: PageProps) {
  const { id } = await params;
  console.log("Rendering CandidateProfilePage with ID:", id);
  const data = await getCandidateById(id);
  console.log("Fetched candidate data:", data);
  return (
    <main className="min-h-screen py-8">
      <CandidateProfileLoader id={id} />
    </main>
  );
}
