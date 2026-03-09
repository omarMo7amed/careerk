import { HeroSection } from "@/widgets/home-layout/hero-section";
import dynamic from "next/dynamic";

const AboutSectionUI = dynamic(
  () =>
    import("@/widgets/home-layout/about-section").then((m) => m.AboutSectionUI),
  { loading: () => null },
);

const ObjectiveSectionUI = dynamic(
  () =>
    import("@/widgets/home-layout/objective-section").then(
      (m) => m.ObjectiveSectionUI,
    ),
  { loading: () => null },
);

const RecentJobsSection = dynamic(
  () =>
    import("@/widgets/home-layout/recent-jobs").then(
      (m) => m.RecentJobsSection,
    ),
  { loading: () => null },
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSectionUI />
      <ObjectiveSectionUI />
      <RecentJobsSection />
    </>
  );
}
