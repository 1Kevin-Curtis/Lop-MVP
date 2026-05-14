
import { evaluateSignalConfidence } from "../features/confidence/signalConfidenceEngine";
import { detectContradictions } from "../features/contradiction/contradictionEngine";

export default function HomeScreen({ playerState }) {
  const confidence = evaluateSignalConfidence(playerState);

  const contradictions = detectContradictions(playerState);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Current Interpretation</p>

        <h1>
          Your golf appears to be stabilising before the scores fully follow
        </h1>

        <p>
          {confidence.language}
        </p>
      </div>

      {contradictions.map((item, index) => (
        <div className="contradiction-card" key={index}>
          <p className="eyebrow">Mixed Evidence</p>

          <h2>{item.title}</h2>

          <p>{item.text}</p>
        </div>
      ))}

      <div className="restraint-card">
        <p className="eyebrow">Coaching Restraint</p>

        <p>
          It still feels slightly too early to know whether the calmer golf is becoming fully reliable under pressure.
        </p>
      </div>

      <div className="focus-card">
        <p className="eyebrow">Emerging Direction</p>

        <h2>
          Allow the steadier golf to survive momentum swings
        </h2>

        <p>
          The next improvement may come less from technical gains and more from maintaining emotional composure through unstable stretches.
        </p>
      </div>
    </div>
  );
}
