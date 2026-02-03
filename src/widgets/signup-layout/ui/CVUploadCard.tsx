export function CVUploadCard() {
  return (
    <div className="card-float-1 relative w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">All Jobs in One Place</h3>
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg p-4 border border-primary/30 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-white text-sm font-semibold">Upload CV</h4>
            <p className="text-xs text-gray-400">Get instant matches</p>
          </div>
        </div>
      </div>

      <JobSitesList />
    </div>
  );
}

function JobSitesList() {
  const sites = ["LinkedIn", "Indeed", "Glassdoor", "Monster", "+More"];
  return (
    <div className="space-y-2">
      <div className="text-xs text-gray-400 mb-2">Jobs aggregated from:</div>
      <div className="flex flex-wrap gap-2">
        {sites.map((site) => (
          <div
            key={site}
            className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
          >
            {site}
          </div>
        ))}
      </div>
    </div>
  );
}
