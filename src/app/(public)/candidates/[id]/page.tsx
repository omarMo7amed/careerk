import { CandidateProfileLoader } from "./CandidateProfileLoader";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CandidateProfilePage({ params }: PageProps) {
  const { id } = await params;
  return (
    <main className="min-h-screen py-8">
      <CandidateProfileLoader id={id} />
    </main>
  );
}
