import { CVUploadCard } from "./CVUploadCard";
import { InterviewPrepCard } from "./InterviewPrepCard";
import { TopApplicantsCard } from "./TopApplicantsCard";

export function MockupCards() {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <div className="mockup-card relative w-full max-w-sm">
        <InterviewPrepCard />
        <TopApplicantsCard />
        <CVUploadCard />
      </div>
    </div>
  );
}
