import { CandidateList } from "@/widgets/candidates-layout/candidate-list/ui/CandidateList";
import { CTA } from "@/widgets/candidates-layout/CTA";
import { HeroSection } from "@/widgets/candidates-layout/hero-section";

export default function Page() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <CandidateList />
      <CTA />
    </div>
  );
}
