"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { JobSlider } from "./JobSlider";
import ViewAllButton from "./ViewAllButton";
import { useJobsQuery } from "@/entities/job";

export default function RecentJobsSection() {
  const jobsSectionRef = useRef<HTMLDivElement>(null);
  const isJobsInView = useInView(jobsSectionRef, {
    once: true,
    margin: "-100px",
  });

  const { jobs } = useJobsQuery({ enabled: isJobsInView });
  const sliderJobs = (jobs ?? []).slice(8, 16);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          ref={jobsSectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isJobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Recent Jobs You Actually Want
          </h2>
        </motion.div>
      </div>

      {/* Job Slider - Full Width */}
      <div>
        <JobSlider jobs={sliderJobs} isInView={isJobsInView} delay={0.4} />
      </div>

      <ViewAllButton
        jobsLength={(jobs ?? []).length}
        isJobsInView={isJobsInView}
      />
    </section>
  );
}
