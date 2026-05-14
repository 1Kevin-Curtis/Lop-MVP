
export function generateNarratives(model) {
  const insights = [];

  if (model.driving > model.approach) {
    insights.push({
      title: "Tee Shot Stability Emerging",
      text:
        "Driving consistency is improving faster than approach play and creating more playable scoring opportunities."
    });
  }

  if (model.approach < 55) {
    insights.push({
      title: "Approach Play Now The Scoring Ceiling",
      text:
        "You are giving away scoring opportunities through inconsistent green hitting from approach distances."
    });
  }

  if (model.putting < 65) {
    insights.push({
      title: "Putting Preventing Score Conversion",
      text:
        "Recent rounds suggest enough birdie opportunities are being created, but putts are not converting consistently."
    });
  }

  return insights;
}
