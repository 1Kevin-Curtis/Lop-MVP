
import { buildTimeline } from "../features/timeline/timelineEngine";
import { buildProgressionNarrative } from "../features/interpretation/progressionNarratives";

export default function HomeScreen({ rounds }) {
  const timeline = buildTimeline(rounds);

  const narrative = buildProgressionNarrative(rounds);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Progression Story</p>

        <h1>{narrative.title}</h1>

        <p>{narrative.text}</p>
      </div>

      <div className="timeline-wrapper">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker" />

            <div className="timeline-content">
              <p className="timeline-label">{item.label}</p>

              <h3>{item.focus}</h3>

              <p>{item.summary}</p>

              <span className="score-pill">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="focus-card">
        <p className="eyebrow">Emerging Next Challenge</p>

        <h2>
          Turn strong approach play into lower scoring rounds
        </h2>

        <p>
          The next scoring leap is likely to come from converting more opportunities inside realistic birdie range.
        </p>
      </div>
    </div>
  );
}
