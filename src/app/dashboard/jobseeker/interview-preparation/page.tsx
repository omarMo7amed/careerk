import { DashboardHeader } from "@/shared";
import { InterviewPreparationWidget } from "@/widgets/interview-preparation";

export default function InterviewPreparationPage() {
  return (
    <div className="p-6">
      <DashboardHeader
        title="Interview Preparation"
        subtitle="Practice questions and identify skill gaps tailored to your role"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard/jobseeker/overview" },
          { label: "Interview Preparation" },
        ]}
      />
      <div className="mt-6">
        <InterviewPreparationWidget />
      </div>
    </div>
  );
}
