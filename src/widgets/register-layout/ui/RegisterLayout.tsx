import { SignupHero } from "./RegisterHero";
import { SignupForm } from "./RgisterForm";

export function RegisterLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-text-secondary">
      <SignupHero />
      <SignupForm />
    </div>
  );
}
