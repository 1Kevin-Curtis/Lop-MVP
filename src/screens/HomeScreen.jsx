
import { identifyCurrentState } from "../features/identity/roundIdentity";
import { detectIdentityTension } from "../features/tension/identityTensionEngine";

export default function HomeScreen({ playerState }) {
  const identity = identifyCurrentState(playerState);

  const tension = detectIdentityTension(playerState);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Current Identity</p>

        <h1>{identity.identity}</h1>

        <p>{identity.summary}</p>
      </div>

      <div className="tension-card">
        <p className="eyebrow">Underlying Tension</p>

        <h2>{tension.tension}</h2>

        <p>{tension.interpretation}</p>
      </div>

      <div className="reflection-card">
        <p className="eyebrow">What Changed Recently</p>

        <p>
          The destructive holes are appearing less often, but confidence is still fluctuating after mistakes rather than staying composed through the round.
        </p>
      </div>

      <div className="focus-card">
        <p className="eyebrow">Emerging Focus</p>

        <h2>
          Trust the calmer golf for longer stretches
        </h2>

        <p>
          Your next scoring leap is likely to come from emotional stability rather than technical swing changes.
        </p>
      </div>
    </div>
  );
}
