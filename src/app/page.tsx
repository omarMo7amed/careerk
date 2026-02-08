import { ObjectiveSectionUI } from "@/widgets/home-layout/objective-section";
import { RecentJobsSection } from "@/widgets/home-layout/recent-jobs";
import { AboutSectionUI } from "@/widgets/home-layout/about-section";
import { HeroSection } from "@/widgets/home-layout/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSectionUI />
      <ObjectiveSectionUI />
      <RecentJobsSection />
    </div>
  );
}
