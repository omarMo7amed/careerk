export function JobCard() {
  return (
    <div className="card-float-2 absolute top-[40px] left-[20px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
      <h3 className="text-white font-semibold text-sm mb-1">
        Senior Developer
      </h3>
      <p className="text-xs text-gray-400 mb-4">Tech Corp • Remote</p>

      <div className="flex gap-2 mb-4">
        <span className="px-2 py-1 bg-primary/20 text-primary-dark text-xs rounded">
          Full-time
        </span>
        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
          $120k–150k
        </span>
      </div>

      <span className="text-xs text-gray-400">85% Match</span>
    </div>
  );
}
