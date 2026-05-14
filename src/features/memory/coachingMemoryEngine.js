
export function buildCoachingMemory(memory) {
  let confidenceLanguage;

  if (memory.confidenceLevel === "low") {
    confidenceLanguage =
      "Recent rounds may be beginning to suggest";
  }

  if (memory.confidenceLevel === "medium") {
    confidenceLanguage =
      "A clearer pattern is beginning to appear";
  }

  if (memory.confidenceLevel === "high") {
    confidenceLanguage =
      "This is now consistently shaping your golf";
  }

  return {
    confidenceLanguage,

    memoryNarrative:
      `Three rounds ago the focus was ${memory.previousFocuses[0].toLowerCase()}. More recently, the golf has started shifting toward ${memory.previousFocuses[2].toLowerCase()}.`,

    emotionalNarrative:
      memory.emotionalTrend === "stabilising"
        ? "Your stronger golf is recovering more quickly after mistakes than it was earlier in the season."
        : "Confidence still appears to fluctuate sharply after setbacks.",

    restraintNarrative:
      memory.confidenceLevel === "low"
        ? "It is still too early to know whether this is becoming a lasting shift."
        : "The stronger patterns are beginning to sustain themselves more consistently."
  };
}
