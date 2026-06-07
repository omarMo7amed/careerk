import { NextRequest, NextResponse } from "next/server";

import { ApplicationStatus } from "@/entities/application";
import { mockApplications } from "@/entities/company-applications";

const validStatuses: ApplicationStatus[] = [
  "PENDING",
  "REVIEWED",
  "SHORTLISTED",
  "INTERVIEW_SCHEDULED",
  "REJECTED",
  "HIRED",
  "WITHDRAWN",
];

function updateMockApplicationStatus(
  id: string,
  status: ApplicationStatus,
): boolean {
  const index = mockApplications.findIndex((app) => app.id === id);
  if (index === -1) return false;
  mockApplications[index] = { ...mockApplications[index], status };
  return true;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await new Promise((r) => setTimeout(r, 600));

  const { id } = await params;
  const path = `/companies/me/applications/${id}`;

  const body = await req.json();
  const { status } = body;

  if (!status || !validStatuses.includes(status)) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: ["status must be a valid enum value"],
          statusCode: 400,
          timestamp: new Date().toISOString(),
          path,
          method: "PATCH",
          details: "Bad Request",
        },
      },
      { status: 400 },
    );
  }

  const exists = mockApplications.find((app) => app.id === id);
  if (!exists) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "no application exists with this id",
          statusCode: 404,
          timestamp: new Date().toISOString(),
          path,
          method: "PATCH",
          details: "Not Found",
        },
      },
      { status: 404 },
    );
  }

  updateMockApplicationStatus(id, status);

  return NextResponse.json(
    {
      success: true,
      message: "Application status updated successfully",
      meta: {
        timestamp: new Date().toISOString(),
        path,
        method: "PATCH",
      },
    },
    { status: 200 },
  );
}
