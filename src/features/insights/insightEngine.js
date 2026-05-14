
export function generateInsights(roundData) {
  const holes = roundData.holes;

  const penalties = holes.filter(h => h.penalty).length;
  const girCount = holes.filter(h => h.gir).length;
  const fairways = holes.filter(h => h.fairwayHit).length;

  const insights = [];

  if (fairways >= 8) {
    insights.push({
      title: "Driving Consistency Improved",
      text:
        "Accurate tee shots created more playable approach positions throughout the round."
    });
  }

  if (girCount < 6) {
    insights.push({
      title: "Approach Play Limiting Scores",
      text:
        "Missed greens reduced scoring opportunities despite stable tee shots."
    });
  }

  if (penalties >= 2) {
    insights.push({
      title: "Penalty Strokes Cost Momentum",
      text:
        "High-cost mistakes prevented stronger stretches of golf from lowering your score."
    });
  }

  return insights;
}
