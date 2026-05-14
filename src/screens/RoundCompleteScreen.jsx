
export default function RoundCompleteScreen({ latestRound, onHome }) {
  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Round Saved</p>
        <h1>{latestRound?.score}</h1>
        <p>
          Your round has been added to your long-term progression history.
        </p>
      </div>

      <button className="primary-button" onClick={onHome}>
        Return Home
      </button>
    </div>
  );
}
