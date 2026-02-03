import { SignupHero } from "./SignupHero";
import { SignupForm } from "./SignupForm";

export function SignupLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-text-secondary">
      <SignupHero />
      <SignupForm />
    </div>
  );
}
