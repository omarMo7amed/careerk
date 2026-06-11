import { authInterceptor } from "@/shared";
import type { RoleSlug, LevelSlug, QuestionCategory } from "../types";
import type { PaginatedQuestions } from "../types";

export interface GetQuestionsParams {
  role?: RoleSlug;
  level?: LevelSlug;
  category?: QuestionCategory;
  page?: number;
  limit?: number;
}

export async function getInterviewQuestions(
  params: GetQuestionsParams,
): Promise<PaginatedQuestions> {
  const searchParams = new URLSearchParams();
  if (params.role) searchParams.set("role", params.role);
  if (params.level) searchParams.set("level", params.level);
  if (params.category) searchParams.set("category", params.category);
  if (params.page) searchParams.set("page", String(params.page));
  if (params.limit) searchParams.set("limit", String(params.limit));

  const response = await authInterceptor(
    `/interview-questions?${searchParams.toString()}`,
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Please log in to access interview questions");
    }
    const err = await response.json().catch(() => null);
    throw new Error(
      err?.error?.message ||
        `Failed to fetch interview questions (${response.status})`,
    );
  }

  const json = await response.json();
  return json.data as PaginatedQuestions;
}
