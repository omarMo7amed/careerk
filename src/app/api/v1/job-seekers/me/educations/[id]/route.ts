import { mockJobSeeker } from "@/entities/job-seeker";
import { NextRequest } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json().catch(() => ({}));

  const existing = mockJobSeeker.educations || [];
  const idx = existing.findIndex((e) => e.id === id);
  console.log("Existing education found at index:", idx);
  if (idx === -1) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  const updated = { ...existing[idx], ...body };

  // For mock server: mutate the in-memory array reference so subsequent calls reflect change
  existing[idx] = updated;

  return new Response(JSON.stringify(updated));
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const existing = mockJobSeeker.educations || [];
  const removed = existing.find((education) => education.id === id);

  if (!removed) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  mockJobSeeker.educations = existing.filter(
    (education) => education.id !== id,
  );

  return new Response(JSON.stringify({ data: removed }));
}
