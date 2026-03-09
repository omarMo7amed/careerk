import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function UploadCvButton() {
  return (
    <Link
      href="/dashboard/jobseeker/cv-management"
      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
    >
      <span>Upload Your CV</span>
      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
    </Link>
  );
}
