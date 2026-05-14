
import { buildCoachingMemory } from "../features/memory/coachingMemoryEngine";
import { buildCoachingContinuity } from "../features/coaching/coachingContinuity";

export default function HomeScreen({ coachingMemory }) {
  const memoryEngine = buildCoachingMemory(coachingMemory);

  const coaching = buildCoachingContinuity(memoryEngine);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Coaching Memory</p>

        <h1>{coaching.title}</h1>

        <p>{coaching.summary}</p>
      </div>

      <div className="memory-card">
        <p className="eyebrow">Progression Memory</p>

        <p>{coaching.continuity}</p>
      </div>

      <div className="emotion-card">
        <p className="eyebrow">Emotional Progression</p>

        <p>{coaching.emotional}</p>
      </div>

      <div className="restraint-card">
        <p className="eyebrow">Coaching Restraint</p>

        <p>{coaching.restraint}</p>
      </div>

      <div className="focus-card">
        <p className="eyebrow">Current Direction</p>

        <h2>
          Allow the calmer golf to influence more of the round
        </h2>

        <p>
          The next scoring gains are increasingly likely to come from emotional consistency rather than technical recovery patterns.
        </p>
      </div>
    </div>
  );
}
