import { CandidateList } from "@/widgets/candidates-layout/candidate-list";
import { HeroSection } from "@/widgets/candidates-layout/hero-section";
import { CTA } from "@/widgets/candidates-layout/CTA";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CandidateList />
      <CTA />
    </div>
  );
}
