import { ObjectiveSectionUI } from "@/widgets/home-layout/objective-section";
import { RecentJobsSection } from "@/widgets/home-layout/recent-jobs";
import { AboutSectionUI } from "@/widgets/home-layout/about-section";
import { HeroSection } from "@/widgets/home-layout/hero-section";
import { Header } from "@/widgets/header";
import { FooterUI } from "@/widgets/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div>
          <HeroSection />
          <AboutSectionUI />
          <ObjectiveSectionUI />
          <RecentJobsSection />
        </div>
      </main>
      <FooterUI />
    </>
  );
}
