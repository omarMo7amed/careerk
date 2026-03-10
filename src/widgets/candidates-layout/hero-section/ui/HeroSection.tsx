import { SearchBar } from "@/features/search";

export function HeroSection() {
  return (
    <section
      className="relative border-b border-border py-12 "
      style={{
        backgroundImage: "url(/candidates-page/candidates-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto p-4 text-center">
        <h1 className="text-white mb-4">Find Top Talent</h1>
        <p className="text-lg text-white mb-8">
          Search and connect with the best candidates for your job openings.
        </p>
      </div>

      <SearchBar searchPlaceholder="Job Title" type="candidate" />
    </section>
  );
}
