
export function detectContradictions(playerState) {
  const contradictions = [];

  if (
    playerState.ballStrikingTrend === "improving" &&
    playerState.scoringTrend === "flat"
  ) {
    contradictions.push({
      title: "The golf looks stronger than the scoring",
      text:
        "Recent rounds suggest cleaner ball striking and fewer destructive holes, but the score still appears vulnerable when momentum shifts."
    });
  }

  if (
    playerState.emotionalRecovery === "better" &&
    playerState.finishingHoles === "fragile"
  ) {
    contradictions.push({
      title: "Confidence is recovering faster, but not fully lasting",
      text:
        "The round is staying calmer after mistakes, although pressure still appears to influence the closing stretch."
    });
  }

  return contradictions;
}
