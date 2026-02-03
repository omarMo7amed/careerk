import { PrepItemProps } from "../types/SignupFormType";

export function InterviewPrepCard() {
  return (
    <div className="card-float-3 absolute top-[80px] left-[40px] w-72 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm">
          Interview Preparation
        </h3>
        <span className="text-xs text-purple-400">150+ Questions</span>
      </div>

      <div className="space-y-3">
        <PrepItem
          emoji="💬"
          label="Common Questions"
          example='"Tell me about yourself..."'
        />
        <PrepItem
          emoji="🎯"
          label="Technical Questions"
          example='"Explain your approach to..."'
        />
      </div>
    </div>
  );
}

function PrepItem({ emoji, label, example }: PrepItemProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-lg">{emoji}</div>
        <span className="text-xs text-white font-medium">{label}</span>
      </div>
      <p className="text-xs text-gray-300">{example}</p>
    </div>
  );
}
