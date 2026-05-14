
import { useState } from "react";

export default function CaptureRoundScreen({ onComplete }) {
  const [hole, setHole] = useState(1);
  const [score, setScore] = useState(4);

  const [stats, setStats] = useState({
    fairwayHit: false,
    gir: false,
    penalty: false,
    threePutt: false
  });

  const [holes, setHoles] = useState([]);

  const toggle = (key) => {
    setStats(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const saveHole = () => {
    const updated = [
      ...holes,
      {
        hole,
        score,
        ...stats
      }
    ];

    setHoles(updated);

    if (hole === 18) {
      onComplete(updated);
      return;
    }

    setHole(hole + 1);
    setScore(4);

    setStats({
      fairwayHit: false,
      gir: false,
      penalty: false,
      threePutt: false
    });
  };

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Round In Progress</p>
        <h1>Hole {hole} of 18</h1>
      </div>

      <div className="score-selector">
        <button onClick={() => setScore(Math.max(1, score - 1))}>-</button>
        <div className="score-number">{score}</div>
        <button onClick={() => setScore(score + 1)}>+</button>
      </div>

      <div className="tag-grid">
        <button
          className={stats.fairwayHit ? "active-tag" : ""}
          onClick={() => toggle("fairwayHit")}
        >
          Fairway Hit
        </button>

        <button
          className={stats.gir ? "active-tag" : ""}
          onClick={() => toggle("gir")}
        >
          GIR
        </button>

        <button
          className={stats.penalty ? "active-tag" : ""}
          onClick={() => toggle("penalty")}
        >
          Penalty
        </button>

        <button
          className={stats.threePutt ? "active-tag" : ""}
          onClick={() => toggle("threePutt")}
        >
          3 Putt
        </button>
      </div>

      <button className="primary-button" onClick={saveHole}>
        Save Hole and Continue
      </button>
    </div>
  );
}
