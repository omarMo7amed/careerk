import { ApplicationStatus } from "@/entities/application";
import { mockApplications } from "@/entities/company-applications";
import { GetApplicationResponse } from "@/entities/company-applications";
import { NextRequest, NextResponse } from "next/server";

const PATH = "/companies/me/jobs/{jobId}/applications";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> },
) {
  await new Promise((r) => setTimeout(r, 600));

  const { jobId } = await params;
  const { searchParams } = req.nextUrl;

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);
  const status = searchParams.get("status") as ApplicationStatus | null;

  const validStatuses: ApplicationStatus[] = [
    "PENDING",
    "REVIEWED",
    "SHORTLISTED",
    "REJECTED",
    "INTERVIEW_SCHEDULED",
    "HIRED",
    "WITHDRAWN",
  ];

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

  let applications = mockApplications.filter(
    (app) => app.directJob.id === jobId,
  );

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
