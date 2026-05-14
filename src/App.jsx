
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const playerState = {
    scoreTrend: "flat",
    ballStriking: "improving",
    puttingConfidence: "fragile",
    penalties: "reduced",
    volatility: "moderate"
  };

  return <HomeScreen playerState={playerState} />;
}
