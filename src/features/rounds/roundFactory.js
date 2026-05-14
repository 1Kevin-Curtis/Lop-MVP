
export function createHole(hole, score, stats) {
  return {
    hole,
    par: 4,
    score,
    ...stats
  };
}
