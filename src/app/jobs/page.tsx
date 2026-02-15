import { HeroSection } from "@/widgets/jobs-layout/hero-section";
import { JobsSection } from "@/widgets/jobs-layout/jobs-section";

export default function Page() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <JobsSection />
    </div>
  );
}
