import Card from "@/shared/ui/Card";
import { CardHeader } from "@/shared/ui/CardHeader";
import { TrendingUp } from "lucide-react";

const jobs = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Active",
    applicants: 47,
    skills: ["React", "JavaScript", "TypeScript"],
    description:
      "We are seeking a highly skilled and motivated Senior React Developer to join our dynamic team. As a Senior React Developer, you will play a crucial role in designing, developing, and maintaining our cutting-edge software solutions. You will collaborate with cross-functional teams to deliver high-quality products that meet the needs of our clients.",
    responsibilities: [
      "Design and develop scalable and robust software solutions using React and modern JavaScript",
      "Write clean, well-documented, and efficient code following best practices",
      "Collaborate with product managers and designers to define and implement new features",
      "Participate in code reviews and provide constructive feedback to team members",
      "Mentor junior developers and contribute to team knowledge sharing",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or a related field",
      "5+ years of experience in software development with focus on React",
      "Strong proficiency in JavaScript, TypeScript, and modern web technologies",
      "Experience with state management libraries (Redux, MobX, or similar)",
      "Excellent problem-solving skills and attention to detail",
    ],
    salary: "$130k - $150k",
    workArrangement: "Remote",
    experienceLevel: "Senior Level",
    deadline: "2 weeks",
    companyInfo:
      "TechCorp Inc. is a leading provider of innovative software solutions, empowering businesses to achieve their goals through technology. We are passionate about creating a positive and collaborative work environment.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applicants: 23,
    skills: ["Product Strategy", "Agile", "Analytics"],
    description:
      "We are looking for an experienced Product Manager to lead our product development initiatives. You will work closely with engineering, design, and business teams to define product vision and strategy.",
    responsibilities: [
      "Define product roadmap and prioritize features based on business value",
      "Conduct market research and competitive analysis",
      "Work with engineering teams to deliver products on time",
      "Analyze product metrics and user feedback to drive improvements",
    ],
    requirements: [
      "Bachelor's degree in Business, Computer Science, or related field",
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with Agile methodologies",
    ],
    salary: "$110k - $130k",
    workArrangement: "Remote",
    experienceLevel: "Mid Level",
    deadline: "3 weeks",
    companyInfo:
      "TechCorp Inc. is a leading provider of innovative software solutions, empowering businesses to achieve their goals through technology. We are passionate about creating a positive and collaborative work environment.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Paused",
    applicants: 31,
    skills: ["AWS", "Docker", "Kubernetes"],
    description:
      "Join our infrastructure team as a DevOps Engineer to build and maintain scalable cloud infrastructure. You will work on automation, monitoring, and deployment pipelines.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure on AWS",
      "Implement monitoring and alerting systems",
      "Collaborate with development teams on deployment strategies",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years of DevOps experience",
      "Strong knowledge of AWS services",
      "Experience with containerization and orchestration",
    ],
    salary: "$120k - $140k",
    workArrangement: "Hybrid",
    experienceLevel: "Senior Level",
    deadline: "1 month",
    companyInfo:
      "TechCorp Inc. is a leading provider of innovative software solutions, empowering businesses to achieve their goals through technology. We are passionate about creating a positive and collaborative work environment.",
  },
];
function TopPerformingJobs() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="text-lg font-bold">Top Performing Jobs</h3>
      </div>
      <Card className="flex-1">
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold">{job.title}</h6>
                <span className="text-sm font-medium text-primary">
                  {job.applicants} applicants
                </span>
              </div>
              <div className="w-full bg-bg-muted rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min((job.applicants / 50) * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-text-secondary">
                <span>{job.department}</span>
                <span>{job.location}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default TopPerformingJobs;
