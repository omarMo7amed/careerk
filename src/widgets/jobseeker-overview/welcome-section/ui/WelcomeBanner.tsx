"use client";

import { useAuth } from "@/features/auth";
import { useBaseProfile } from "@/entities/job-seeker";
import { Avatar } from "./Avatar";

function WelcomeBanner() {
  const { token } = useAuth();
  const { jobSeekerBase } = useBaseProfile({ token });
  return (
    <div className="bg-linear-to-br from-primary via-[#0466c8] to-[#4895ef] rounded-xl p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome Back, {jobSeekerBase?.firstName}!
          </h1>
          <p className="text-white">Ready to find your dream job?</p>
        </div>

        <Avatar
          profileImageUrl={jobSeekerBase?.profileImageUrl}
          firstName={jobSeekerBase?.firstName}
        />
      </div>
    </div>
  );
}

export { WelcomeBanner };
