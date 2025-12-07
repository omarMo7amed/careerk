import React from "react";
import { Button } from "@/shared/ui/Button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Career</h1>
          <p className="text-xl mb-8 text-blue-100">
            Connect with top companies and discover opportunities that match
            your skills and aspirations.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
