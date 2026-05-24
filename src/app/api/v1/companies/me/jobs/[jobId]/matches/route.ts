import { GetCompanyJobResponse } from "@/entities/company-job";
import { getMockJob, getMockMatches } from "@/entities/company-job";
import {
  JobMatch,
  JobMatchesData,
  AvailabilityStatus,
} from "@/entities/company-job/types/companyJob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> },
) {
  await new Promise((r) => setTimeout(r, 600));

  const { jobId } = await params;
  const { searchParams } = req.nextUrl;

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);
  const minScore = searchParams.get("minScore")
    ? Number(searchParams.get("minScore"))
    : null;
  const availabilityStatus = searchParams.get(
    "availabilityStatus",
  ) as AvailabilityStatus | null;

  // Validate availabilityStatus if provided
  const validStatuses: AvailabilityStatus[] = [
    "OPEN_TO_WORK",
    "NOT_LOOKING",
    "PASSIVELY_LOOKING",
  ];
  if (availabilityStatus && !validStatuses.includes(availabilityStatus)) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: ["availabilityStatus must be a valid enum value"],
          statusCode: 400,
          timestamp: new Date().toISOString(),
          path: `/companies/me/jobs/${jobId}/matches`,
          method: "GET",
          details: "Bad Request",
        },
      },
      { status: 400 },
    );
  }

  // Job must exist
  const job = getMockJob(jobId);
  if (!job) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Job not found",
          statusCode: 404,
          timestamp: new Date().toISOString(),
          path: `/companies/me/jobs/${jobId}/matches`,
          method: "GET",
          details: "Not Found",
        },
      },
      { status: 404 },
    );
  }

  let matches: JobMatch[] = getMockMatches(jobId);

  // Sort by matchScore descending
  matches = [...matches].sort((a, b) => b.matchScore - a.matchScore);

  // Apply filters
  if (minScore !== null) {
    matches = matches.filter((m) => m.matchScore >= minScore);
  }
  if (availabilityStatus) {
    matches = matches.filter(
      (m) => m.availabilityStatus === availabilityStatus,
    );
  }

  // Pagination
  const total = matches.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const paginated = matches.slice(start, start + limit);

  return NextResponse.json<GetCompanyJobResponse<JobMatchesData>>({
    success: true,
    data: {
      matches: paginated,
      total,
      page,
      limit,
      totalPages,
    },
    message: "Company job matches retrieved successfully",
    meta: {
      timestamp: new Date().toISOString(),
      path: `/companies/me/jobs/${jobId}/matches`,
      method: "GET",
    },
  });
}
