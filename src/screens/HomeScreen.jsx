
import { identifyRound } from "../features/identity/roundIdentityEngine";
import { buildIdentityTimeline } from "../features/storytelling/identityNarratives";

export default function HomeScreen({ rounds }) {
  const identifiedRounds = rounds.map(round => ({
    ...round,
    ...identifyRound(round)
  }));

  const timeline = buildIdentityTimeline(identifiedRounds);

  const latest = identifiedRounds[identifiedRounds.length - 1];

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Current Round Identity</p>

        <h1>{latest.identity}</h1>

        <p>{latest.summary}</p>
      </div>

      <div className="timeline-section">
        <p className="eyebrow">Recent Progression</p>

        {timeline.map((round, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-header">
              <span>{round.label}</span>

              <span className="score-pill">
                {round.score}
              </span>
            </div>

            <h3>{round.identity}</h3>

            <p>{round.summary}</p>
          </div>
        ))}
      </div>

      <div className="focus-card">
        <p className="eyebrow">Emerging Shift</p>

        <h2>
          Your rounds are becoming less reactive and more controlled
        </h2>

        <p>
          The destructive holes are appearing less often, which is allowing stronger golf to influence the score more consistently.
        </p>
      </div>
    </div>
  );
}
