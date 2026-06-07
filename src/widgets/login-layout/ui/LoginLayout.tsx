import { LoginHero } from "./LoginHero";
import { LoginForm } from "./LoginForm";

export function LoginLayout() {
  return (
    <div className="flex flex-col lg:flex-row">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
