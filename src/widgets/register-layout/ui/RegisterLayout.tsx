import { SignupHero } from "./RegisterHero";
import { SignupForm } from "./RgisterForm";

export function RegisterLayout() {
  return (
    <div className="flex flex-col lg:flex-row">
      <SignupHero />
      <SignupForm />
    </div>
  );
}
