import { AboutSectionLayout } from "./AboutSectionLayout";
import { interviewPrepBenefits } from "../lib/interviewPrepBenefits";
import { Button } from "@/shared";

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
      imageSrc="/about/interview-prep-hero.webp"
      imageAlt="" //here don't write imagae alt for accessibility
      imagePosition="left"
      zIndex="z-50"
    >
      {/* You can add a call-to-action button here if needed */}
      <Button variant="primary" size="lg">
        Start Preparing
      </Button>
    </AboutSectionLayout>
  );
}
