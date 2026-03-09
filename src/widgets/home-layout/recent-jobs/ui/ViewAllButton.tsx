import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function ViewAllButton({
  isJobsInView,
}: {
  isJobsInView: boolean;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isJobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link
          className="bg-bg-primary border border-border w-48 inline-flex items-center gap-2 justify-center rounded-full  py-4 text-lg font-medium text-foreground hover:bg-bg-primary/80 transition-colors duration-300"
          href="/jobs"
        >
          View All Jobs
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
