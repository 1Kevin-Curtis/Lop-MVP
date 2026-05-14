
export function buildIdentityTimeline(rounds) {
  return rounds.map((round, index) => ({
    label:
      index === rounds.length - 1
        ? "Now"
        : `${rounds.length - index - 1} rounds ago`,
    ...round
  }));
}
