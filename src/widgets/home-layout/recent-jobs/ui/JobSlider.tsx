"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { JobCardJobseeker } from "@/entities/job";
import { JobSliderProps } from "../types/types";

export function JobSlider({ jobs, isInView, delay = 0.4 }: JobSliderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className="relative overflow-hidden"
    >
      <div className="pl-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          freeMode={true}
          className="overflow-visible!"
        >
          {jobs.map((job) => (
            <SwiperSlide key={job.id} className="w-[350px]!">
              <JobCardJobseeker job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
