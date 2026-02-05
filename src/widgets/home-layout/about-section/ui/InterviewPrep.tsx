import { AboutSectionLayout } from "./AboutSectionLayout";
import { interviewPrepBenefits } from "../lib/interviewPrepBenefits";

export default function InterviewPrep() {
  return (
    <AboutSectionLayout
      id="interview-prep"
      badgeLabel="Interview Preparation"
      heading={
        <>
          Ace Your <span className="text-primary">Tech Interviews</span>
        </>
      }
      description="Access our comprehensive database of coding challenges, interview questions, and preparation resources tailored to your skills and target roles."
      benefits={interviewPrepBenefits}
      primaryButton={{ label: "Browse Questions" }}
      secondaryButton={{ label: "Start Practicing", variant: "outline" }}
      imageSrc="/about/interview-prep-hero.webp"
      imageAlt="" //here don't write imagae alt for accessibility
      imagePosition="left"
      zIndex="z-50"
    />
  );
}
