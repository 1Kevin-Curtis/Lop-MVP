
export function identifyRound(round) {
  if (round.penalties >= 3) {
    return {
      identity: "Recovery Golf",
      summary:
        "Too much of the round was spent escaping mistakes rather than building scoring pressure."
    };
  }

  if (round.gir >= 8 && round.threePutts >= 2) {
    return {
      identity: "Scoring Opportunity Round",
      summary:
        "You created enough chances to score well, but the round did not fully convert them."
    };
  }

  if (round.gir >= 8 && round.penalties <= 1) {
    return {
      identity: "Controlled Golf",
      summary:
        "The round stayed composed for longer stretches and avoided disruptive mistakes."
    };
  }

  return {
    identity: "Momentum Interrupted",
    summary:
      "Strong stretches of golf were broken by a small number of costly moments."
  };
}
