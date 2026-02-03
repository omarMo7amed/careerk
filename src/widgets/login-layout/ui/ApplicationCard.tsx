export function ApplicationsCard() {
  return (
    <div className="card-float-3 absolute top-[80px] left-[40px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm">Applications</h3>
        <span className="text-xs text-gray-400">12 Active</span>
      </div>

      <div className="space-y-3">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="h-2 bg-gradient-to-r from-primary to-primary-dark rounded w-3/4 mb-2" />
          <div className="h-2 bg-gray-700 rounded w-1/2" />
        </div>

        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="h-2 bg-gray-700 rounded w-2/3 mb-2" />
          <div className="h-2 bg-gray-700 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}
