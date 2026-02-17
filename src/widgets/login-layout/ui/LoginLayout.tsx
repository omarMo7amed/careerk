import { LoginHero } from "./LoginHero";
import { LoginForm } from "./LoginForm";

export function LoginLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-text-secondary">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
