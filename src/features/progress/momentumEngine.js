
export function buildMomentum(rounds) {
  const scores = rounds.map(r => r.score);
  const latest = scores[scores.length - 1];

  const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  const improving = latest <= average;

  return {
    momentum: improving ? "Building" : "Volatile",
    confidence: improving ? 74 : 49,
    summary: improving
      ? "Your scoring floor is stabilising across recent rounds."
      : "Large scoring swings are still limiting consistency."
  };
}
