import {
  CompanyJob,
  GetCompanyJobResponse,
  mockJobs,
} from "@/entities/company-job";
import { NextResponse } from "next/server";

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
