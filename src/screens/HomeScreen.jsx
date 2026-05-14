
import { analyseRoundMomentum } from "../features/momentum/roundMomentumEngine";
import { buildReflectiveContinuity } from "../features/reflection/reflectiveContinuityEngine";

export default function HomeScreen({ roundMoments }) {
  const reflections = analyseRoundMomentum(roundMoments);

  const continuity = buildReflectiveContinuity(reflections);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Reflective Continuity</p>

        <h1>{continuity.title}</h1>

        <p>{continuity.summary}</p>
      </div>

      {reflections.map((reflection, index) => (
        <div className="reflection-card" key={index}>
          <p className="eyebrow">Momentum Reflection</p>

          <h2>{reflection.title}</h2>

          <p>{reflection.text}</p>
        </div>
      ))}

      <div className="continuity-card">
        <p className="eyebrow">Emotional Continuity</p>

        <p>{continuity.continuity}</p>
      </div>

      <div className="focus-card">
        <p className="eyebrow">Emerging Direction</p>

        <h2>
          Let the calmer stretches survive momentum swings
        </h2>

        <p>
          The next scoring improvements may come from preserving emotional composure for longer after setbacks rather than forcing recovery golf.
        </p>
      </div>
    </div>
  );
}
