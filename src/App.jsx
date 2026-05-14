
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import HomeScreen from "./screens/HomeScreen";
import CaptureRoundScreen from "./screens/CaptureRoundScreen";
import RoundCompleteScreen from "./screens/RoundCompleteScreen";

export default function App() {
  const [screen, setScreen] = useState("home");

  const [rounds, setRounds] = useLocalStorage("loop-rounds", [
    {
      id: 1,
      score: 84,
      holes: []
    },
    {
      id: 2,
      score: 82,
      holes: []
    },
    {
      id: 3,
      score: 81,
      holes: []
    }
  ]);

  const [latestRound, setLatestRound] = useState(null);

  const saveRound = (holes) => {
    const score = holes.reduce((sum, h) => sum + h.score, 0);

    const newRound = {
      id: Date.now(),
      score,
      date: new Date().toISOString(),
      holes
    };

    setRounds(prev => [...prev, newRound]);
    setLatestRound(newRound);

    setScreen("complete");
  };

  return (
    <div>
      {screen === "home" && (
        <HomeScreen
          rounds={rounds}
          onStart={() => setScreen("capture")}
        />
      )}

      {screen === "capture" && (
        <CaptureRoundScreen onComplete={saveRound} />
      )}

      {screen === "complete" && (
        <RoundCompleteScreen
          latestRound={latestRound}
          onHome={() => setScreen("home")}
        />
      )}
    </div>
  );
}
