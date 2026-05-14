
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import CourseSetupScreen from "./screens/CourseSetupScreen";
import CaptureRoundScreen from "./screens/CaptureRoundScreen";
import RoundCompleteScreen from "./screens/RoundCompleteScreen";
import PracticeScreen from "./screens/PracticeScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [screen, setScreen] = useState("home");

  const [roundData, setRoundData] = useState({
    course: "Sunningdale",
    tees: "White",
    holes: [],
    scoreHistory: [84, 82, 81, 79]
  });

  const startRound = (course, tees) => {
    setRoundData(prev => ({
      ...prev,
      course,
      tees,
      holes: []
    }));

    setScreen("capture");
  };

  const completeRound = (holes) => {
    const totalScore = holes.reduce((sum, h) => sum + h.score, 0);

    setRoundData(prev => ({
      ...prev,
      holes,
      scoreHistory: [...prev.scoreHistory, totalScore]
    }));

    setScreen("complete");
  };

  return (
    <div className="app-shell">
      {screen === "home" && (
        <HomeScreen roundData={roundData} onStart={() => setScreen("setup")} />
      )}

      {screen === "setup" && (
        <CourseSetupScreen onStart={startRound} />
      )}

      {screen === "capture" && (
        <CaptureRoundScreen onComplete={completeRound} />
      )}

      {screen === "complete" && (
        <RoundCompleteScreen roundData={roundData} />
      )}

      {screen === "practice" && (
        <PracticeScreen />
      )}

      <BottomNav onNavigate={setScreen} />
    </div>
  );
}
