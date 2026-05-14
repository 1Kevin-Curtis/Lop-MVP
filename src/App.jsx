
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const rounds = [
    { score: 88 },
    { score: 79 },
    { score: 84 },
    { score: 78 },
    { score: 82 }
  ];

  return <HomeScreen rounds={rounds} />;
}
