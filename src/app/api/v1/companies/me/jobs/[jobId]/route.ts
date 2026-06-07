import {
  CompanyJob,
  GetCompanyJobResponse,
  mockJobs,
} from "@/entities/company-job";
import { NextRequest, NextResponse } from "next/server";

function deleteMockJob(jobId: string): boolean {
  const index = mockJobs.findIndex((j) => j.id === jobId);
  if (index === -1) return false;
  mockJobs.splice(index, 1);
  console.log("deleted", mockJobs);
  return true;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> },
) {
  await new Promise((r) => setTimeout(r, 600));

  const { jobId } = await params;
  const body = await req.json();

  const jobIndex = mockJobs.findIndex((j) => j.id === jobId);

  if (jobIndex === -1) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: "Job not found",
        meta: {
          timestamp: new Date().toISOString(),
          path: `/companies/me/jobs/${jobId}`,
          method: "PATCH",
        },
      },
      { status: 404 },
    );
  }

  const existingJob = mockJobs[jobIndex];

  const { skillNames, ...restBody } = body;

  // handle skillNames replacement
  let updatedSkills = existingJob.skills;

  if (skillNames) {
    updatedSkills = skillNames.map((name: string) => ({
      skillId: crypto.randomUUID(),
      name,
    }));
  }

  const updatedJob: CompanyJob = {
    ...existingJob,
    ...restBody,
    skills: updatedSkills,
  };

  mockJobs[jobIndex] = updatedJob;

  return NextResponse.json<GetCompanyJobResponse<CompanyJob>>({
    success: true,
    data: updatedJob,
    message: "Success",
    meta: {
      timestamp: new Date().toISOString(),
      path: `/companies/me/jobs/${jobId}`,
      method: "PATCH",
    },
  });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> },
) {
  await new Promise((r) => setTimeout(r, 600));

  const { jobId } = await params;

  const job = mockJobs.find((j) => j.id === jobId);

  if (!job) {
    return NextResponse.json<GetCompanyJobResponse<null>>(
      {
        success: false,
        data: null,
        message: "Job not found",
        meta: {
          timestamp: new Date().toISOString(),
          path: `/companies/me/jobs/${jobId}`,
          method: "GET",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json<GetCompanyJobResponse<CompanyJob>>({
    success: true,
    data: job,
    message: "Success",
    meta: {
      timestamp: new Date().toISOString(),
      path: `/companies/me/jobs/${jobId}`,
      method: "GET",
    },
  });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> },
) {
  await new Promise((r) => setTimeout(r, 600));

  const { jobId } = await params;
  console.log("Deleting:", jobId);

  const deleted = deleteMockJob(jobId);

  if (!deleted) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: "Job not found",
        meta: {
          timestamp: new Date().toISOString(),
          path: `/companies/me/jobs/${jobId}`,
          method: "DELETE",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      data: {},
      message: "Job deleted successfully",
      meta: {
        timestamp: new Date().toISOString(),
        path: `/companies/me/jobs/${jobId}`,
        method: "DELETE",
      },
    },
    { status: 200 },
  );
}
