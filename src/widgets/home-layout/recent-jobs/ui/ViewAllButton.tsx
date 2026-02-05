import { Button } from "@/shared";
import { motion } from "framer-motion";
export default function ViewAllButton({
  jobsLength,
  isJobsInView,
}: {
  jobsLength: number;
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
        <Button
          variant="primary"
          onClick={() => {}}
          size="lg"
          className="rounded-full"
        >
          View All {jobsLength * 10}+ Jobs
        </Button>
      </motion.div>
    </div>
  );
}
