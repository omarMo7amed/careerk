import { allJobSeekers } from "@/entities/job-seeker";

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const jobSeeker = allJobSeekers.find(
    (seeker) => seeker.profile.jobSeekerId === id,
  );

  if (!jobSeeker) {
    return NextResponse.json(
      { error: "Not Found", message: `Candidate with ID ${id} not found` },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: jobSeeker,
  });
}
