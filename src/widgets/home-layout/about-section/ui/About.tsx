import Company from "./Company";
import InterviewPrep from "./InterviewPrep";
import JobSeeker from "./JobSeeker";

export default function AboutSectionUI() {
  return (
    <div className="">
      <JobSeeker />
      <Company />
      <InterviewPrep />
    </div>
  );
}
