
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const playerProfile = {
    confidenceState: "fragile",
    progressionState: "improving",
    scoringTrend: "flat",
    emotionalState: "frustrated"
  };

  return <HomeScreen playerProfile={playerProfile} />;
}
