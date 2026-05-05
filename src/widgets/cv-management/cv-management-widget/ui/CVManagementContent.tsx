import { useCVInfo, useConfirmCVParse } from "@/entities/cv";
import { ExtractedCVInfo } from "../../extracted-info";
import { CTA } from "../../CTA/ui/CTA";
import { RecommendationInsights } from "../../recommendation-insights";
import { CVDropZone } from "@/features/upload-cv";
// import { useAuth } from "@/features/auth";

export function CVManagementContent() {
  // const {token}=useAuth();
  const { data, isLoading, error, hasProfile } = useCVInfo({ token: "" });
  const {
    confirmCVParse,
    // isPending: isConfirming,
    // isSuccess: confirmSuccess,
    // isError: confirmError,
  } = useConfirmCVParse({ token: "" });

  if (isLoading) {
    return <div className="p-6">Loading CV information...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error loading CV information</div>;
  }

  if (!data.profile) {
    return (
      <section className="space-y-10 p-6">
        <CVDropZone />
      </section>
    );
  }

  return (
    <section className="space-y-10 p-6">
      <CTA confirmed={hasProfile} confirmCVParse={confirmCVParse} />
      <ExtractedCVInfo
        hasProfile={hasProfile}
        cvInfo={data}
        isConfirmed={hasProfile}
      />

      {hasProfile && <RecommendationInsights />}
      <CVDropZone />
    </section>
  );
}
