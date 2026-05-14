
import { buildProgressionStory } from "../features/progress/progressionEngine";

export default function HomeScreen({ roundData, onStart }) {
  const story = buildProgressionStory(roundData.scoreHistory);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Momentum</p>
        <h1>{story.momentum}</h1>
        <p>{story.summary}</p>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <span>Confidence</span>
          <strong>{story.confidence}%</strong>
        </div>

        <div className="metric-card">
          <span>Current Focus</span>
          <strong>{story.focus}</strong>
        </div>
      </div>

      <button className="primary-button" onClick={onStart}>
        Start New Round
      </button>
    </div>
  );
}
