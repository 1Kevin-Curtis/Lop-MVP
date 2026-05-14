
export function identifyCurrentState(playerState) {
  if (
    playerState.ballStriking === "improving" &&
    playerState.scoreTrend === "flat"
  ) {
    return {
      identity: "Frustratingly Close",
      summary:
        "Your golf is improving in important areas, but the scores are not fully reflecting it yet."
    };
  }

  return {
    identity: "Controlled Golf",
    summary:
      "Your scoring patterns are becoming calmer and more repeatable."
  };
}
