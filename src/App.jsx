
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const roundMoments = [
    {
      hole: 4,
      type: "setback",
      description: "Double bogey after penalty drive"
    },
    {
      hole: 6,
      type: "recovery",
      description: "Back-to-back pars stabilised momentum"
    },
    {
      hole: 13,
      type: "pressure",
      description: "Missed short putt slowed scoring momentum"
    },
    {
      hole: 16,
      type: "composure",
      description: "Closing stretch stayed calm after mistake"
    }
  ];

  return <HomeScreen roundMoments={roundMoments} />;
}
