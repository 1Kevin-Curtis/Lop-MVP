
import { buildPerformanceModel } from "../features/rounds/performanceModel";
import { buildMomentum } from "../features/progress/momentumEngine";
import { generateNarratives } from "../features/insights/causalityEngine";

export default function HomeScreen({ rounds, onStart }) {
  const model = buildPerformanceModel(rounds);
  const momentum = buildMomentum(rounds);
  const narratives = generateNarratives(model);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Momentum</p>
        <h1>{momentum.momentum}</h1>
        <p>{momentum.summary}</p>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <span>Driving</span>
          <strong>{model.driving}</strong>
        </div>

        <div className="metric-card">
          <span>Approach</span>
          <strong>{model.approach}</strong>
        </div>

        <div className="metric-card">
          <span>Putting</span>
          <strong>{model.putting}</strong>
        </div>

        <div className="metric-card">
          <span>Confidence</span>
          <strong>{momentum.confidence}%</strong>
        </div>
      </div>

      {narratives.map((item, index) => (
        <div className="insight-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      <button className="primary-button" onClick={onStart}>
        Start New Round
      </button>
    </div>
  );
}
