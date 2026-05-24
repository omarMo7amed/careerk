import { mockJobSeeker } from "@/entities/job-seeker";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const education = body || {};

  const created = {
    id: education.id || Math.random().toString(36).slice(2, 10),
    degreeType: education.degreeType ?? null,
    description: education.description ?? "",
    institutionName: education.institutionName ?? "",
    isCurrent: Boolean(education.isCurrent),
    fieldOfStudy: education.fieldOfStudy ?? "",
    endDate: education.endDate ?? null,
    gpa: education.gpa ?? null,
    startDate: education.startDate ?? "",
  };

  mockJobSeeker.educations = [...(mockJobSeeker.educations || []), created];

  return new Response(JSON.stringify(created));
}
