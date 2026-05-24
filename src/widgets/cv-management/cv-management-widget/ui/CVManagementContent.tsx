import { RecommendationInsights } from "../../recommendation-insights";
import { ExtractedCVInfo } from "../../extracted-info";
import { CTA } from "../../CTA/ui/CTA";

import { CVDropZone } from "@/features/upload-cv";
// import { useAuth } from "@/features/auth";
import { useCVInfo } from "@/entities/cv";

import { Error, Loader } from "@/shared";

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
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const hasData = isUpdatePending || isConfirmed || isFirstUpload;

  if (!hasData) {
    return (
      <section className="space-y-10 p-6">
        <CVDropZone />
      </section>
    );
  }

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
