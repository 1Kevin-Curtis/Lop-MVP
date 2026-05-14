
export function buildTimeline(rounds) {
  return rounds.map((round, index) => {
    let label;

    if (index === rounds.length - 1) {
      label = "Now";
    } else if (index === rounds.length - 2) {
      label = "Recently";
    } else {
      label = `${rounds.length - index - 1} rounds ago`;
    }

    return {
      label,
      score: round.score,
      focus: round.focus,
      summary: round.summary
    };
  });
}
