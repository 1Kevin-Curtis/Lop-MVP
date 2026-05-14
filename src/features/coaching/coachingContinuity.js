
export function buildCoachingContinuity(memoryEngine) {
  return {
    title:
      "Your golf is becoming calmer and more repeatable",

    summary:
      `${memoryEngine.confidenceLanguage} that emotional stability is beginning to influence scoring more than recovery golf.`,

    continuity:
      memoryEngine.memoryNarrative,

    emotional:
      memoryEngine.emotionalNarrative,

    restraint:
      memoryEngine.restraintNarrative
  };
}
