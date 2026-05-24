import { mockJobSeeker } from "@/entities/job-seeker";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const skillNames: string[] = body.skillNames || [];

  console.log("Received skill names:", skillNames);

  const created = skillNames.map((name) => ({
    skillId: Math.random().toString(36).substr(2, 9),
    name,
    verified: false,
  }));

  mockJobSeeker.skills = [...(mockJobSeeker.skills || []), ...created];

  return new Response(JSON.stringify({ data: created }));
}

export async function DELETE(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const ids: string[] = body.ids || [];
  const existing = mockJobSeeker.skills || [];
  const removed = existing.filter((skill) => ids.includes(skill.skillId));
  const remaining = existing.filter((skill) => !ids.includes(skill.skillId));

  console.log("Received skill IDs to delete:", ids);
  mockJobSeeker.skills = remaining;

  return new Response(JSON.stringify({ data: removed }));
}
