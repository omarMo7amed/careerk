import { mockJobSeeker } from "@/entities/job-seeker";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ data: mockJobSeeker }));
}

export async function PATCH(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  if (
    body.hasOwnProperty("firstName") ||
    body.hasOwnProperty("lastName") ||
    body.hasOwnProperty("profileImageUrl")
  ) {
    mockJobSeeker.firstName = body.firstName || mockJobSeeker.firstName;
    mockJobSeeker.lastName = body.lastName || mockJobSeeker.lastName;
    mockJobSeeker.profileImageUrl =
      body.profileImageUrl || mockJobSeeker.profileImageUrl;
    return new Response(JSON.stringify({ data: body }));
  }

  mockJobSeeker.profile = { ...mockJobSeeker.profile, ...body };

  return new Response(JSON.stringify({ data: body }));
}
