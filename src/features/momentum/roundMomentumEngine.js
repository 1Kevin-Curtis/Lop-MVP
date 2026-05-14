
export function analyseRoundMomentum(roundMoments) {
  const reflections = [];

  const setback = roundMoments.find(
    moment => moment.type === "setback"
  );

  const recovery = roundMoments.find(
    moment => moment.type === "recovery"
  );

  const composure = roundMoments.find(
    moment => moment.type === "composure"
  );

  if (setback && recovery) {
    reflections.push({
      title: "The round recovered calmly after early disruption",
      text:
        "Momentum stabilised more quickly after the difficult stretch on the front nine than it has in previous rounds."
    });
  }

  if (composure) {
    reflections.push({
      title: "The closing stretch stayed emotionally composed",
      text:
        "Recent rounds suggest frustration is no longer escalating as quickly after mistakes late in the round."
    });
  }

  return reflections;
}
