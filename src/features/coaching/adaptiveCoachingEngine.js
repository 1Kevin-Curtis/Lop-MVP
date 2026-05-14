
export function buildAdaptiveReflection(state) {
  if (state.stance === "stabilising") {
    return {
      title: "Stay with the calmer golf",
      reflection:
        "The round no longer falls apart as quickly after mistakes. The next breakthrough is likely to come from emotional trust rather than technical change."
    };
  }

  if (state.stance === "reinforcing") {
    return {
      title: "The stronger golf is becoming more repeatable",
      reflection:
        "Your better stretches of golf are now lasting long enough to influence scoring more consistently."
    };
  }

  return {
    title: "The next gains now come from refinement",
    reflection:
      "Your game is becoming stable enough that precision and scoring decisions matter more than recovery patterns."
  };
}
