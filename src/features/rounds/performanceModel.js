
export function buildPerformanceModel(rounds) {
  const recent = rounds.slice(-5);

  const totals = {
    fairways: 0,
    gir: 0,
    penalties: 0,
    threePutts: 0,
    holes: 0
  };

  recent.forEach(round => {
    round.holes.forEach(hole => {
      totals.holes += 1;

      if (hole.fairwayHit) totals.fairways += 1;
      if (hole.gir) totals.gir += 1;
      if (hole.penalty) totals.penalties += 1;
      if (hole.threePutt) totals.threePutts += 1;
    });
  });

  const driving =
    Math.max(
      0,
      Math.min(
        100,
        (totals.fairways / totals.holes) * 120 -
        totals.penalties * 3
      )
    );

  const approach =
    Math.max(
      0,
      Math.min(
        100,
        (totals.gir / totals.holes) * 150
      )
    );

  const putting =
    Math.max(
      0,
      Math.min(
        100,
        90 - totals.threePutts * 4
      )
    );

  return {
    driving: Math.round(driving),
    approach: Math.round(approach),
    putting: Math.round(putting)
  };
}
