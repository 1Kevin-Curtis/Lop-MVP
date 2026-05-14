
export function generateVolatilityNarratives(model) {
  const narratives = [];

  if (model.stability === "Stable") {
    narratives.push({
      title: "Scoring Stability Improving",
      text:
        "Recent rounds are becoming more predictable with fewer high-cost score swings."
    });
  }

  if (model.stability === "Emerging") {
    narratives.push({
      title: "Positive Trends Emerging",
      text:
        "Lower scoring patterns are beginning to appear more regularly, but consistency is still developing."
    });
  }

  if (model.stability === "Volatile") {
    narratives.push({
      title: "Performance Volatility Limiting Progress",
      text:
        "Strong stretches of golf are still being offset by a small number of high-impact mistakes."
    });
  }

  return narratives;
}
