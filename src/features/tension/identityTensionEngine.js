
export function detectIdentityTension(playerState) {
  if (
    playerState.ballStriking === "improving" &&
    playerState.scoreTrend === "flat"
  ) {
    return {
      tension:
        "The quality of your golf is improving faster than your scoring confidence.",
      interpretation:
        "You are creating more playable holes and stronger stretches of golf, but one or two unstable moments are still distorting the overall score."
    };
  }

  if (
    playerState.puttingConfidence === "fragile"
  ) {
    return {
      tension:
        "Scoring opportunities are appearing more often than they are being trusted.",
      interpretation:
        "The round is beginning to create chances, but confidence on the greens still disappears too quickly after mistakes."
    };
  }

  return {
    tension:
      "Your stronger golf is beginning to sustain itself for longer periods.",
    interpretation:
      "Recent rounds suggest your game is becoming more emotionally stable under pressure."
  };
}
