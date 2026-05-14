
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const playerSignals = [
    {
      type: "driving",
      importance: 72,
      confidence: 81,
      trend: "improving",
      narrative:
        "Tee shot control is no longer putting constant pressure on the rest of the round."
    },
    {
      type: "approach",
      importance: 94,
      confidence: 76,
      trend: "blocking",
      narrative:
        "Approach distance control is now the clearest separator between good rounds and scoring rounds."
    },
    {
      type: "putting",
      importance: 63,
      confidence: 58,
      trend: "emerging",
      narrative:
        "Pace control is stabilising, but scoring conversion still comes and goes under pressure."
    }
  ];

  return <HomeScreen signals={playerSignals} />;
}
