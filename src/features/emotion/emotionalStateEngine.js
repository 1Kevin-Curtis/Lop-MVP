
export function detectCoachingState(profile) {
  if (
    profile.confidenceState === "fragile" &&
    profile.emotionalState === "frustrated"
  ) {
    return {
      stance: "stabilising",
      tone:
        "The stronger golf is already beginning to appear more often. The next step is trusting it for longer after mistakes."
    };
  }

  if (
    profile.progressionState === "improving" &&
    profile.scoringTrend === "flat"
  ) {
    return {
      stance: "reinforcing",
      tone:
        "Your golf is improving in meaningful ways even before the scores fully reflect it."
    };
  }

  return {
    stance: "challenging",
    tone:
      "Your stronger patterns are now becoming stable enough to push scoring expectations higher."
  };
}
