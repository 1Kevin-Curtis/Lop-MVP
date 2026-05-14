
import { buildPlayerModel } from "../features/models/performanceModel";
import { interpretPlayerModel } from "../features/interpretation/interpretationEngine";

export default function HomeScreen() {
  const model = buildPlayerModel();

  const narratives = interpretPlayerModel(model);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Current Story</p>

        <h1>
          Your golf is becoming more playable under pressure
        </h1>

        <p>
          Stronger stretches of golf are now appearing more consistently from round to round.
        </p>
      </div>

      {narratives.map((item, index) => (
        <div className="story-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      <div className="focus-card">
        <p className="eyebrow">Next Focus</p>

        <h2>
          Tighten approach distance control from scoring range
        </h2>

        <p>
          Your recent rounds suggest this is now the clearest path to lower scores.
        </p>
      </div>
    </div>
  );
}
