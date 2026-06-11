import { getCandidateById } from "@/entities/job-seeker";
import { CandidateProfileLoader } from "./CandidateProfileLoader";
import { BackButton } from "@/shared";

interface PageProps {
  params: Promise<{ candidateID: string }>;
}

export default async function CandidateProfilePage({ params }: PageProps) {
  const { candidateID } = await params;
  console.log("Rendering CandidateProfilePage with ID:", candidateID);
  const data = await getCandidateById(candidateID);
  console.log("Fetched candidate data:", data);
  return (
    <main className="min-h-screen ">
      <div className="my-5">
        <BackButton />
      </div>
      <CandidateProfileLoader candidateID={candidateID} />
    </main>
  );
}
