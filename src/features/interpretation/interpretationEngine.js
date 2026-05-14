
export function interpretPlayerModel(model) {
  const narratives = [];

  if (
    model.driving.trend === "improving" &&
    model.driving.stability === "emerging"
  ) {
    narratives.push({
      title: "Tee shots are starting to remove pressure",
      text:
        "Your better driving holes are appearing more regularly, which is giving the rest of your round more freedom."
    });
  }

  if (
    model.approach.stability === "volatile"
  ) {
    narratives.push({
      title: "Approach play is still deciding your scoring ceiling",
      text:
        "You are creating flashes of strong golf, but inconsistent iron distances are stopping rounds from fully settling."
    });
  }

  if (
    model.putting.stability === "stable"
  ) {
    narratives.push({
      title: "The putter is becoming more dependable",
      text:
        "You are beginning to trust your pace and control more consistently across the round."
    });
  }

  narratives.push({
    title: "Hidden progress is appearing before lower scores",
    text:
      "The shape of your rounds is improving even when the final score does not fully reflect it yet."
  });

  return narratives;
}
