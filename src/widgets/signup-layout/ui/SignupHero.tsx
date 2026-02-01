export function SignupHero() {
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
        <div className="text-bg-surface">
          <h2 className="text-bg-surface text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            All Job Sites,
            <br />
            One Smart Search
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            Upload your CV and discover perfectly matched opportunities from
            every major job platform.
          </p>
        </div>

        {/* Center: Mockup Cards */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="mockup-card relative w-full max-w-sm">
            {/* Card 3 (Back) - Interview Prep */}
            <div className="card-float-3 absolute top-[80px] left-[40px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-sm">
                  Interview Preparation
                </h3>
                <span className="text-xs text-purple-400">150+ Questions</span>
              </div>
              <div className="space-y-3">
                <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-lg">💬</div>
                    <span className="text-xs text-white font-medium">
                      Common Questions
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">
                    &quot;Tell me about yourself...&quot;
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-lg">🎯</div>
                    <span className="text-xs text-gray-300">
                      Technical Questions
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    &quot;Explain your approach to...&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 (Middle) - Top Applicants for Companies */}
            <div className="card-float-2 absolute top-[40px] left-[20px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Top Applicants</h3>
                  <span className="text-xs text-blue-400">For Companies</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  Best matches for your position
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      AK
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-semibold">
                        Senior Developer
                      </h4>
                      <p className="text-xs text-gray-400">
                        5 years exp • React, Node.js
                      </p>
                    </div>
                    <span className="text-green-400 text-xs font-bold">
                      94%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      SM
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-semibold">
                        Full Stack Dev
                      </h4>
                      <p className="text-xs text-gray-400">
                        3 years exp • Vue, Python
                      </p>
                    </div>
                    <span className="text-blue-400 text-xs font-bold">89%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 1 (Front) - CV Upload & Job Aggregation */}
            <div className="card-float-1 relative w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">
                  All Jobs in One Place
                </h3>
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
                    <h4 className="text-white text-sm font-semibold">
                      Upload CV
                    </h4>
                    <p className="text-xs text-gray-400">Get instant matches</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-gray-400 mb-2">
                  Jobs aggregated from:
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                    LinkedIn
                  </div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                    Indeed
                  </div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                    Glassdoor
                  </div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                    Monster
                  </div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                    +More
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
