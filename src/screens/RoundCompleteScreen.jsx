
import { generateInsights } from "../features/insights/insightEngine";

export default function RoundCompleteScreen({ roundData }) {
  const insights = generateInsights(roundData);

  const totalScore = roundData.holes.reduce(
    (sum, hole) => sum + hole.score,
    0
  );

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Round Complete</p>
        <h1>{totalScore}</h1>
        <p>
          {roundData.course} • {roundData.tees} Tees
        </p>
      </div>

      {insights.map((insight, index) => (
        <div className="insight-card" key={index}>
          <h3>{insight.title}</h3>
          <p>{insight.text}</p>
        </div>
      ))}

      <div className="next-round-card">
        <p className="eyebrow">Next Round Objective</p>
        <h2>Convert more scoring chances</h2>
        <p>
          Your recent rounds suggest approach play is improving faster than putting conversion.
        </p>
      </div>
    </div>
  );
}
