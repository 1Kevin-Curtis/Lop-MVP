
export function buildCoachingStory(primarySignal) {
  if (primarySignal.type === "approach") {
    return {
      title:
        "Your golf is now good enough for approach play to matter more",
      summary:
        "The destructive holes are appearing less often. The next scoring jump is likely to come from turning more approach shots into realistic birdie opportunities."
    };
  }

  if (primarySignal.type === "driving") {
    return {
      title:
        "You are starting to trust the shape of your rounds more",
      summary:
        "Better tee shot stability is removing recovery golf and creating calmer scoring stretches."
    };
  }

  return {
    title:
      "Scoring opportunities are beginning to appear more regularly",
    summary:
      "The shape of your rounds is improving, even if confidence still fluctuates from hole to hole."
  };
}
