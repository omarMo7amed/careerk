import { SearchBar } from "@/features/search";

export function HeroSection() {
  return (
    <section
      className="relative border-b border-border py-12 "
      style={{
        backgroundImage: "url(/jobs-page/jobs-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto p-4 text-center">
        <h1 className="text-white mb-4">Find Your Dream Job</h1>
        <p className="text-lg text-white mb-8">
          Explore thousands of job opportunities and take the next step in your
          career.
        </p>
      </div>

      <SearchBar type="job" searchPlaceholder="Job Title" />
    </section>
  );
}
