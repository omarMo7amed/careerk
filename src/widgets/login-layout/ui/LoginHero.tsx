export function LoginHero() {
  return (
    <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-screen overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0353a4] via-[#0466c8] to-[#4895ef]" />

      {/* Animated floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-[#4186F6]/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute bottom-[15%] left-[25%] w-80 h-80 bg-white/15 rounded-full blur-3xl animate-float-medium" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
        {/* Top Section: Headline */}
        <div className="text-white">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Find Your Perfect
            <br />
            Career Match
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            Connect with top companies and discover opportunities that align
            with your skills and aspirations.
          </p>
        </div>

        {/* Center: Mockup Cards */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="mockup-card relative w-full max-w-sm">
            {/* Card 3 (Back) */}
            <div className="card-float-3 absolute top-[80px] left-[40px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-sm">
                  Applications
                </h3>
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

            {/* Card 2 (Middle) */}
            <div className="card-float-2 absolute top-[40px] left-[20px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">
                    Senior Developer
                  </h3>
                  <p className="text-xs text-gray-400">Tech Corp • Remote</p>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/20 text-primary-dark text-xs rounded">
                  Full-time
                </span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                  $120k-150k
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-900" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-gray-900" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-gray-900" />
                </div>
                <span className="text-xs text-gray-400">85% Match</span>
              </div>
            </div>

            {/* Card 1 (Front) */}
            <div className="card-float-1 relative w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Job Matches</h3>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg p-4 border border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                      💼
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-semibold">
                        Product Manager
                      </h4>
                      <p className="text-xs text-gray-400">StartupXYZ</p>
                    </div>
                    <span className="text-green-400 text-xs font-semibold">
                      92%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                      🎨
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-semibold">
                        UI/UX Designer
                      </h4>
                      <p className="text-xs text-gray-400">Creative Co</p>
                    </div>
                    <span className="text-blue-400 text-xs font-semibold">
                      88%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-semibold">
                        Data Analyst
                      </h4>
                      <p className="text-xs text-gray-400">DataCorp</p>
                    </div>
                    <span className="text-yellow-400 text-xs font-semibold">
                      85%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
