
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const rounds = [
    {
      score: 87,
      focus: "Penalty shots",
      summary: "Penalty shots were creating double bogeys and disrupting momentum."
    },
    {
      score: 83,
      focus: "Driving stability",
      summary: "Tee shot control improved and created more playable second shots."
    },
    {
      score: 81,
      focus: "Approach distance control",
      summary: "Approach play became the main separator between good holes and scoring holes."
    },
    {
      score: 79,
      focus: "Birdie conversion",
      summary: "You are now creating enough chances to score lower more consistently."
    }
  ];

  return <HomeScreen rounds={rounds} />;
}
