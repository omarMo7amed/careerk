import { Job } from "@/entities/job";

export interface JobSliderProps {
  jobs: Job[];
  isInView: boolean;
  delay?: number;
}
