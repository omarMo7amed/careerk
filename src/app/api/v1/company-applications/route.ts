import { NextRequest, NextResponse } from "next/server";

import { ApplicationStatus } from "@/entities/application";
import {
  GetApplicationResponse,
  mockApplications,
} from "@/entities/company-applications";

const validStatuses: ApplicationStatus[] = [
  "PENDING",
  "REVIEWED",
  "SHORTLISTED",
  "INTERVIEW_SCHEDULED",
  "REJECTED",
  "HIRED",
  "WITHDRAWN",
];

const PATH = "/companies/me/applications";

export async function GET(req: NextRequest) {
  await new Promise((r) => setTimeout(r, 600));

  const { searchParams } = req.nextUrl;

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);
  const jobId = searchParams.get("jobId");
  const status = searchParams.get("status") as ApplicationStatus | null;

  if (status && !validStatuses.includes(status)) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: ["status must be a valid enum value"],
          statusCode: 400,
          timestamp: new Date().toISOString(),
          path: PATH,
          method: "GET",
          details: "Bad Request",
        },
      },
      { status: 400 },
    );
  }

  let applications = mockApplications;

  if (jobId) {
    applications = applications.filter((app) => app.directJob.id === jobId);
  }

  if (status) {
    applications = applications.filter((app) => app.status === status);
  }

  const total = applications.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const paginated = applications.slice(start, start + limit);

  return NextResponse.json<GetApplicationResponse>(
    {
      success: true,
      data: {
        applications: paginated,
        total,
        page,
        limit,
        totalPages,
      },
      message: "Applications retrieved successfully",
    },
    { status: 200 },
  );
}
