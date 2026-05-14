
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const playerState = {
    ballStrikingTrend: "improving",
    scoringTrend: "flat",
    emotionalRecovery: "better",
    finishingHoles: "fragile",
    signalStrength: "emerging"
  };

  return <HomeScreen playerState={playerState} />;
}
