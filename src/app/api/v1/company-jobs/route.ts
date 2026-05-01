import {
  CompanyJob,
  GetCompanyJobResponse,
  mockJobs,
} from "@/entities/company-job";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await new Promise((r) => setTimeout(r, 600));

  const body = await req.json();
  const { skillNames, ...rest } = body;

  // Guard — skillNames must be an array
  if (!Array.isArray(skillNames)) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: "skillNames must be an array",
        meta: {
          timestamp: new Date().toISOString(),
          path: "/api/v1/company-jobs",
          method: "POST",
        },
      },
      { status: 400 },
    );
  }

  const newJob: CompanyJob = {
    id: crypto.randomUUID(),
    ...rest,
    status: rest.status,
    publishedAt: null,
    requirements: rest.requirements ?? null,
    responsibilities: rest.responsibilities ?? null,
    location: rest.location ?? null,
    salaryMin: rest.salaryMin ?? null,
    salaryMax: rest.salaryMax ?? null,
    deadline: rest.deadline ?? null,
    company: {
      id: "company_001",
      name: "Careerk",
      logoUrl: null,
    },
    skills: (skillNames as string[]).map((name) => ({
      skillId: crypto.randomUUID(),
      name,
    })),
  };

  mockJobs.unshift(newJob);
  console.log("added", mockJobs);
  return NextResponse.json<GetCompanyJobResponse<CompanyJob>>(
    {
      success: true,
      data: newJob,
      message: "Success",
      meta: {
        timestamp: new Date().toISOString(),
        path: "/api/v1/company-jobs",
        method: "POST",
      },
    },
    { status: 201 },
  );
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return NextResponse.json<GetCompanyJobResponse<CompanyJob[]>>(
    {
      success: true,
      data: mockJobs,
      message: "Success",
      meta: {
        timestamp: new Date().toISOString(),
        path: "/api/v1/company-jobs",
        method: "GET",
      },
    },
    { status: 200 },
  );
}
