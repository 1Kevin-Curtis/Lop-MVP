
import { prioritiseSignals } from "../features/signals/prioritisationEngine";
import { buildCoachingStory } from "../features/storytelling/coachingNarratives";

export default function HomeScreen({ signals }) {
  const prioritised = prioritiseSignals(signals);

  const story = buildCoachingStory(prioritised.primary);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Current Story</p>

        <h1>{story.title}</h1>

        <p>{story.summary}</p>
      </div>

      <div className="primary-signal-card">
        <p className="eyebrow">Most Influential Pattern Right Now</p>

        <h2>
          {prioritised.primary.type === "approach"
            ? "Approach play is becoming the scoring separator"
            : prioritised.primary.type === "driving"
            ? "Tee shot control is reshaping the round"
            : "Putting confidence is beginning to stabilise"}
        </h2>

        <p>{prioritised.primary.narrative}</p>
      </div>

      <div className="timeline-section">
        <p className="eyebrow">Secondary Signals</p>

        {prioritised.secondary.map((signal, index) => (
          <div className="secondary-card" key={index}>
            <h3>{signal.type}</h3>

            <p>{signal.narrative}</p>
          </div>
        ))}
      </div>

      <div className="focus-card">
        <p className="eyebrow">Emerging Focus</p>

        <h2>
          Turn safer approach play into more realistic birdie chances
        </h2>

        <p>
          Your scoring patterns suggest the next improvement now comes from precision rather than damage limitation.
        </p>
      </div>
    </div>
  );
}
