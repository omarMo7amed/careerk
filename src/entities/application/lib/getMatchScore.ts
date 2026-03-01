export const getMatchScoreColor = (score: number) => {
  if (score >= 90) return "text-green-600 bg-green-50 border-green-200";
  if (score >= 75) return "text-blue-600 bg-blue-50 border-blue-200";
  if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
  return "text-orange-600 bg-orange-50 border-orange-200";
};
