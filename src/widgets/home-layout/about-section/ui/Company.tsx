import { AboutSectionLayout } from "./AboutSectionLayout";
import { companyBenefits } from "../lib/companyBenefits";

export default function Company() {
  return (
    <AboutSectionLayout
      id="companies"
      badgeLabel="For Companies"
      heading={
        <>
          Hire the Best <span className="text-primary">Tech Talent</span>
        </>
      }
      description="Post your openings and connect with pre-qualified candidates. Our platform helps you find the perfect fit faster."
      benefits={companyBenefits}
      primaryButton={{ label: "Post a Job" }}
      secondaryButton={{ label: "Learn More", variant: "outline" }}
      imageSrc="/about/company-illustration.webp"
      imageAlt="" //here don't write imagae alt for accessibility
      imagePosition="right"
      zIndex="z-20"
    />
  );
}
