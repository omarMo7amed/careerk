import { useCVInfo, useConfirmCVParse } from "@/entities/cv";
import { ExtractedCVInfo } from "../../extracted-info";
import { CTA } from "../../CTA/ui/CTA";
import { RecommendationInsights } from "../../recommendation-insights";
import { CVDropZone } from "@/features/upload-cv";
// import { useAuth } from "@/features/auth";

export function CVManagementContent() {
  // const {token}=useAuth();
  const {
    data,
    isLoading,
    error,
    isConfirmed,
    isUpdatePending,
    isFirstUpload,
  } = useCVInfo({ token: "" });

  if (isLoading) {
    return <div className="p-6">Loading CV information...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error loading CV information</div>;
  }

  // PRIMARY CONDITION: If cv-info has data OR profile is confirmed, show data
  const hasData = isUpdatePending || isConfirmed || isFirstUpload;

  if (!hasData) {
    // State 3: No data - show only drop zone
    return (
      <section className="space-y-10 p-6">
        <CVDropZone />
      </section>
    );
  }

  // State 2: Has confirmed profile (ONLY jobSeekersKeys.me.all) OR pending CV (BOTH caches)
  return (
    <section className="space-y-10 p-6">
      <CTA
        isConfirmed={isConfirmed}
        isUpdatePending={isUpdatePending}
        isFirstUpload={isFirstUpload}
      />

      <ExtractedCVInfo
        cvInfo={data}
        isConfirmed={isConfirmed}
        hasCVInfo={isUpdatePending || isFirstUpload}
      />

      {isConfirmed && <RecommendationInsights />}
      <CVDropZone />
    </section>
  );
}
