
export function buildProgressionStory(scoreHistory) {
  const latest = scoreHistory[scoreHistory.length - 1];
  const average =
    scoreHistory.reduce((sum, score) => sum + score, 0) /
    scoreHistory.length;

  const improving = latest <= average;

  return {
    momentum: improving ? "Building" : "Flat",
    confidence: improving ? 78 : 54,
    focus: improving
      ? "Birdie conversion"
      : "Penalty control",
    summary: improving
      ? "Your scoring floor is stabilising across recent rounds."
      : "Scoring volatility is still limiting progress."
  };
}
