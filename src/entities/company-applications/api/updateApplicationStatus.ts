import { ApplicationStatus } from "@/entities/application";
import { axiosInstance } from "@/shared/api/axiosInstance";

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus,
): Promise<void> {
  await axiosInstance.patch(`/company-applications/${id}`, { status });
}
