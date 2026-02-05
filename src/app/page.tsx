import { HeroSection } from "@/widgets/home-layout/hero-section/ui/HeroSection";
import Image from "next/image";
import { FooterUI } from "@/widgets/footer";
import { AboutSectionUI } from "@/widgets/home-layout/about-section";
import { ObjectiveSectionUI } from "@/widgets/home-layout/objective-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* all sections here */}
      <AboutSectionUI />
      <ObjectiveSectionUI />
      <FooterUI />
    </div>
  );
}
