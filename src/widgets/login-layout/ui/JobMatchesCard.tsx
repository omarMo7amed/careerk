import { MatchItemProps } from "../types/loginFormTypes";

export function JobMatchesCard() {
  return (
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
        <MatchItem
          emoji="💼"
          title="Product Manager"
          company="StartupXYZ"
          score="92%"
        />
        <MatchItem
          emoji="🎨"
          title="UI/UX Designer"
          company="Creative Co"
          score="88%"
        />
        <MatchItem
          emoji="⚡"
          title="Data Analyst"
          company="DataCorp"
          score="85%"
        />
      </div>
    </div>
  );
}

function MatchItem({ emoji, title, company, score }: MatchItemProps) {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg p-4 border border-primary/30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
          {emoji}
        </div>
        <div className="flex-1">
          <h4 className="text-white text-sm font-semibold">{title}</h4>
          <p className="text-xs text-gray-400">{company}</p>
        </div>
        <span className="text-green-400 text-xs font-semibold">{score}</span>
      </div>
    </div>
  );
}
