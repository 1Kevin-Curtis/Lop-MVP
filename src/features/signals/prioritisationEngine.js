
export function prioritiseSignals(signals) {
  const ordered = [...signals].sort(
    (a, b) => b.importance - a.importance
  );

  const primary = ordered[0];

  const secondary = ordered.slice(1);

  return {
    primary,
    secondary
  };
}
