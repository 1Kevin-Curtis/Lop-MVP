
export function buildSkillModel(rounds) {
  const scores = rounds.map(r => r.score);

  const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  const variance =
    scores.reduce((sum, score) => {
      return sum + Math.pow(score - average, 2);
    }, 0) / scores.length;

  const volatility = Math.round(Math.sqrt(variance));

  let stability;

  if (volatility <= 2) {
    stability = "Stable";
  } else if (volatility <= 4) {
    stability = "Emerging";
  } else {
    stability = "Volatile";
  }

  return {
    averageScore: Math.round(average),
    volatility,
    stability
  };
}
