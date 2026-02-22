import { Button } from "@/shared";
import Link from "next/link";

function NavButtons() {
  return (
    <div className="flex items-center gap-5">
      <a
        href="/dashboard/jobseeker/overview"
        className="text-gray-700 hover:text-primary font-semibold transition-colors"
      >
        Login
      </a>
      <Button
        size="md"
        variant="primary"
        className="hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <Link className="text-white" href="/auth/signup">
          Sign Up
        </Link>
      </Button>
    </div>
  );
}

export default NavButtons;
