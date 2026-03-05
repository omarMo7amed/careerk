export function getScoreColor(score: number | null) {
  if (score == null) return "text-text-muted border-border";
  if (score >= 90) return "text-success bg-success/10 border-success/20";
  if (score >= 80) return "text-primary bg-primary/10 border-primary/20";
  return "text-warning bg-warning/10 border-warning/20";
}
