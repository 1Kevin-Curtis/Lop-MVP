
import { buildSkillModel } from "../features/rounds/volatilityModel";
import { generateVolatilityNarratives } from "../features/insights/volatilityNarratives";

export default function HomeScreen({ rounds }) {
  const model = buildSkillModel(rounds);

  const narratives = generateVolatilityNarratives(model);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Consistency Model</p>
        <h1>{model.stability}</h1>
        <p>
          Average Score: {model.averageScore} • Volatility: {model.volatility}
        </p>
      </div>

      {narratives.map((item, index) => (
        <div className="insight-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      <div className="metric-card">
        <span>Confidence Signal</span>
        <strong>
          {model.stability === "Stable"
            ? "High Confidence"
            : model.stability === "Emerging"
            ? "Developing Confidence"
            : "Low Confidence"}
        </strong>
      </div>
    </div>
  );
}
