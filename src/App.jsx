
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const rounds = [
    {
      score: 86,
      penalties: 4,
      gir: 4,
      threePutts: 3
    },
    {
      score: 82,
      penalties: 1,
      gir: 7,
      threePutts: 2
    },
    {
      score: 79,
      penalties: 1,
      gir: 9,
      threePutts: 1
    }
  ];

  return <HomeScreen rounds={rounds} />;
}
