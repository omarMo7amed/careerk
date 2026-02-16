import { CTA } from "@/widgets/jobs-layout/CTA";
import { HeroSection } from "@/widgets/jobs-layout/hero-section";
import { JobsList } from "@/widgets/jobs-layout/jobs-list";

export default function Page() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <JobsList />
      <CTA />
    </div>
  );
}
