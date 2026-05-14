
import { detectCoachingState } from "../features/emotion/emotionalStateEngine";
import { buildAdaptiveReflection } from "../features/coaching/adaptiveCoachingEngine";

export default function HomeScreen({ playerProfile }) {
  const coachingState = detectCoachingState(playerProfile);

  const adaptive = buildAdaptiveReflection(coachingState);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Coaching Perspective</p>

        <h1>{adaptive.title}</h1>

        <p>{adaptive.reflection}</p>
      </div>

      <div className="tone-card">
        <p className="eyebrow">Current Coaching Stance</p>

        <h2>
          {coachingState.stance === "stabilising"
            ? "Calm and stabilising"
            : coachingState.stance === "reinforcing"
            ? "Reinforcing progress"
            : "Gently challenging"}
        </h2>

        <p>{coachingState.tone}</p>
      </div>

      <div className="reflection-card">
        <p className="eyebrow">What The Round Suggested</p>

        <p>
          Confidence is recovering more quickly after mistakes, which is allowing stronger golf to stay present for longer stretches of the round.
        </p>
      </div>

      <div className="focus-card">
        <p className="eyebrow">Next Coaching Focus</p>

        <h2>
          Let the stronger holes influence the score for longer
        </h2>

        <p>
          Your next scoring improvement is likely to come from staying emotionally neutral after setbacks rather than chasing recovery golf.
        </p>
      </div>
    </div>
  );
}
