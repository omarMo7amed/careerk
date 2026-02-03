import { ApplicantItemProps } from "../types/SignupFormType";

export function TopApplicantsCard() {
  return (
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
        <ApplicantItem
          initials="AK"
          title="Senior Developer"
          details="5 years exp • React, Node.js"
          score="94%"
          color="green"
        />
        <ApplicantItem
          initials="SM"
          title="Full Stack Dev"
          details="3 years exp • Vue, Python"
          score="89%"
          color="blue"
        />
      </div>
    </div>
  );
}

function ApplicantItem({
  initials,
  title,
  details,
  score,
  color,
}: ApplicantItemProps) {
  const colors = {
    green: "from-green-400 to-green-600 text-green-400",
    blue: "from-blue-400 to-blue-600 text-blue-400",
  };
  return (
    <div className="bg-gray-800/50 rounded-lg p-3 flex items-center gap-3 border border-gray-700/30">
      <div
        className={`w-10 h-10 bg-gradient-to-br ${colors[color]} rounded-full flex items-center justify-center text-white font-bold`}
      >
        {initials}
      </div>
      <div className="flex-1">
        <h4 className="text-white text-sm font-semibold">{title}</h4>
        <p className="text-xs text-gray-400">{details}</p>
      </div>
      <span className={`text-xs font-bold ${colors[color]}`}>{score}</span>
    </div>
  );
}
