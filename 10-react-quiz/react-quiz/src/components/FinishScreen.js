import React from "react";

export default function FinishScreen({ points, maxPoints, highscore }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        <span>{emoji(percentage)}</span>You scored <strong>{points}</strong> out
        of {maxPoints} ({percentage.toFixed(2)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
    </>
  );
}

function emoji(percentage) {
  if (percentage === 100) return "🥇";
  if (percentage >= 80) return "🎉";
  if (percentage >= 50) return "😃";
  if (percentage > 0) return "🤔";
  if (percentage === 0) return "🤦‍♂️";
}
