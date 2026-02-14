import { Candidate } from "@/entities/candidate";
import { Company } from "@/entities/company";
import { Job } from "@/entities/job";

export interface SearchResponse {
  data: Job[] | Company[] | Candidate[];
  total: number;
  page: number;
  pageSize: number;
}
