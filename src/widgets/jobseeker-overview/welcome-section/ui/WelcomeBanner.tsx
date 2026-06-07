"use client";

import { Avatar } from "./Avatar";

interface WelcomeBannerProps {
  firstName?: string;
  profileImageUrl?: string | null;
}

export function WelcomeBanner({
  firstName,
  profileImageUrl,
}: WelcomeBannerProps) {
  return (
    <div className="bg-gradient-to-br from-primary via-[#0466c8] to-[#4895ef] rounded-xl p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome Back, {firstName || "Guest"}!
          </h1>
          <p className="text-white">Ready to find your dream job?</p>
        </div>

        <Avatar profileImageUrl={profileImageUrl} firstName={firstName} />
      </div>
    </div>
  );
}
