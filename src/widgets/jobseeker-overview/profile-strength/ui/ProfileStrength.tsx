import { Button } from "@/shared";
import { calculateProfileProgress } from "../lib/calculateProgress";
import { ProfileTasks } from "../mock-data/ProfileData";
import CircularProgress from "./CircularProgress";
import TaskList from "./TaskList";
import { ArrowRight } from "lucide-react";

function ProfileStrength() {
  const percentage = calculateProfileProgress(ProfileTasks);
  return (
    <section className="bg-white rounded-lg p-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Profile Strength</h2>
        <p className="text-text-secondary text-sm mb-4">
          Complete your profile to increase your chances of getting noticed by
          employers.
        </p>

        <CircularProgress percentage={percentage} />

        <TaskList tasks={ProfileTasks} />

        <Button className="w-full group">
          <span>Complete Profile</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-xs text-blue-700">
            <span className="font-bold">Pro Tip:</span> Profiles with LinkedIn
            connections get 3x more views
          </p>
        </div>
      </div>
    </section>
  );
}

export { ProfileStrength };
