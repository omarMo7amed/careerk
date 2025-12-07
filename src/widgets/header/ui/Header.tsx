import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            CareerK
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link
              href="/companies"
              className="text-gray-700 hover:text-blue-600"
            >
              Companies
            </Link>
            <Link
              href="/candidates"
              className="text-gray-700 hover:text-blue-600"
            >
              Candidates
            </Link>
            <Link href="/auth" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
