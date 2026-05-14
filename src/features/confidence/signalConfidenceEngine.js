
export function evaluateSignalConfidence(playerState) {
  if (playerState.signalStrength === "weak") {
    return {
      label: "Weak Signal",
      language:
        "There may not yet be enough evidence to fully trust this pattern."
    };
  }

  if (playerState.signalStrength === "emerging") {
    return {
      label: "Emerging Pattern",
      language:
        "Recent rounds are beginning to suggest a more stable direction may be forming."
    };
  }

  if (playerState.signalStrength === "stable") {
    return {
      label: "Stable Pattern",
      language:
        "This pattern is now appearing consistently enough to influence scoring expectations."
    };
  }

  return {
    label: "Contradictory Pattern",
    language:
      "The current signals still appear slightly mixed across recent rounds."
  };
}
