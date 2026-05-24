import { JobSeeker } from "@/entities/job-seeker";
import { Company } from "@/entities/company";
import { Job } from "@/entities/job";

export interface SearchResponse {
  data: Job[] | Company[] | JobSeeker[];
  total: number;
  page: number;
  pageSize: number;
}
