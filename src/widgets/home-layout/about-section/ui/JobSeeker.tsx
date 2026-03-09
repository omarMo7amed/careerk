import { AboutSectionLayout } from "./AboutSectionLayout";
import { jobSeekerBenefits } from "../lib/jobSeekerBenefits";
import { UploadCvButton } from "@/features/upload-cv";

export default function JobSeeker() {
  return (
    <AboutSectionLayout
      id="candidates"
      badgeLabel="For Job Seekers"
      heading={
        <>
          Find Your Next <span className="text-primary">Dream Role</span>
        </>
      }
      description="Stop jumping between multiple job boards. CareerK brings all opportunities to you and helps you stand out with personalized recommendations."
      benefits={jobSeekerBenefits}
      imageSrc="/about/job-seeker-illustration.webp"
      imageAlt="" //here don't write imagae alt for accessibility
      imagePosition="left"
      zIndex="z-10"
    >
      <UploadCvButton />
    </AboutSectionLayout>
  );
}
