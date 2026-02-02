import { Upload, Target, TrendingUp, Award } from "lucide-react";
import { Benefit } from "../types/types";

export const jobSeekerBenefits: Benefit[] = [
  {
    icon: Upload,
    title: "Smart CV Analysis",
    description:
      "Upload your CV once and let our AI match you with the perfect opportunities.",
  },
  {
    icon: Target,
    title: "Personalized Matches",
    description:
      "Get job recommendations tailored to your skills, experience, and preferences.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Track your applications and get insights to improve your job search strategy.",
  },
  {
    icon: Award,
    title: "Interview Success",
    description:
      "Access curated interview questions and problem-solving resources.",
  },
];
