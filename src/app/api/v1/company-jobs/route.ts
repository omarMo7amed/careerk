import {
  CompanyJob,
  GetCompanyJobResponse,
  mockJobs,
} from "@/entities/company-job";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await new Promise((r) => setTimeout(r, 600));

  const body = await req.json();

  const newJob: CompanyJob = {
    id: crypto.randomUUID(),
    ...body,
    status: body.status,
    publishedAt: null,
    requirements: body.requirements ?? null,
    responsibilities: body.responsibilities ?? null,
    location: body.location ?? null,
    salaryMin: body.salaryMin ?? null,
    salaryMax: body.salaryMax ?? null,
    deadline: body.deadline ?? null,
    company: {
      //will be changed
      id: "company_001",
      name: "Careerk",
      logoUrl: null,
    },
    skills: body.skills ?? [],
  };

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
