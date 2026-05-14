
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const coachingMemory = {
    previousFocuses: [
      "Recovery golf",
      "Driving stability",
      "Approach control"
    ],

    emotionalTrend: "stabilising",

    confidenceLevel: "medium",

    scoringPattern: "improving",

    latestIdentity: "Controlled Golf"
  };

  return <HomeScreen coachingMemory={coachingMemory} />;
}
